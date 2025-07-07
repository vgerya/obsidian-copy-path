import {App, PluginSettingTab} from 'obsidian';
import CopyPathPlugin from './main';

export class CopyPathSettingsTab extends PluginSettingTab {
	plugin: CopyPathPlugin;

	constructor(app: App, plugin: CopyPathPlugin) {
		super(app, plugin);
		this.plugin = plugin;
		console.log("CopyPathSettingsTab loaded");
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();
		// Header
		containerEl.createEl('h2', {text: 'Copy Path Plugin Settings'});

		// GitHub support section
		const githubSection = containerEl.createDiv('setting-item');
		githubSection.createEl('h3', {text: '🙏 Support This Plugin'});

		const supportDesc = githubSection.createDiv('setting-item-description');
		supportDesc.innerHTML = `
            <p>If you find this plugin helpful, please consider:</p>
            <ul>
                <li>⭐ <strong>Starring the repository</strong> on GitHub</li>
                <li>🐛 <strong>Reporting bugs</strong> or suggesting features</li>
                <li>💬 <strong>Sharing feedback</strong> with the community</li>
            </ul>
            <p>Your support helps improve the plugin for everyone!</p>
        `;

		// GitHub link button
		const githubButton = githubSection.createEl('button', {
			text: '⭐ Star on GitHub',
			cls: 'mod-cta'
		});
		githubButton.onclick = () => {
			window.open('https://github.com/vgerya/obsidian-copy-path', '_blank');
		};

		// Usage instructions
		const usageSection = containerEl.createDiv('setting-item');
		usageSection.createEl('h3', {text: 'How to Use'});

		const usageDesc = usageSection.createDiv('setting-item-description');
		usageDesc.innerHTML = `
            <p><strong>Right-click on any file or folder</strong> in:</p>
            <ul>
                <li>📁 <strong>File Explorer</strong> - Right-click files/folders</li>
                <li>📑 <strong>Tab Headers</strong> - Right-click on tab titles</li>
                <li>✏️ <strong>Editor Content</strong> - Right-click anywhere in the editor</li>
            </ul>
            <p>Then select <strong>"Copy Path..."</strong> and choose your preferred format:</p>
            <ul>
                <li><strong>Path from Vault Root</strong> - Relative path (e.g., <code>folder/file.md</code>)</li>
                <li><strong>Absolute Path</strong> - Full system path (e.g., <code>/Users/name/vault/folder/file.md</code>)</li>
                <li><strong>File Name</strong> - Just the filename (e.g., <code>file.md</code>)</li>
            </ul>
        `;

		// Footer
		containerEl.createEl('hr');
		const footer = containerEl.createDiv('setting-item');
		footer.createEl('p', {
			text: 'Made with ❤️ for the Obsidian community',
			cls: 'setting-item-description'
		});
	}
}
