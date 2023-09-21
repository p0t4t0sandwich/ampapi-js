// Import AMPAPI
import { AMPAPI } from "./lib/AMPAPI";

// Import apimodules
import { ADSModule } from "./lib/apimodules/ADSModule";
import { Core } from "./lib/apimodules/Core";
import { EmailSenderPlugin } from "./lib/apimodules/EmailSenderPlugin";
import { FileManagerPlugin } from "./lib/apimodules/FileManagerPlugin";
import { LocalFileBackupPlugin } from "./lib/apimodules/LocalFileBackupPlugin";
import { MinecraftModule } from "./lib/apimodules/MinecraftModule";
import { RCONPlugin } from "./lib/apimodules/RCONPlugin";
import { steamcmdplugin } from "./lib/apimodules/steamcmdplugin";

// Import modules
import { ADS } from "./lib/modules/ADS";
import { CommonAPI } from "./lib/modules/CommonAPI";
import { GenericModule } from "./lib/modules/GenericModule";
import { Minecraft } from "./lib/modules/Minecraft";

// Import types
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, Result, RunningTask, SettingsSpec, Spec, State, lookupState, Status, Task, UpdateInfo, Updates, UserInfo, UUID } from "./lib/types.js";

// Export everything
export { AMPAPI, ADSModule, Core, EmailSenderPlugin, FileManagerPlugin, LocalFileBackupPlugin, MinecraftModule, RCONPlugin, steamcmdplugin, ADS, CommonAPI, GenericModule, Minecraft };
export { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, Result, RunningTask, SettingsSpec, Spec, State, lookupState, Status, Task, UpdateInfo, Updates, UserInfo, UUID };
export default AMPAPI;
