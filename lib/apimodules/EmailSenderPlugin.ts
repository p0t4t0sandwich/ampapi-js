/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { AMPAPI } from "../AMPAPI.js";
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, RunningTask, SettingSpec, State, lookupState, Status, UpdateInfo, Updates, UserInfo, URL, UUID, LicenceInfo } from "../types.js";


/**
 * @class EmailSenderPlugin
 */
export class EmailSenderPlugin extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the EmailSenderPlugin class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @return {Promise<ActionResult<any>>}
     */
    async TestSMTPSettings(): Promise<ActionResult<any>> {
        return this.apiCall("EmailSenderPlugin/TestSMTPSettings", { 
        });
    }

}
