/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { ADSModule } from "../apimodules/ADSModule.js";
import { CommonAPI } from "./CommonAPI.js";
import { GenericModule } from "./GenericModule.js";
import { Minecraft } from "./Minecraft.js";

/**
 * @class ADS
 */
export class ADS extends CommonAPI {
    public ADSModule: ADSModule = new ADSModule(this);

    /**
     * @constructor
     * @description Constructor for the Minecraft class
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
            this.ADSModule.sessionId = this.sessionId;
            this.ADSModule.rememberMeToken = this.rememberMeToken;
        }

        return loginResult;
    }

    /**
     * @method InstanceLogin
     * @description Proxies a login request to an instance and returns a new AMPAPI for that instance.
     * @param {string} instance_id The instance ID to login to
     * @return {Promise<T>} A new AMPAPI for the instance
     */
    public async InstanceLogin<T>(instance_id: string, module: string): Promise<T> {
        const data = {
            username: this.username,
            password: this.password,
            token: "",
            rememberMe: true,
        }

        const loginResult: any = await this.apiCall("ADSModule/Servers/" + instance_id + "/API/Core/Login", data);

        if (loginResult.success === true) {
            const newBaseUri: string = this.baseUri + "API/ADSModule/Servers/" + instance_id;
            const rememberMeToken: string = loginResult.rememberMeToken;
            const sessionId: string = loginResult.sessionID;

            // Return the correct module
            let newInstance: CommonAPI;
            switch (module) {
                case "GenericModule":
                    newInstance = new GenericModule(newBaseUri, this.username, "", rememberMeToken, sessionId);
                    break;
                case "Minecraft":
                    newInstance = new Minecraft(newBaseUri, this.username, "", rememberMeToken, sessionId);
                    break;
                default:
                    newInstance = new GenericModule(newBaseUri, this.username, "", rememberMeToken, sessionId);
                    break;
            }
            await newInstance.APILogin();
            return <T>newInstance;
        } else {
            return undefined;
        }
    }
}
