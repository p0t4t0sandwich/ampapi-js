const ampapi = {};

// Import apimodules
ampapi.AMPAPI = require('./lib/AMPAPI').AMPAPI;
ampapi.ADSModule = require('./lib/apimodules/ADSModule').ADSModule;
ampapi.Core = require('./lib/apimodules/Core').Core;
ampapi.EmailSenderPlugin = require('./lib/apimodules/EmailSenderPlugin').EmailSenderPlugin;
ampapi.FileManagerPlugin = require('./lib/apimodules/FileManagerPlugin').FileManagerPlugin;
ampapi.LocalFileBackupPlugin = require('./lib/apimodules/LocalFileBackupPlugin').LocalFileBackupPlugin;
ampapi.MinecraftModule = require('./lib/apimodules/MinecraftModule').MinecraftModule;
ampapi.RCONPlugin = require('./lib/apimodules/RCONPlugin').RCONPlugin;
ampapi.steamcmdplugin = require('./lib/apimodules/steamcmdplugin').steamcmdplugin;

// Import modules
ampapi.ADS = require('./lib/modules/ADS').ADS;
ampapi.CommonAPI = require('./lib/modules/CommonAPI').CommonAPI;
ampapi.GenericModule = require('./lib/modules/GenericModule').GenericModule;
ampapi.Minecraft = require('./lib/modules/Minecraft').Minecraft;

module.exports = ampapi;
