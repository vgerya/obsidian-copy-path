import {Plugin, Menu, Notice, TAbstractFile, MenuItem, DataAdapter} from 'obsidian';
import {CopyPathSettingsTab} from "settings";


export default class CopyPathPlugin extends Plugin {

	async onload() {
		console.log('Loading Copy Path plugin');

		this.addSettingTab(new CopyPathSettingsTab(this.app, this));


		// Register file menu (right-click on files in file explorer)
		this.registerEvent(
			this.app.workspace.on('file-menu', (menu: Menu, file: TAbstractFile) => {
				this.addCopyPathMenu(menu, file);
			})
		);

		// Register editor menu (right-click in editor content)
		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu: Menu, editor, view) => {
				if (view.file) {
					this.addCopyPathMenu(menu, view.file);
				}
			})
		);

		// Register tab menu (right-click on tabs)
		this.registerEvent(
			// @ts-ignore
			this.app.workspace.on('tab-menu', (menu: Menu, tab: any) => {
				if (tab.view && tab.view.file) {
					this.addCopyPathMenu(menu, tab.view.file);
				}
			})
		);
	}

	onunload() {
		console.log('Unloading Copy Path plugin');
	}

	private addCopyPathMenu(menu: Menu, file: TAbstractFile) {
		menu.addItem((item: MenuItem) => {
			item.setTitle('Copy Path')
				.setIcon('copy');

			// @ts-ignore
			const submenu = item.setSubmenu();

			// Path from Vault Root
			submenu.addItem((subItem: MenuItem) => {
				subItem.setTitle('Path from Vault Root')
					.setIcon('folder')
					.onClick(() => {
						this.copyToClipboard(file.path, 'Path from vault root').then(r => r);
					});
			});

			// Absolute Path
			submenu.addItem((subItem: MenuItem) => {
				subItem.setTitle('Absolute Path')
					.setIcon('hard-drive')
					.onClick(() => {
						const absolutePath = this.getAbsolutePath(file);
						this.copyToClipboard(absolutePath, 'Absolute path').then(r => r);
					});
			});

			// File Name
			submenu.addItem((subItem: MenuItem) => {
				subItem.setTitle('File Name')
					.setIcon('file-text')
					.onClick(() => {
						this.copyToClipboard(file.name, 'File name').then(r => r);
					});
			});
		});
	}

	private getAbsolutePath(file: TAbstractFile): string {
		// Get the vault's adapter path
		const vaultAdapter: DataAdapter = this.app.vault.adapter;
		if ('basePath' in vaultAdapter) {
			// @ts-ignore
			const basePath = (vaultAdapter as any).basePath;
			return `${basePath}/${file.path}`;
		}

		// Fallback for web/mobile where absolute paths might not be available
		return `${this.app.vault.getName()}/${file.path}`;
	}

	private async copyToClipboard(text: string, description: string) {
		try {
			await navigator.clipboard.writeText(text);
			new Notice(`${description} copied to clipboard: ${text}`);
		} catch (err) {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				document.execCommand('copy');
				new Notice(`${description} copied to clipboard: ${text}`);
			} catch (fallbackErr) {
				new Notice(`Failed to copy ${description.toLowerCase()} to clipboard`);
				console.error('Failed to copy to clipboard:', fallbackErr);
			}

			document.body.removeChild(textArea);
		}
	}
}
