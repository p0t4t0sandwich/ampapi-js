/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { MinecraftModule } from "../apimodules/MinecraftModule.js";
import { LoginResult } from "../types.js";
import { CommonAPI } from "./CommonAPI.js";

/**
 * @class Minecraft
 */
export class Minecraft extends CommonAPI {
    public MinecraftModule: MinecraftModule = new MinecraftModule(this);

    /**
     * @constructor
     * @description Constructor for the Minecraft class
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
            this.MinecraftModule.sessionId = this.sessionId;
            this.MinecraftModule.rememberMeToken = this.rememberMeToken;
        }

        return loginResult;
    }
}