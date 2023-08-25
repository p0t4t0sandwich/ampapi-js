/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";

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
     * @return {Promise<any>}
     */
    async TestSMTPSettings(): Promise<any> {
        return this.apiCall("EmailSenderPlugin/TestSMTPSettings", { 
        });
    }

}
