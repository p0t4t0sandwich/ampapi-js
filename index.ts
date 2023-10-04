// Import AMPAPI
import { AMPAPI } from "./lib/AMPAPI.js";

// Import apimodules
import { ADSModule } from "./lib/apimodules/ADSModule.js";
import { Core } from "./lib/apimodules/Core.js";
import { EmailSenderPlugin } from "./lib/apimodules/EmailSenderPlugin.js";
import { FileManagerPlugin } from "./lib/apimodules/FileManagerPlugin.js";
import { LocalFileBackupPlugin } from "./lib/apimodules/LocalFileBackupPlugin.js";
import { MinecraftModule } from "./lib/apimodules/MinecraftModule.js";
import { RCONPlugin } from "./lib/apimodules/RCONPlugin.js";
import { steamcmdplugin } from "./lib/apimodules/steamcmdplugin.js";

// Import modules
import { ADS } from "./lib/modules/ADS.js";
import { CommonAPI } from "./lib/modules/CommonAPI.js";
import { GenericModule } from "./lib/modules/GenericModule.js";
import { Minecraft } from "./lib/modules/Minecraft.js";

// Import types
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LicenceInfo, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, Result, RunningTask, SettingsSpec, Spec, State, lookupState, Status, Task, UpdateInfo, Updates, UserInfo, UUID } from "./lib/types.js";

// Export everything
export { AMPAPI, ADSModule, Core, EmailSenderPlugin, FileManagerPlugin, LocalFileBackupPlugin, MinecraftModule, RCONPlugin, steamcmdplugin, ADS, CommonAPI, GenericModule, Minecraft };
export { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LicenceInfo, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, Result, RunningTask, SettingsSpec, Spec, State, lookupState, Status, Task, UpdateInfo, Updates, UserInfo, UUID };
export default AMPAPI;
