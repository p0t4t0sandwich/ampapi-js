/**
 * @interface UpdateInfo
 * @author p0t4t0sandwich
 * @description An interface to represent the object returned by the ADSModule#GetUpdateInfo() method
 * @link lib/apimodules/Core#GetUpdateInfo()
 * @property {boolean} UpdateAvailable - Whether an update is available
 * @property {string} Version - The version of the update
 * @property {string} Build - The build of the update
 * @property {string} ReleaseNotesURL - The URL to the release notes
 * @property {string} ToolsVersion - The version of the tools
 * @property {boolean} PatchOnly - Whether the update is a patch
 */
interface UpdateInfo {
    UpdateAvailable: boolean;
    Version: string;
    Build: string;
    ReleaseNotesURL: string;
    ToolsVersion: string;
    PatchOnly: boolean;
}

export { UpdateInfo };
