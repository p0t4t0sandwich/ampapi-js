/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { AMPAPI } from "../AMPAPI.js";
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, RunningTask, SettingsSpec, Spec, State, lookupState, Status, UpdateInfo, Updates, UserInfo, URL, UUID, LicenceInfo } from "../types.js";


/**
 * @class steamcmdplugin
 */
export class steamcmdplugin extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the steamcmdplugin class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async CancelSteamGuard(): Promise<void> {
        return this.apiCall("steamcmdplugin/CancelSteamGuard", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} code  False
     * @return {Promise<void>}
     */
    async SteamGuardCode(code: string): Promise<void> {
        return this.apiCall("steamcmdplugin/SteamGuardCode", { 
            code
        });
    }

    /**
     * Name Description Optional
     * @param {string} username  False
     * @param {string} password  False
     * @return {Promise<void>}
     */
    async SteamUsernamePassword(username: string, password: string): Promise<void> {
        return this.apiCall("steamcmdplugin/SteamUsernamePassword", { 
            username,
            password
        });
    }

}
