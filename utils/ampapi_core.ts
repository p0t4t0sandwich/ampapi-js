/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

/**
 * @class AMPAPI
 * @description The main class for the AMP API
 * @property {string} baseUri The base URI for the AMP API
 * @property {string} sessionId The session ID for the AMP API
 * @property {string} dataSource The complete API URL for the AMP API
 */
class AMPAPI {
    public baseUri: string;
    public sessionId: string;
    public dataSource: string;

    /**
     * @constructor
     * @description The constructor for the AMP API
     * @param baseUri The base URI for the AMP API
     */
    constructor(baseUri: string) {
        this.baseUri = baseUri;
        this.sessionId = "";
        this.dataSource = "";

        // Check if the base URI ends with a slash
        this.dataSource = this.baseUri.endsWith("/") ? this.baseUri + "API" : this.baseUri + "/API";
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
        // Create the session object
        const session = { "SESSIONID": this.sessionId }

        // Make the request
        const response = await fetch(this.dataSource + "/" + endpoint, {
            method: "POST",
            headers: { "Accept": "text/javascript" },
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

