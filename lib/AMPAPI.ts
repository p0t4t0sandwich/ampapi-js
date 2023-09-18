/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { LoginResult } from "./types.js";


/**
 * @class AMPAPI
 * @description The main class for the AMP API
 * @property {string} baseUri The base URI for the AMP API
 * @property {string} dataSource The complete API URL for the AMP API
 * @property {string} username Username for the AMP API
 * @property {string} password Password for the AMP API
 * @property {string} rememberMeToken Remember me token for the AMP API
 * @property {string} sessionId The session ID for the AMP API
 */
export class AMPAPI {
    public baseUri: string;
    public dataSource: string;
    public username: string;
    public password: string;
    public rememberMeToken: string;
    public sessionId: string;
    public requestMethod: string = "POST";
    private lastAPICall: number = Date.now();
    public relogInterval: number = 1000 * 60 * 5;

    /**
     * @constructor
     * @description Constructor for the AMP API handler
     * @param baseUri Base URI for the AMP API
     * @param username AMP API username
     * @param password AMP API password
     * @param rememberMeToken Remember me token for the AMP API
     * @param sessionId Session ID for the AMP API
     */
    constructor(baseUri: string, username: string = "", password: string = "", rememberMeToken: string = "", sessionId: string = "") {
        this.baseUri = baseUri;

        // Check if the base URI ends with a slash
        if (!this.baseUri.endsWith("/")) {
            this.baseUri += "/";
        }
        this.dataSource = this.baseUri + "API";

        this.username = username;
        this.password = password;
        this.rememberMeToken = rememberMeToken;
        this.sessionId = sessionId;
    }

    /**
     * @function apiCall
     * @description A function to make a call to the AMP API
     * @param {string} endpoint The endpoint to call
     * @param {any} data The data to send to the endpoint
     * @returns {Promise<any>} The response from the API
     * @throws {Error} An error if the API call fails
     */
    async apiCall(endpoint: string, data: any = {}): Promise<any> {
        // Check the last API call time, and if it's been more than the relog interval, relog.
        if (Date.now() - this.lastAPICall > this.relogInterval) {
            this.lastAPICall = Date.now();
            await this.APILogin();
        } else {
            this.lastAPICall = Date.now();
        }
        const session = { "SESSIONID": this.sessionId }

        // Make the request
        const response = await fetch(this.dataSource + "/" + endpoint, {
            method: this.requestMethod,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/javascript',
                'User-Agent': 'ampapi-js/1.0.4'
            },
            body: JSON.stringify({ ...data, ...session })
        });

        // Check if the response is valid
        if (response.ok) {
            // Return the response
            return response.json();
        } else {
            // Throw an error
            throw new Error("API call failed");
        }
    }

    /**
     * @method APILogin
     * @description Simplified login function
     * @returns {Promise<any>} The result of the login
     */
    public async APILogin(): Promise<any> {
        const data = {
            username: this.username,
            password: "",
            token: this.rememberMeToken,
            rememberMe: true,
        }
        // If remember me token is empty, use the password.
        if (this.rememberMeToken === "") {
            data.password = this.password;
        }

        const loginResult: LoginResult = await this.apiCall("Core/Login", data);

        if (loginResult.success === true) {
            this.rememberMeToken = loginResult.rememberMeToken;
            this.sessionId = loginResult.sessionID;
        }

        return loginResult;
    }
}
