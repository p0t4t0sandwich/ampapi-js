/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { GenericModule as GenericModuleAlias } from "../apimodules/GenericModule.js";
import { RCONPlugin } from "../apimodules/RCONPlugin.js";
import { steamcmdplugin } from "../apimodules/steamcmdplugin.js";
import { LoginResult } from "../types.js";
import { CommonAPI } from "./CommonAPI.js";

/**
 * @class GenericModule
 */
export class GenericModule extends CommonAPI {
    public GenericModule: GenericModuleAlias = new GenericModuleAlias(this);
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
    constructor(baseUri: string, username: string = "", password: string = "", rememberMeToken: string = "", sessionId: string = "") {
        super(baseUri, username, password, rememberMeToken, sessionId);
    }

    /**
     * Simplified login function
     * @return The result of the login
     */
    override async APILogin(): Promise<any> {
        const loginResult: LoginResult = await super.APILogin();

        if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
            this.rememberMeToken = loginResult.rememberMeToken;
            this.sessionId = loginResult.sessionID;

            // Update the session ID and remember me token of submodules
            this.GenericModule.sessionId = this.sessionId;
            this.GenericModule.rememberMeToken = this.rememberMeToken;
            this.RCONPlugin.sessionId = this.sessionId;
            this.RCONPlugin.rememberMeToken = this.rememberMeToken;
            this.steamcmdplugin.sessionId = this.sessionId;
            this.steamcmdplugin.rememberMeToken = this.rememberMeToken;
        }

        return loginResult;
    }
}
