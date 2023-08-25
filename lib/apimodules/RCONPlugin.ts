/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";

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
