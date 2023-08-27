/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";
import { Result } from "../types/Result.js";
import { ActionResult } from "../types/ActionResult.js";
import { Task } from "../types/Task.js";
import { RunningTask } from "../types/RunningTask.js";

/**
 * @class MinecraftModule
 */
export class MinecraftModule extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the MinecraftModule class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @return {Promise<boolean>}
     */
    async AcceptEULA(): Promise<boolean> {
        return this.apiCall("MinecraftModule/AcceptEULA", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async AddOPEntry(UserOrUUID: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("MinecraftModule/AddOPEntry", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async AddToWhitelist(UserOrUUID: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("MinecraftModule/AddToWhitelist", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async BanUserByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/BanUserByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any }>}
     */
    async BukGetCategories(): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/BukGetCategories", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} pluginId  False
     * @return {Promise<Task<RunningTask>>}
     */
    async BukGetInstallUpdatePlugin(pluginId: number): Promise<Task<RunningTask>> {
        return this.apiCall("MinecraftModule/BukGetInstallUpdatePlugin", { 
            pluginId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any }>}
     */
    async BukGetInstalledPlugins(): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/BukGetInstalledPlugins", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} PluginId  False
     * @return {Promise<{ [key: string]: any }>}
     */
    async BukGetPluginInfo(PluginId: number): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/BukGetPluginInfo", { 
            PluginId
        });
    }

    /**
     * Name Description Optional
     * @param {string} CategoryId  False
     * @param {number} PageNumber  False
     * @param {number} PageSize  False
     * @return {Promise<{ [key: string]: any }>}
     */
    async BukGetPluginsForCategory(CategoryId: string, PageNumber: number, PageSize: number): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/BukGetPluginsForCategory", { 
            CategoryId,
            PageNumber,
            PageSize
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any }>}
     */
    async BukGetPopularPlugins(): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/BukGetPopularPlugins", { 
        });
    }

    /**
     * Name Description Optional
     * @param {number} PluginId  False
     * @return {Promise<void>}
     */
    async BukGetRemovePlugin(PluginId: number): Promise<void> {
        return this.apiCall("MinecraftModule/BukGetRemovePlugin", { 
            PluginId
        });
    }

    /**
     * Name Description Optional
     * @param {string} Query  False
     * @param {number} PageNumber  False
     * @param {number} PageSize  False
     * @return {Promise<{ [key: string]: any }>}
     */
    async BukGetSearch(Query: string, PageNumber: number, PageSize: number): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/BukGetSearch", { 
            Query,
            PageNumber,
            PageSize
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async ClearInventoryByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/ClearInventoryByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<string>}
     */
    async GetFailureReason(): Promise<string> {
        return this.apiCall("MinecraftModule/GetFailureReason", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} id  False
     * @return {Promise<string>}
     */
    async GetHeadByUUID(id: string): Promise<string> {
        return this.apiCall("MinecraftModule/GetHeadByUUID", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any }>}
     */
    async GetOPWhitelist(): Promise<{ [key: string]: any }> {
        return this.apiCall("MinecraftModule/GetOPWhitelist", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetWhitelist(): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("MinecraftModule/GetWhitelist", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async KickUserByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/KickUserByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async KillByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/KillByID", { 
            ID
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async LoadOPList(): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("MinecraftModule/LoadOPList", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<void>}
     */
    async RemoveOPEntry(UserOrUUID: string): Promise<void> {
        return this.apiCall("MinecraftModule/RemoveOPEntry", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} UserOrUUID  False
     * @return {Promise<void>}
     */
    async RemoveWhitelistEntry(UserOrUUID: string): Promise<void> {
        return this.apiCall("MinecraftModule/RemoveWhitelistEntry", { 
            UserOrUUID
        });
    }

    /**
     * Name Description Optional
     * @param {string} ID  False
     * @return {Promise<void>}
     */
    async SmiteByID(ID: string): Promise<void> {
        return this.apiCall("MinecraftModule/SmiteByID", { 
            ID
        });
    }

}
