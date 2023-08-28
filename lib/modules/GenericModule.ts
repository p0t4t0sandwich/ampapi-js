/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { RCONPlugin } from "../apimodules/RCONPlugin.js";
import { steamcmdplugin } from "../apimodules/steamcmdplugin.js";
import { CommonAPI } from "./CommonAPI.js";

/**
 * @class GenericModule
 */
export class GenericModule extends CommonAPI {
    public RCONPlugin: RCONPlugin = new RCONPlugin(this);
    public steamcmdplugin: steamcmdplugin = new steamcmdplugin(this);

    /**
     * @constructor
     * @description Constructor for the GenericModule class
     * @param {string} baseUri Base URI for the AMP API
     * @param {string} username AMP API username
     * @param {string} password AMP API password
     * @param {string} rememberMeToken Remember me token for the AMP API
     * @param {string} sessionId Session ID for the AMP API
     */
    constructor(baseUri: string, username: string, password: string, rememberMeToken: string = "", sessionId: string = "") {
        super(baseUri, username, password, rememberMeToken, sessionId);
    }

    /**
     * Simplified login function
     * @return The result of the login
     */
    override async APILogin(): Promise<any> {
        const loginResult: any = await super.APILogin();

        if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
            this.rememberMeToken = loginResult.rememberMeToken;
            this.sessionId = loginResult.sessionID;

            // Update the session ID and remember me token of submodules
            this.RCONPlugin.sessionId = this.sessionId;
            this.RCONPlugin.rememberMeToken = this.rememberMeToken;
            this.steamcmdplugin.sessionId = this.sessionId;
            this.steamcmdplugin.rememberMeToken = this.rememberMeToken;
        }

        return loginResult;
    }
}