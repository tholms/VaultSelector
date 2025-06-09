# Vault Selector

This Obsidian plugin automatically removes the `"open": true` property from vaults when Obsidian closes. This allows you to choose which vault to open each time you launch Obsidian, rather than automatically opening the last used vault.

## Features

- Automatically removes the `"open": true` property from all vaults when Obsidian closes
- Works with the global Obsidian configuration
- No settings required - just install and use

## Installation

1. Open Obsidian Settings
2. Go to Community Plugins
3. Turn off Safe Mode
4. Click Browse and search for "Vault Selector"
5. Click Install
6. Enable the plugin

## Usage

The plugin works automatically - no configuration needed! When you close Obsidian, it will remove the `"open": true` property from all vaults in your configuration. The next time you open Obsidian, you'll be presented with the vault selection screen.

## Requirements

- Obsidian v0.15.0 or higher
- Desktop version only (does not work on mobile)

## Development

This plugin is built using:
- TypeScript
- ESLint for code quality
- esbuild for bundling

To build the plugin:
```bash
npm install
npm run build
```

## License

MIT
