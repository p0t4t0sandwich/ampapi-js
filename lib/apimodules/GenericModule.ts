/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { AMPAPI } from "../AMPAPI.js";
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, RunningTask, SettingSpec, State, lookupState, Status, UpdateInfo, Updates, UserInfo, URL, UUID, LicenceInfo } from "../types.js";


/**
 * @class GenericModule
 */
export class GenericModule extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the GenericModule class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @param {string} filename  False
     * @return {Promise<{ [key: string]: string }>}
     */
    async ImportConfig(filename: string): Promise<{ [key: string]: string }> {
        return this.apiCall("GenericModule/ImportConfig", { 
            filename
        });
    }

}
