# Copy Path Plugin for Obsidian

A simple yet powerful Obsidian plugin that adds convenient "Copy Path..." context menu options to quickly copy file and folder paths in different formats.

## ✨ Features

- **Multiple Context Menus**: Available in file explorer, tab headers, and editor content
- **Three Path Formats**:
  - **Path from Vault Root**: Relative path from your vault (e.g., `folder/file.md`)
  - **Absolute Path**: Full system path (e.g., `/Users/username/MyVault/folder/file.md`)
  - **File Name**: Just the filename (e.g., `file.md`)
- **Clean UI**: Organized submenu with intuitive icons
- **Works Everywhere**: Files, folders, and all file types
- **Cross-Platform**: Works on desktop and mobile

## 🚀 Installation

### From Community Plugins (Recommended)
1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "Copy Path"
4. Install and enable the plugin

### Manual Installation
1. Download the latest release from [GitHub Releases](https://github.com/yourusername/obsidian-copy-path-plugin/releases)
2. Extract the files to your vault's plugins folder: `VaultFolder/.obsidian/plugins/copy-path-plugin/`
3. Reload Obsidian
4. Enable the plugin in Community Plugins settings

### For Developers
```bash
git clone https://github.com/yourusername/obsidian-copy-path-plugin.git
cd obsidian-copy-path-plugin
npm install
npm run build
```

## 📖 Usage

### File Explorer
Right-click on any file or folder in the file explorer → **Copy Path...** → Choose your format

### Tab Context Menu
Right-click on any tab header → **Copy Path...** → Choose your format

### Editor Context Menu
Right-click anywhere in the editor → **Copy Path...** → Choose your format

## 🎯 Use Cases

- **Documentation**: Quickly reference file paths in your notes
- **Scripting**: Copy paths for automation scripts
- **External Tools**: Share file locations with other applications
- **Backup**: Reference files for backup or sync operations
- **Development**: Copy paths for linking assets or resources

## ⚙️ Settings

The plugin includes settings to customize its behavior:

- **Show confirmation notices**: Toggle success messages when copying paths
- **Enable in file explorer**: Show/hide menu in file explorer context menu
- **Enable in tab menu**: Show/hide menu in tab context menu
- **Enable in editor menu**: Show/hide menu in editor context menu

## 🔧 Configuration

No complex configuration needed! The plugin works out of the box with sensible defaults.

## 🐛 Troubleshooting

### Path not copying?
- Ensure your browser allows clipboard access
- Check that JavaScript is enabled
- Try refreshing Obsidian

### Menu not appearing?
- Verify the plugin is enabled in Community Plugins
- Check that you're right-clicking in the correct context
- Restart Obsidian if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### Development Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` for development mode
4. Run `npm run build` for production build

## 📝 Changelog

### v1.0.0
- Initial release
- Added context menus for file explorer, tabs, and editor
- Three path format options
- Cross-platform support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Support

If you find this plugin helpful, please:
- ⭐ Star the repository on GitHub
- 🐛 Report bugs or suggest features via GitHub Issues
- 💬 Share your feedback in the Obsidian community

## 📧 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Obsidian Forum: [Your Forum Username]

---

**Made with ❤️ for the Obsidian community**
