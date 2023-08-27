/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { UUID } from "crypto";
import { AMPAPI } from "../AMPAPI.js";
import { Result } from "../types/Result.js";
import { ActionResult } from "../types/ActionResult.js";
import { Task } from "../types/Task.js";
import { RunningTask } from "../types/RunningTask.js";
import { UserInfo } from "../types/UserInfo.js";
import { ModuleInfo } from "../types/ModuleInfo.js";
import { Status } from "../types/Status.js";
import { SettingSpec } from "../types/SettingSpec.js";
import { UpdateInfo } from "../types/UpdateInfo.js";
import { GetUpdatesResult } from "../types/GetUpdatesResult.js";
import { LoginResult } from "../types/LoginResult.js";


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
     * @param {UUID} triggerId  False
     * @return {Promise<ActionResult<any>>}
     */
    async AddEventTrigger(triggerId: UUID): Promise<ActionResult<any>> {
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
     * @return {Promise<ActionResult<any>>}
     */
    async AddIntervalTrigger(months: number[], days: number[], hours: number[], minutes: number[], daysOfMonth: number[], description: string): Promise<ActionResult<any>> {
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
     * @param {UUID} TriggerID  False
     * @param {string} MethodID  False
     * @param {{ [key: string]: string }} ParameterMapping  False
     * @return {Promise<ActionResult<any>>}
     */
    async AddTask(TriggerID: UUID, MethodID: string, ParameterMapping: { [key: string]: string }): Promise<ActionResult<any>> {
        return this.apiCall("Core/AddTask", { 
            TriggerID,
            MethodID,
            ParameterMapping
        });
    }

    /**
     * DEV: Async test method
     * Name Description Optional
     * @return {Promise<Task<string>>}
     */
    async AsyncTest(): Promise<Task<string>> {
        return this.apiCall("Core/AsyncTest", { 
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TaskId  False
     * @return {Promise<ActionResult<any>>}
     */
    async CancelTask(TaskId: UUID): Promise<ActionResult<any>> {
        return this.apiCall("Core/CancelTask", { 
            TaskId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TriggerID  False
     * @param {UUID} TaskID  False
     * @param {number} NewOrder  False
     * @return {Promise<ActionResult<any>>}
     */
    async ChangeTaskOrder(TriggerID: UUID, TaskID: UUID, NewOrder: number): Promise<ActionResult<any>> {
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
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async ChangeUserPassword(Username: string, OldPassword: string, NewPassword: string, TwoFactorPIN: string): Promise<Task<ActionResult<any>>> {
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
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async ConfirmTwoFactorSetup(Username: string, TwoFactorCode: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/ConfirmTwoFactorSetup", { 
            Username,
            TwoFactorCode
        });
    }

    /**
     * Name Description Optional
     * @param {string} Name  False
     * @param {boolean} AsCommonRole  True
     * @return {Promise<Task<ActionResult<UUID>>>}
     */
    async CreateRole(Name: string, AsCommonRole: boolean): Promise<Task<ActionResult<UUID>>> {
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
     * @return {Promise<Task<ActionResult<UUID>>>}
     */
    async CreateUser(Username: string): Promise<Task<ActionResult<UUID>>> {
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
     * @param {UUID} InstanceId  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async DeleteInstanceUsers(InstanceId: UUID): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/DeleteInstanceUsers", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} RoleId  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async DeleteRole(RoleId: UUID): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/DeleteRole", { 
            RoleId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TriggerID  False
     * @param {UUID} TaskID  False
     * @return {Promise<ActionResult<any>>}
     */
    async DeleteTask(TriggerID: UUID, TaskID: UUID): Promise<ActionResult<any>> {
        return this.apiCall("Core/DeleteTask", { 
            TriggerID,
            TaskID
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TriggerID  False
     * @return {Promise<ActionResult<any>>}
     */
    async DeleteTrigger(TriggerID: UUID): Promise<ActionResult<any>> {
        return this.apiCall("Core/DeleteTrigger", { 
            TriggerID
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async DeleteUser(Username: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/DeleteUser", { 
            Username
        });
    }

    /**
     * Name Description Optional
     * @param {string} Password  False
     * @param {string} TwoFactorCode  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async DisableTwoFactor(Password: string, TwoFactorCode: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/DisableTwoFactor", { 
            Password,
            TwoFactorCode
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<ActionResult<any>>}
     */
    async DismissAllTasks(): Promise<ActionResult<any>> {
        return this.apiCall("Core/DismissAllTasks", { 
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TaskId  False
     * @return {Promise<ActionResult<any>>}
     */
    async DismissTask(TaskId: UUID): Promise<ActionResult<any>> {
        return this.apiCall("Core/DismissTask", { 
            TaskId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} Id  False
     * @param {number[]} months  False
     * @param {number[]} days  False
     * @param {number[]} hours  False
     * @param {number[]} minutes  False
     * @param {number[]} daysOfMonth  False
     * @param {string} description  False
     * @return {Promise<ActionResult<any>>}
     */
    async EditIntervalTrigger(Id: UUID, months: number[], days: number[], hours: number[], minutes: number[], daysOfMonth: number[], description: string): Promise<ActionResult<any>> {
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
     * @param {UUID} TriggerID  False
     * @param {UUID} TaskID  False
     * @param {{ [key: string]: string }} ParameterMapping  False
     * @return {Promise<ActionResult<any>>}
     */
    async EditTask(TriggerID: UUID, TaskID: UUID, ParameterMapping: { [key: string]: string }): Promise<ActionResult<any>> {
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
     * @return {Promise<Task<any>>}
     */
    async EnableTwoFactor(Username: string, Password: string): Promise<Task<any>> {
        return this.apiCall("Core/EnableTwoFactor", { 
            Username,
            Password
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} Id  False
     * @return {Promise<void>}
     */
    async EndUserSession(Id: UUID): Promise<void> {
        return this.apiCall("Core/EndUserSession", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} RoleId  False
     * @return {Promise<Task<string[]>>}
     */
    async GetAMPRolePermissions(RoleId: UUID): Promise<Task<string[]>> {
        return this.apiCall("Core/GetAMPRolePermissions", { 
            RoleId
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @return {Promise<Task<UserInfo>>}
     */
    async GetAMPUserInfo(Username: string): Promise<Task<UserInfo>> {
        return this.apiCall("Core/GetAMPUserInfo", { 
            Username
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Task<any[]>>}
     */
    async GetAMPUsersSummary(): Promise<Task<any[]>> {
        return this.apiCall("Core/GetAMPUsersSummary", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: { [key: string]: any } }>}
     */
    async GetAPISpec(): Promise<{ [key: string]: { [key: string]: any } }> {
        return this.apiCall("Core/GetAPISpec", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<any[]>>}
     */
    async GetActiveAMPSessions(): Promise<Result<any[]>> {
        return this.apiCall("Core/GetActiveAMPSessions", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Task<UserInfo[]>>}
     */
    async GetAllAMPUserInfo(): Promise<Task<UserInfo[]>> {
        return this.apiCall("Core/GetAllAMPUserInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @param {any} Before  False
     * @param {number} Count  False
     * @return {Promise<Result<any[]>>}
     */
    async GetAuditLogEntries(Before: any, Count: number): Promise<Result<any[]>> {
        return this.apiCall("Core/GetAuditLogEntries", { 
            Before,
            Count
        });
    }

    /**
     * Name Description Optional
     * @param {string} node  False
     * @return {Promise<{ [key: string]: any }>}
     */
    async GetConfig(node: string): Promise<{ [key: string]: any }> {
        return this.apiCall("Core/GetConfig", { 
            node
        });
    }

    /**
     * Name Description Optional
     * @param {string[]} nodes  False
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetConfigs(nodes: string[]): Promise<Result<{ [key: string]: any }[]>> {
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
     * @return {Promise<Result<ModuleInfo>>}
     */
    async GetModuleInfo(): Promise<Result<ModuleInfo>> {
        return this.apiCall("Core/GetModuleInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<UUID>}
     */
    async GetNewGuid(): Promise<UUID> {
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
     * @return {Promise<Result<any[]>>}
     */
    async GetPortSummaries(): Promise<Result<any[]>> {
        return this.apiCall("Core/GetPortSummaries", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any }[]>}
     */
    async GetProvisionSpec(): Promise<{ [key: string]: any }[]> {
        return this.apiCall("Core/GetProvisionSpec", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} Description  True
     * @param {boolean} IsTemporary  True
     * @return {Promise<Task<string>>}
     */
    async GetRemoteLoginToken(Description: string, IsTemporary: boolean): Promise<Task<string>> {
        return this.apiCall("Core/GetRemoteLoginToken", { 
            Description,
            IsTemporary
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} RoleId  False
     * @return {Promise<Task<Object>>}
     */
    async GetRole(RoleId: UUID): Promise<Task<Object>> {
        return this.apiCall("Core/GetRole", { 
            RoleId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Task<any[]>>}
     */
    async GetRoleData(): Promise<Task<any[]>> {
        return this.apiCall("Core/GetRoleData", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Task<{ [key: UUID]: any }>>}
     */
    async GetRoleIds(): Promise<Task<{ [key: UUID]: any }>> {
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
     * @return {Promise<Result<{ [key: string]: SettingSpec[] }>>}
     */
    async GetSettingsSpec(): Promise<Result<{ [key: string]: SettingSpec[] }>> {
        return this.apiCall("Core/GetSettingsSpec", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Status>}
     */
    async GetStatus(): Promise<Status> {
        return this.apiCall("Core/GetStatus", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<RunningTask[]>>}
     */
    async GetTasks(): Promise<Result<RunningTask[]>> {
        return this.apiCall("Core/GetTasks", { 
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} Id  False
     * @return {Promise<any>}
     */
    async GetTimeIntervalTrigger(Id: UUID): Promise<any> {
        return this.apiCall("Core/GetTimeIntervalTrigger", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<UpdateInfo>>}
     */
    async GetUpdateInfo(): Promise<Result<UpdateInfo>> {
        return this.apiCall("Core/GetUpdateInfo", { 
        });
    }

    /**
     * Gets changes to the server status, in addition to any notifications or console output that have occured since the last time GetUpdates() was called by the current session.
     * Name Description Optional
     * @return {Promise<GetUpdatesResult>}
     */
    async GetUpdates(): Promise<GetUpdatesResult> {
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
     * @return {Promise<{ [key: string]: any }>}
     */
    async GetUserInfo(UID: string): Promise<{ [key: string]: any }> {
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
     * @return {Promise<ActionResult<string>>}
     */
    async GetWebauthnChallenge(): Promise<ActionResult<string>> {
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
     * @return {Promise<Result<any[]>>}
     */
    async GetWebauthnCredentialSummaries(): Promise<Result<any[]>> {
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
     * @return {Promise<LoginResult>}
     */
    async Login(username: string, password: string, token: string, rememberMe: boolean): Promise<LoginResult> {
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
     * @return {Promise<ActionResult<any>>}
     */
    async RefreshSettingValueList(Node: string): Promise<ActionResult<any>> {
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
     * @param {UUID} RoleId  False
     * @param {string} NewName  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async RenameRole(RoleId: UUID, NewName: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/RenameRole", { 
            RoleId,
            NewName
        });
    }

    /**
     * Name Description Optional
     * @param {string} Username  False
     * @param {string} NewPassword  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async ResetUserPassword(Username: string, NewPassword: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/ResetUserPassword", { 
            Username,
            NewPassword
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<ActionResult<any>>}
     */
    async Restart(): Promise<ActionResult<any>> {
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
     * @return {Promise<ActionResult<any>>}
     */
    async RevokeWebauthnCredential(ID: number): Promise<ActionResult<any>> {
        return this.apiCall("Core/RevokeWebauthnCredential", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} triggerId  False
     * @return {Promise<ActionResult<any>>}
     */
    async RunEventTriggerImmediately(triggerId: UUID): Promise<ActionResult<any>> {
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
     * @param {UUID} RoleId  False
     * @param {string} PermissionNode  False
     * @param {boolean} Enabled  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async SetAMPRolePermission(RoleId: UUID, PermissionNode: string, Enabled: boolean): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/SetAMPRolePermission", { 
            RoleId,
            PermissionNode,
            Enabled
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} UserId  False
     * @param {UUID} RoleId  False
     * @param {boolean} IsMember  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async SetAMPUserRoleMembership(UserId: UUID, RoleId: UUID, IsMember: boolean): Promise<Task<ActionResult<any>>> {
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
     * @return {Promise<ActionResult<any>>}
     */
    async SetConfig(node: string, value: string): Promise<ActionResult<any>> {
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
     * @param {UUID} Id  False
     * @param {boolean} Enabled  False
     * @return {Promise<ActionResult<any>>}
     */
    async SetTriggerEnabled(Id: UUID, Enabled: boolean): Promise<ActionResult<any>> {
        return this.apiCall("Core/SetTriggerEnabled", { 
            Id,
            Enabled
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<ActionResult<any>>}
     */
    async Sleep(): Promise<ActionResult<any>> {
        return this.apiCall("Core/Sleep", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<ActionResult<any>>}
     */
    async Start(): Promise<ActionResult<any>> {
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
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async UpdateAccountInfo(EmailAddress: string, TwoFactorPIN: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("Core/UpdateAccountInfo", { 
            EmailAddress,
            TwoFactorPIN
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<ActionResult<any>>}
     */
    async UpdateApplication(): Promise<ActionResult<any>> {
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
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async UpdateUserInfo(Username: string, Disabled: boolean, PasswordExpires: boolean, CannotChangePassword: boolean, MustChangePassword: boolean, EmailAddress: string): Promise<Task<ActionResult<any>>> {
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
     * @return {Promise<ActionResult<any>>}
     */
    async WebauthnRegister(attestationObject: string, clientDataJSON: string, description: string): Promise<ActionResult<any>> {
        return this.apiCall("Core/WebauthnRegister", { 
            attestationObject,
            clientDataJSON,
            description
        });
    }

}
