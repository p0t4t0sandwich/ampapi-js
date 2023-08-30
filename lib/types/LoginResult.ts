import { UserInfo } from "./UserInfo.js";


/**
 * @interface LoginResult
 * @description Interface for the result of API.Core.Login
 * @author p0t4t0sandich
 * @property {boolean} success Whether the login was successful
 * @property {string[]} permissions The permissions of the user
 * @property {string} sessionID The session ID of the user
 * @property {string} rememberMeToken The remember me token of the user
 * @property {UserInfo} userInfo The user info of the user
 * @property {number} result The result of the login
 */
interface LoginResult {
    success: boolean;
    permissions: string[];
    sessionID: string;
    rememberMeToken: string;
    userInfo: UserInfo;
    result: number;
}

export { LoginResult };
