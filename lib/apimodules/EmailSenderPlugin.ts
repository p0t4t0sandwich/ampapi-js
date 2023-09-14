/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, Result, RunningTask, SettingsSpec, Spec, State, lookupState, Status, Task, UpdateInfo, Updates, UserInfo, URL, UUID } from "../types.js";


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
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async TestSMTPSettings(): Promise<Task<ActionResult<any>>> {
        return this.apiCall("EmailSenderPlugin/TestSMTPSettings", { 
        });
    }

}
