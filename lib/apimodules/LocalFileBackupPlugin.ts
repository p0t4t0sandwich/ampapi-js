/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";

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
     * @param {string} BackupId  False
     * @return {Promise<any>}
     */
    async DeleteFromS3(BackupId: string): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/DeleteFromS3", { 
            BackupId
        });
    }

    /**
     * Name Description Optional
     * @param {string} BackupId  False
     * @return {Promise<void>}
     */
    async DeleteLocalBackup(BackupId: string): Promise<void> {
        return this.apiCall("LocalFileBackupPlugin/DeleteLocalBackup", { 
            BackupId
        });
    }

    /**
     * Name Description Optional
     * @param {string} BackupId  False
     * @return {Promise<any>}
     */
    async DownloadFromS3(BackupId: string): Promise<any> {
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
     * @param {string} BackupId  False
     * @param {boolean} DeleteExistingData  True
     * @return {Promise<any>}
     */
    async RestoreBackup(BackupId: string, DeleteExistingData: boolean): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/RestoreBackup", { 
            BackupId,
            DeleteExistingData
        });
    }

    /**
     * Name Description Optional
     * @param {string} BackupId  False
     * @param {boolean} Sticky  False
     * @return {Promise<void>}
     */
    async SetBackupSticky(BackupId: string, Sticky: boolean): Promise<void> {
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
     * @return {Promise<any>}
     */
    async TakeBackup(Title: string, Description: string, Sticky: boolean): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/TakeBackup", { 
            Title,
            Description,
            Sticky
        });
    }

    /**
     * Name Description Optional
     * @param {string} BackupId  False
     * @return {Promise<any>}
     */
    async UploadToS3(BackupId: string): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/UploadToS3", { 
            BackupId
        });
    }

}
