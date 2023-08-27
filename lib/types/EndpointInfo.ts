/**
 * @interface EndpointInfo
 * @author p0t4t0sandwich
 * @description An application endpoint object
 * @property {string} DisplayName - The display name of the endpoint
 * @property {string} Endpoint - The endpoint address
 * @property {string} Uri - The URI of the endpoint
 */
interface EndpointInfo {
    DisplayName: string;
    Endpoint: string;
    Uri: string;
}

export { EndpointInfo };
