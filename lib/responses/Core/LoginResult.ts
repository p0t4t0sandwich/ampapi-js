/**
 * @author p0t4t0sandich
 * @description Response type for API.Core.Login
 * @see /lib/apimodules/Core.ts#Login
 */

/**
 * @interface LoginResult
 * @description Interface for the result of API.Core.Login
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

/**
 * @interface UserInfo
 * @description Interface for the user info
 * @property {string} ID The ID of the user
 * @property {string} Username The username of the user
 * @property {boolean} IsTwoFactorEnabled Whether two factor authentication is enabled for the user
 * @property {boolean} Disabled Whether the user is disabled
 * @property {string} LastLogin The last login of the user
 * @property {string} GravatarHash The gravatar hash of the user
 * @property {boolean} IsLDAPUser Whether the user is an LDAP user
 */
interface UserInfo {
    ID: string;
    Username: string;
    IsTwoFactorEnabled: boolean;
    Disabled: boolean;
    LastLogin: string;
    GravatarHash: string;
    IsLDAPUser: boolean;
}

export { LoginResult, UserInfo };
