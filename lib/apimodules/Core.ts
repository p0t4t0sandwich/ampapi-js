/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";

/**
 * @class Core
 */
export class Core extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the Core class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async AcknowledgeAMPUpdate(): Promise<void> {
        return this.apiCall("Core/AcknowledgeAMPUpdate", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} triggerId  False
     * @return {Promise<any>}
     */
    async AddEventTrigger(triggerId: string): Promise<any> {
        return this.apiCall("Core/AddEventTrigger", { 
            triggerId
        });
    }

    /**
     * Name Description Optional
     * @param {number[]} months  False
     * @param {number[]} days  False
     * @param {number[]} hours  False
     * @param {number[]} minutes  False
     * @param {number[]} daysOfMonth  False
     * @param {string} description  False
     * @return {Promise<any>}
     */
    async AddIntervalTrigger(months: number[], days: number[], hours: number[], minutes: number[], daysOfMonth: number[], description: string): Promise<any> {
        return this.apiCall("Core/AddIntervalTrigger", { 
            months,
            days,
            hours,
            minutes,
            daysOfMonth,
            description
        });
    }

    /**
     * Name Description Optional
     * @param {string} TriggerID  False
     * @param {string} MethodID  False
     * @param {{ [key: string]: string }} ParameterMapping  False
     * @return {Promise<any>}
     */
    async AddTask(TriggerID: string, MethodID: string, ParameterMapping: { [key: string]: string }): Promise<any> {
        return this.apiCall("Core/AddTask", { 
            TriggerID,
            MethodID,
            ParameterMapping
        });
    }

