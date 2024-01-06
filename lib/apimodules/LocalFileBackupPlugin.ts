/**
 * @author p0t4t0sandich
 * @description An API that allows you to communicate with AMP installations from within JavaScript/TypeScript
 */

import { AMPAPI } from "../AMPAPI.js";
import { ActionResult, AMPVersion, Branding, ConsoleEntry, CPUInfo, EndpointInfo, IADSInstance, Instance, InstanceDatastore, LoginResult, Message, Metric, ModuleInfo, PlatformInfo, RemoteTargetInfo, RunningTask, SettingSpec, State, lookupState, Status, UpdateInfo, Updates, UserInfo, URL, UUID, LicenceInfo } from "../types.js";


/**
 * @class LocalFileBackupPlugin
 */
export class LocalFileBackupPlugin extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the LocalFileBackupPlugin class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @param {UUID} BackupId  False
     * @return {Promise<ActionResult<any>>}
     */
    async DeleteFromS3(BackupId: UUID): Promise<ActionResult<any>> {
        return this.apiCall("LocalFileBackupPlugin/DeleteFromS3", { 
            BackupId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} BackupId  False
     * @return {Promise<void>}
     */
    async DeleteLocalBackup(BackupId: UUID): Promise<void> {
        return this.apiCall("LocalFileBackupPlugin/DeleteLocalBackup", { 
            BackupId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} BackupId  False
     * @return {Promise<RunningTask>}
     */
    async DownloadFromS3(BackupId: UUID): Promise<RunningTask> {
        return this.apiCall("LocalFileBackupPlugin/DownloadFromS3", { 
            BackupId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetBackups(): Promise<any[]> {
        return this.apiCall("LocalFileBackupPlugin/GetBackups", { 
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} BackupId  False
     * @param {boolean} DeleteExistingData  True
     * @return {Promise<ActionResult<any>>}
     */
    async RestoreBackup(BackupId: UUID, DeleteExistingData: boolean): Promise<ActionResult<any>> {
        return this.apiCall("LocalFileBackupPlugin/RestoreBackup", { 
            BackupId,
            DeleteExistingData
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} BackupId  False
     * @param {boolean} Sticky  False
     * @return {Promise<void>}
     */
    async SetBackupSticky(BackupId: UUID, Sticky: boolean): Promise<void> {
        return this.apiCall("LocalFileBackupPlugin/SetBackupSticky", { 
            BackupId,
            Sticky
        });
    }

    /**
     * Name Description Optional
     * @param {string} Title  False
     * @param {string} Description  False
     * @param {boolean} Sticky  False
     * @return {Promise<ActionResult<any>>}
     */
    async TakeBackup(Title: string, Description: string, Sticky: boolean): Promise<ActionResult<any>> {
        return this.apiCall("LocalFileBackupPlugin/TakeBackup", { 
            Title,
            Description,
            Sticky
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} BackupId  False
     * @return {Promise<RunningTask>}
     */
    async UploadToS3(BackupId: UUID): Promise<RunningTask> {
        return this.apiCall("LocalFileBackupPlugin/UploadToS3", { 
            BackupId
        });
    }

}
