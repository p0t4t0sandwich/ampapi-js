/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { AMPAPI } from "../AMPAPI.js";
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, Result, RunningTask, SettingsSpec, Spec, State, lookupState, Status, Task, UpdateInfo, Updates, UserInfo, URL, UUID, LicenceInfo } from "../types.js";


/**
 * @class RCONPlugin
 */
export class RCONPlugin extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the RCONPlugin class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Dummy(): Promise<void> {
        return this.apiCall("RCONPlugin/Dummy", { 
        });
    }

}