    /**
     * DEV: Async test method
     * Name Description Optional
     * @return {Promise<any>}
     */
    async AsyncTest(): Promise<any> {
        return this.apiCall("Core/AsyncTest", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} TaskId  False
     * @return {Promise<any>}
     */
    async CancelTask(TaskId: string): Promise<any> {
        return this.apiCall("Core/CancelTask", { 
            TaskId
        });
    }

    /**
     * Name Description Optional
     * @param {string} TriggerID  False
     * @param {string} TaskID  False
     * @param {number} NewOrder  False
     * @return {Promise<any>}
     */
    async ChangeTaskOrder(TriggerID: string, TaskID: string, NewOrder: number): Promise<any> {
        return this.apiCall("Core/ChangeTaskOrder", { 
            TriggerID,
            TaskID,
            NewOrder
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @param {string} OldPassword  False
     * @param {string} NewPassword  False
     * @param {string} TwoFactorPIN  False
     * @return {Promise<any>}
     */
    async ChangeUserPassword(Username: string, OldPassword: string, NewPassword: string, TwoFactorPIN: string): Promise<any> {
        return this.apiCall("Core/ChangeUserPassword", { 
            Username,
            OldPassword,
            NewPassword,
            TwoFactorPIN
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @param {string} TwoFactorCode  False
     * @return {Promise<any>}
     */
    async ConfirmTwoFactorSetup(Username: string, TwoFactorCode: string): Promise<any> {
        return this.apiCall("Core/ConfirmTwoFactorSetup", { 
            Username,
            TwoFactorCode
        });
    }

    /**
     * Name Description Optional
     * @param {string} Name  False
     * @param {boolean} AsCommonRole  True
     * @return {Promise<any>}
     */
    async CreateRole(Name: string, AsCommonRole: boolean): Promise<any> {
        return this.apiCall("Core/CreateRole", { 
            Name,
            AsCommonRole
        });
    }

    /**
     * DEV: Creates a non-ending task with 50% progress for testing purposes
     * Name Description Optional
     * @return {Promise<void>}
     */
    async CreateTestTask(): Promise<void> {
        return this.apiCall("Core/CreateTestTask", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @return {Promise<any>}
     */
    async CreateUser(Username: string): Promise<any> {
        return this.apiCall("Core/CreateUser", { 
            Username
        });
    }

    /**
     * Name Description Optional
     * @param {string} PermissionNode  False
     * @return {Promise<boolean>}
     */
    async CurrentSessionHasPermission(PermissionNode: string): Promise<boolean> {
        return this.apiCall("Core/CurrentSessionHasPermission", { 
            PermissionNode
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @return {Promise<any>}
     */
    async DeleteInstanceUsers(InstanceId: string): Promise<any> {
        return this.apiCall("Core/DeleteInstanceUsers", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @param {string} RoleId  False
     * @return {Promise<any>}
     */
    async DeleteRole(RoleId: string): Promise<any> {
        return this.apiCall("Core/DeleteRole", { 
            RoleId
        });
    }

    /**
     * Name Description Optional
     * @param {string} TriggerID  False
     * @param {string} TaskID  False
     * @return {Promise<any>}
     */
    async DeleteTask(TriggerID: string, TaskID: string): Promise<any> {
        return this.apiCall("Core/DeleteTask", { 
            TriggerID,
            TaskID
        });
    }

    /**
     * Name Description Optional
     * @param {string} TriggerID  False
     * @return {Promise<any>}
     */
    async DeleteTrigger(TriggerID: string): Promise<any> {
        return this.apiCall("Core/DeleteTrigger", { 
            TriggerID
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @return {Promise<any>}
     */
    async DeleteUser(Username: string): Promise<any> {
        return this.apiCall("Core/DeleteUser", { 
            Username
        });
    }

    /**
     * Name Description Optional
     * @param {string} Password  False
     * @param {string} TwoFactorCode  False
     * @return {Promise<any>}
     */
    async DisableTwoFactor(Password: string, TwoFactorCode: string): Promise<any> {
        return this.apiCall("Core/DisableTwoFactor", { 
            Password,
            TwoFactorCode
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async DismissAllTasks(): Promise<any> {
        return this.apiCall("Core/DismissAllTasks", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} TaskId  False
     * @return {Promise<any>}
     */
    async DismissTask(TaskId: string): Promise<any> {
        return this.apiCall("Core/DismissTask", { 
            TaskId
        });
    }

    /**
     * Name Description Optional
     * @param {string} Id  False
     * @param {number[]} months  False
     * @param {number[]} days  False
     * @param {number[]} hours  False
     * @param {number[]} minutes  False
     * @param {number[]} daysOfMonth  False
     * @param {string} description  False
     * @return {Promise<any>}
     */
    async EditIntervalTrigger(Id: string, months: number[], days: number[], hours: number[], minutes: number[], daysOfMonth: number[], description: string): Promise<any> {
        return this.apiCall("Core/EditIntervalTrigger", { 
            Id,
            months,
            days,
            hours,
            minutes,
            daysOfMonth,
            description
        });
    }

    /**
     * Name Description Optional
     * @param {string} TriggerID  False
     * @param {string} TaskID  False
     * @param {{ [key: string]: string }} ParameterMapping  False
     * @return {Promise<any>}
     */
    async EditTask(TriggerID: string, TaskID: string, ParameterMapping: { [key: string]: string }): Promise<any> {
        return this.apiCall("Core/EditTask", { 
            TriggerID,
            TaskID,
            ParameterMapping
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @param {string} Password  False
     * @return {Promise<any>}
     */
    async EnableTwoFactor(Username: string, Password: string): Promise<any> {
        return this.apiCall("Core/EnableTwoFactor", { 
            Username,
            Password
        });
    }

    /**
     * Name Description Optional
     * @param {string} Id  False
     * @return {Promise<void>}
     */
    async EndUserSession(Id: string): Promise<void> {
        return this.apiCall("Core/EndUserSession", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @param {string} RoleId  False
     * @return {Promise<any>}
     */
    async GetAMPRolePermissions(RoleId: string): Promise<any> {
        return this.apiCall("Core/GetAMPRolePermissions", { 
            RoleId
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @return {Promise<any>}
     */
    async GetAMPUserInfo(Username: string): Promise<any> {
        return this.apiCall("Core/GetAMPUserInfo", { 
            Username
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetAMPUsersSummary(): Promise<any> {
        return this.apiCall("Core/GetAMPUsersSummary", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any[] }>}
     */
    async GetAPISpec(): Promise<{ [key: string]: any[] }> {
        return this.apiCall("Core/GetAPISpec", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetActiveAMPSessions(): Promise<any[]> {
        return this.apiCall("Core/GetActiveAMPSessions", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetAllAMPUserInfo(): Promise<any> {
        return this.apiCall("Core/GetAllAMPUserInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @param {any} Before  False
     * @param {number} Count  False
     * @return {Promise<any[]>}
     */
    async GetAuditLogEntries(Before: any, Count: number): Promise<any[]> {
        return this.apiCall("Core/GetAuditLogEntries", { 
            Before,
            Count
        });
    }

    /**
     * Name Description Optional
     * @param {string} node  False
     * @return {Promise<any>}
     */
    async GetConfig(node: string): Promise<any> {
        return this.apiCall("Core/GetConfig", { 
            node
        });
    }

    /**
     * Name Description Optional
     * @param {string[]} nodes  False
     * @return {Promise<any[]>}
     */
    async GetConfigs(nodes: string[]): Promise<any[]> {
        return this.apiCall("Core/GetConfigs", { 
            nodes
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: string }>}
     */
    async GetDiagnosticsInfo(): Promise<{ [key: string]: string }> {
        return this.apiCall("Core/GetDiagnosticsInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetModuleInfo(): Promise<any> {
        return this.apiCall("Core/GetModuleInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<string>}
     */
    async GetNewGuid(): Promise<string> {
        return this.apiCall("Core/GetNewGuid", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetPermissionsSpec(): Promise<any[]> {
        return this.apiCall("Core/GetPermissionsSpec", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetPortSummaries(): Promise<any[]> {
        return this.apiCall("Core/GetPortSummaries", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetProvisionSpec(): Promise<any[]> {
        return this.apiCall("Core/GetProvisionSpec", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} Description  True
     * @param {boolean} IsTemporary  True
     * @return {Promise<any>}
     */
    async GetRemoteLoginToken(Description: string, IsTemporary: boolean): Promise<any> {
        return this.apiCall("Core/GetRemoteLoginToken", { 
            Description,
            IsTemporary
        });
    }

    /**
     * Name Description Optional
     * @param {string} RoleId  False
     * @return {Promise<any>}
     */
    async GetRole(RoleId: string): Promise<any> {
        return this.apiCall("Core/GetRole", { 
            RoleId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetRoleData(): Promise<any> {
        return this.apiCall("Core/GetRoleData", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetRoleIds(): Promise<any> {
        return this.apiCall("Core/GetRoleIds", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetScheduleData(): Promise<any> {
        return this.apiCall("Core/GetScheduleData", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} SettingNode  False
     * @param {boolean} WithRefresh  True
     * @return {Promise<{ [key: string]: string }>}
     */
    async GetSettingValues(SettingNode: string, WithRefresh: boolean): Promise<{ [key: string]: string }> {
        return this.apiCall("Core/GetSettingValues", { 
            SettingNode,
            WithRefresh
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any[] }>}
     */
    async GetSettingsSpec(): Promise<{ [key: string]: any[] }> {
        return this.apiCall("Core/GetSettingsSpec", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetStatus(): Promise<any> {
        return this.apiCall("Core/GetStatus", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetTasks(): Promise<any> {
        return this.apiCall("Core/GetTasks", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} Id  False
     * @return {Promise<any>}
     */
    async GetTimeIntervalTrigger(Id: string): Promise<any> {
        return this.apiCall("Core/GetTimeIntervalTrigger", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetUpdateInfo(): Promise<any> {
        return this.apiCall("Core/GetUpdateInfo", { 
        });
    }

    /**
     * Gets changes to the server status, in addition to any notifications or console output that have occured since the last time GetUpdates() was called by the current session.
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetUpdates(): Promise<any> {
        return this.apiCall("Core/GetUpdates", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetUserActionsSpec(): Promise<any> {
        return this.apiCall("Core/GetUserActionsSpec", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} UID  False
     * @return {Promise<any>}
     */
    async GetUserInfo(UID: string): Promise<any> {
        return this.apiCall("Core/GetUserInfo", { 
            UID
        });
    }

    /**
     * Returns a list of in-application users
     * Name Description Optional
     * @return {Promise<{ [key: string]: string }>}
     */
    async GetUserList(): Promise<{ [key: string]: string }> {
        return this.apiCall("Core/GetUserList", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetWebauthnChallenge(): Promise<any> {
        return this.apiCall("Core/GetWebauthnChallenge", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} username  False
     * @return {Promise<any>}
     */
    async GetWebauthnCredentialIDs(username: string): Promise<any> {
        return this.apiCall("Core/GetWebauthnCredentialIDs", { 
            username
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetWebauthnCredentialSummaries(): Promise<any[]> {
        return this.apiCall("Core/GetWebauthnCredentialSummaries", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetWebserverMetrics(): Promise<any> {
        return this.apiCall("Core/GetWebserverMetrics", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Kill(): Promise<void> {
        return this.apiCall("Core/Kill", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} username  False
     * @param {string} password  False
     * @param {string} token  False
     * @param {boolean} rememberMe  False
     * @return {Promise<any>}
     */
    async Login(username: string, password: string, token: string, rememberMe: boolean): Promise<any> {
        return this.apiCall("Core/Login", { 
            username,
            password,
            token,
            rememberMe
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Logout(): Promise<void> {
        return this.apiCall("Core/Logout", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} Node  False
     * @return {Promise<any>}
     */
    async RefreshSettingValueList(Node: string): Promise<any> {
        return this.apiCall("Core/RefreshSettingValueList", { 
            Node
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async RefreshSettingsSourceCache(): Promise<void> {
        return this.apiCall("Core/RefreshSettingsSourceCache", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} RoleId  False
     * @param {string} NewName  False
     * @return {Promise<any>}
     */
    async RenameRole(RoleId: string, NewName: string): Promise<any> {
        return this.apiCall("Core/RenameRole", { 
            RoleId,
            NewName
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @param {string} NewPassword  False
     * @return {Promise<any>}
     */
    async ResetUserPassword(Username: string, NewPassword: string): Promise<any> {
        return this.apiCall("Core/ResetUserPassword", { 
            Username,
            NewPassword
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async Restart(): Promise<any> {
        return this.apiCall("Core/Restart", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async RestartAMP(): Promise<void> {
        return this.apiCall("Core/RestartAMP", { 
        });
    }

    /**
     * Allows the service to be re-started after previously being suspended.
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Resume(): Promise<void> {
        return this.apiCall("Core/Resume", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} ID  False
     * @return {Promise<any>}
     */
    async RevokeWebauthnCredential(ID: number): Promise<any> {
        return this.apiCall("Core/RevokeWebauthnCredential", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @param {string} triggerId  False
     * @return {Promise<any>}
     */
    async RunEventTriggerImmediately(triggerId: string): Promise<any> {
        return this.apiCall("Core/RunEventTriggerImmediately", { 
            triggerId
        });
    }

    /**
     * Name Description Optional
     * @param {string} message  False
     * @return {Promise<void>}
     */
    async SendConsoleMessage(message: string): Promise<void> {
        return this.apiCall("Core/SendConsoleMessage", { 
            message
        });
    }

    /**
     * Name Description Optional
     * @param {string} RoleId  False
     * @param {string} PermissionNode  False
     * @param {boolean | null} Enabled  False
     * @return {Promise<any>}
     */
    async SetAMPRolePermission(RoleId: string, PermissionNode: string, Enabled: boolean | null): Promise<any> {
        return this.apiCall("Core/SetAMPRolePermission", { 
            RoleId,
            PermissionNode,
            Enabled
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserId  False
     * @param {string} RoleId  False
     * @param {boolean} IsMember  False
     * @return {Promise<any>}
     */
    async SetAMPUserRoleMembership(UserId: string, RoleId: string, IsMember: boolean): Promise<any> {
        return this.apiCall("Core/SetAMPUserRoleMembership", { 
            UserId,
            RoleId,
            IsMember
        });
    }

    /**
     * Name Description Optional
     * @param {string} node  False
     * @param {string} value  False
     * @return {Promise<any>}
     */
    async SetConfig(node: string, value: string): Promise<any> {
        return this.apiCall("Core/SetConfig", { 
            node,
            value
        });
    }

    /**
     * Name Description Optional
     * @param {{ [key: string]: string }} data  False
     * @return {Promise<boolean>}
     */
    async SetConfigs(data: { [key: string]: string }): Promise<boolean> {
        return this.apiCall("Core/SetConfigs", { 
            data
        });
    }

    /**
     * Name Description Optional
     * @param {string} Id  False
     * @param {boolean} Enabled  False
     * @return {Promise<any>}
     */
    async SetTriggerEnabled(Id: string, Enabled: boolean): Promise<any> {
        return this.apiCall("Core/SetTriggerEnabled", { 
            Id,
            Enabled
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async Sleep(): Promise<any> {
        return this.apiCall("Core/Sleep", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async Start(): Promise<any> {
        return this.apiCall("Core/Start", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Stop(): Promise<void> {
        return this.apiCall("Core/Stop", { 
        });
    }

    /**
     * Prevents the current instance from being started, and stops it if it's currently running.
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Suspend(): Promise<void> {
        return this.apiCall("Core/Suspend", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async UpdateAMPInstance(): Promise<void> {
        return this.apiCall("Core/UpdateAMPInstance", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} EmailAddress  False
     * @param {string} TwoFactorPIN  False
     * @return {Promise<any>}
     */
    async UpdateAccountInfo(EmailAddress: string, TwoFactorPIN: string): Promise<any> {
        return this.apiCall("Core/UpdateAccountInfo", { 
            EmailAddress,
            TwoFactorPIN
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async UpdateApplication(): Promise<any> {
        return this.apiCall("Core/UpdateApplication", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @param {boolean} Disabled  False
     * @param {boolean} PasswordExpires  False
     * @param {boolean} CannotChangePassword  False
     * @param {boolean} MustChangePassword  False
     * @param {string} EmailAddress  True
     * @return {Promise<any>}
     */
    async UpdateUserInfo(Username: string, Disabled: boolean, PasswordExpires: boolean, CannotChangePassword: boolean, MustChangePassword: boolean, EmailAddress: string): Promise<any> {
        return this.apiCall("Core/UpdateUserInfo", { 
            Username,
            Disabled,
            PasswordExpires,
            CannotChangePassword,
            MustChangePassword,
            EmailAddress
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async UpgradeAMP(): Promise<void> {
        return this.apiCall("Core/UpgradeAMP", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} attestationObject  False
     * @param {string} clientDataJSON  False
     * @param {string} description  True
     * @return {Promise<any>}
     */
    async WebauthnRegister(attestationObject: string, clientDataJSON: string, description: string): Promise<any> {
        return this.apiCall("Core/WebauthnRegister", { 
            attestationObject,
            clientDataJSON,
            description
        });
    }

}
