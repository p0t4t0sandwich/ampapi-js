/**
 * @class AMPAPIHandler
 * @description Modified handler class for the AMP API
 * @param {string} username Username for the AMP API
 * @param {string} password Password for the AMP API
 * @param {string} rememberMeToken Remember me token for the AMP API
 * @extends AMPAPI
 */
class AMPAPIHandler extends AMPAPI {
    private username: string;
    private password: string;
    private rememberMeToken: string;

    /**
     * @constructor
     * @description Constructor for the AMP API handler
     * @param baseUri Base URI for the AMP API
     * @param username AMP API username
     * @param password AMP API password
     * @param rememberMeToken Remember me token for the AMP API
     * @param sessionId Session ID for the AMP API
     */
    constructor(baseUri: string, username: string, password: string, rememberMeToken: string, sessionId: string) {
        super(baseUri);
        if (!this.baseUri.endsWith("/")) {
            this.baseUri += "/";
        }
        this.username = username;
        this.password = password;
        this.rememberMeToken = rememberMeToken;
        this.sessionId = sessionId;
    }

    /**
     * @method Login
     * @description Simplified login function
     * @returns {Promise<any>} The result of the login
     */
    public async Login(): Promise<any> {
        const data = {
            username: this.username,
            password: this.password,
            token: this.rememberMeToken,
            rememberMe: true,
        }

        const loginResult = await this.apiCall("Core/Login", data);

        if (loginResult.success === true) {
            this.rememberMeToken = loginResult.rememberMeToken;
            this.sessionId = loginResult.sessionID;
        }

        return loginResult;
    }

    /**
     * @method InstanceLogin
     * @description Proxies a login request to an instance and returns a new AMPAPIHandler for that instance.
     * @param {string} instanceId The instance ID to login to
     * @return {Promise<AMPAPIHandler>} A new AMPAPIHandler for the instance
     */
    public async InstanceLogin(instanceId: string): Promise<AMPAPIHandler> {
        const data = {
            username: this.username,
            password: this.password,
            token: this.rememberMeToken,
            rememberMe: true,
        }

        const loginResult = await this.apiCall("ADSModule/Servers/" + instanceId + "/API/Core/Login", data);

        if (loginResult.success === true) {
            return new AMPAPIHandler(this.baseUri + "API/ADSModule/Servers/" + instanceId, this.username, "", loginResult.rememberMeToken, loginResult.sessionID);
        } else {
            return undefined;
        }
    }
}
