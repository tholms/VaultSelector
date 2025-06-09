import { Notice, Plugin } from 'obsidian';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

interface VaultSelectorSettings {
	// Add settings here if needed in the future
}

const DEFAULT_SETTINGS: VaultSelectorSettings = {
	// Add default settings here if needed in the future
}

export default class VaultSelectorPlugin extends Plugin {
	settings: VaultSelectorSettings;

	async onload() {
		await this.loadSettings();

		// Add window unload handler
		window.addEventListener('beforeunload', () => {
			this.handleUnload();
		});
	}

	async onunload() {
		await this.handleUnload();
	}

	private async handleUnload() {
		try {
			// Get the path to the global obsidian.json in AppData
			const appDataPath = process.env.APPDATA || os.homedir();
			const configPath = path.join(appDataPath, 'obsidian', 'obsidian.json');

			// Check if file exists
			if (!fs.existsSync(configPath)) {
				return;
			}

			// Read the current config
			const configContent = fs.readFileSync(configPath, 'utf8');
			const config = JSON.parse(configContent);

			// Remove "open": true from each vault
			if (config.vaults) {
				Object.keys(config.vaults).forEach(vaultId => {
					if (config.vaults[vaultId].open) {
						delete config.vaults[vaultId].open;
					}
				});
			}

			// Write the modified config back
			fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
			new Notice('Successfully updated vault configuration');
		} catch (error) {
			new Notice('Failed to update vault configuration: ' + error.message);
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
