/**
 * @interface UserInfo
 * @description Interface for the user info
 * @author p0t4t0sandich
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

export { UserInfo };
