/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { UUID } from "crypto";
import { AMPAPI } from "../AMPAPI.js";
import { IADSInstance } from "../types/IADSInstance.js";
import { InstanceDatastore } from "../types/InstnaceDatastore.js";
import { Result } from "../types/Result.js";
import { Instance } from "../types/Instance.js";
import { RemoteTargetInfo } from "../types/RemoteTargetInfo.js";
import { ActionResult } from "../types/ActionResult.js";
import { Task } from "../types/Task.js";
import { RunningTask } from "../types/RunningTask.js";
import { EndpointInfo } from "../types/EndpointInfo.js";


/**
 * @class ADSModule
 */
export class ADSModule extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the ADSModule class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @param {InstanceDatastore} newDatastore  False
     * @return {Promise<ActionResult<any>>}
     */
    async AddDatastore(newDatastore: InstanceDatastore): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/AddDatastore", { 
            newDatastore
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} InstanceID  False
     * @param {{ [key: string]: string }} Args  False
     * @param {boolean} RebuildConfiguration  True
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async ApplyInstanceConfiguration(InstanceID: UUID, Args: { [key: string]: string }, RebuildConfiguration: boolean): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/ApplyInstanceConfiguration", { 
            InstanceID,
            Args,
            RebuildConfiguration
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} InstanceID  False
     * @param {number} TemplateID  False
     * @param {string} NewFriendlyName  True
     * @param {string} Secret  True
     * @param {boolean} RestartIfPreviouslyRunning  True
     * @return {Promise<ActionResult<any>>}
     */
    async ApplyTemplate(InstanceID: UUID, TemplateID: number, NewFriendlyName: string, Secret: string, RestartIfPreviouslyRunning: boolean): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/ApplyTemplate", { 
            InstanceID,
            TemplateID,
            NewFriendlyName,
            Secret,
            RestartIfPreviouslyRunning
        });
    }

    /**
     * Name Description Optional
     * @param {string} Friendly  False
     * @param {boolean} IsHTTPS  False
     * @param {string} Host  False
     * @param {number} Port  False
     * @param {UUID} InstanceID  False
     * @return {Promise<ActionResult<any>>}
     */
    async AttachADS(Friendly: string, IsHTTPS: boolean, Host: string, Port: number, InstanceID: UUID): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/AttachADS", { 
            Friendly,
            IsHTTPS,
            Host,
            Port,
            InstanceID
        });
    }

    /**
     * Name Description Optional
     * @param {number} Id  False
     * @param {string} NewName  False
     * @return {Promise<ActionResult<any>>}
     */
    async CloneTemplate(Id: number, NewName: string): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/CloneTemplate", { 
            Id,
            NewName
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<ActionResult<any>>}
     */
    async ConvertToManaged(InstanceName: string): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/ConvertToManaged", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} Name  False
     * @return {Promise<ActionResult<any>>}
     */
    async CreateDeploymentTemplate(Name: string): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/CreateDeploymentTemplate", { 
            Name
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TargetADSInstance  False
     * @param {UUID} NewInstanceId  False
     * @param {string} Module  False
     * @param {string} InstanceName  False
     * @param {string} FriendlyName  False
     * @param {string} IPBinding  False
     * @param {number} PortNumber  False
     * @param {string} AdminUsername  False
     * @param {string} AdminPassword  False
     * @param {{ [key: string]: string }} ProvisionSettings  False
     * @param {boolean} AutoConfigure When enabled, all settings other than the Module, Target and FriendlyName are ignored and replaced with automatically generated values. True
     * @param {any} PostCreate  True
     * @param {boolean} StartOnBoot  True
     * @param {string} DisplayImageSource  True
     * @param {number} TargetDatastore  True
     * @return {Promise<ActionResult<any>>}
     */
    async CreateInstance(TargetADSInstance: UUID, NewInstanceId: UUID, Module: string, InstanceName: string, FriendlyName: string, IPBinding: string, PortNumber: number, AdminUsername: string, AdminPassword: string, ProvisionSettings: { [key: string]: string }, AutoConfigure: boolean, PostCreate: any, StartOnBoot: boolean, DisplayImageSource: string, TargetDatastore: number): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/CreateInstance", { 
            TargetADSInstance,
            NewInstanceId,
            Module,
            InstanceName,
            FriendlyName,
            IPBinding,
            PortNumber,
            AdminUsername,
            AdminPassword,
            ProvisionSettings,
            AutoConfigure,
            PostCreate,
            StartOnBoot,
            DisplayImageSource,
            TargetDatastore
        });
    }

    /**
     * Name Description Optional
     * @param {any} Instance  False
     * @param {any} PostCreate  True
     * @return {Promise<ActionResult<any>>}
     */
    async CreateLocalInstance(Instance: any, PostCreate: any): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/CreateLocalInstance", { 
            Instance,
            PostCreate
        });
    }

    /**
     * Name Description Optional
     * @param {number} id  False
     * @return {Promise<ActionResult<any>>}
     */
    async DeleteDatastore(id: number): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/DeleteDatastore", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @param {number} Id  False
     * @return {Promise<ActionResult<any>>}
     */
    async DeleteDeploymentTemplate(Id: number): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/DeleteDeploymentTemplate", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<Result<RunningTask>>}
     */
    async DeleteInstance(InstanceName: string): Promise<Result<RunningTask>> {
        return this.apiCall("ADSModule/DeleteInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} InstanceId  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async DeleteInstanceUsers(InstanceId: UUID): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/DeleteInstanceUsers", { 
            InstanceId
        });
    }

    /**A dictionary of setting nodes and values to create the new instance with. Identical in function to the provisioning arguments in the template itself.
     * Name Description Optional
     * @param {number} TemplateID The ID of the template to be deployed, as per the Template Management UI in AMP itself. False
     * @param {string} NewUsername If specified, AMP will create a new user with this name for this instance. Must be unique. If this user already exists, this will be ignored but the new instance will be assigned to this user. True
     * @param {string} NewPassword If 'NewUsername' is specified and the user doesn't already exist, the password that will be assigned to this user. True
     * @param {string} NewEmail If 'NewUsername' is specified and the user doesn't already exist, the email address that will be assigned to this user. True
     * @param {string[]} RequiredTags If specified, AMP will only deploy this template to targets that have every single 'tag' specified in their target configuration. You can adjust this via the controller by clicking 'Edit' on the target settings. True
     * @param {string} Tag Unrelated to RequiredTags. This is to uniquely identify this instance to your own systems. It may be something like an order ID or service ID so you can find the associated instance again at a later time. If 'UseTagAsInstanceName' is enabled, then this will also be used as the instance name for the created instance - but it must be unique. True
     * @param {string} FriendlyName A friendly name for this instance. If left blank, AMP will generate one for you. True
     * @param {string} Secret Must be a non-empty strong in order to get a callback on deployment state change. This secret will be passed back to you in the callback so you can verify the request. True
     * @param {any} PostCreate 0: Do nothing, 1: Start instance only, 2: Start instance and update application, 3: Full application startup. True
     * @param {{ [key: string]: string }} ExtraProvisionSettings A dictionary of setting nodes and values to create the new instance with. Identical in function to the provisioning arguments in the template itself. True
     * @return {Promise<Result<RunningTask>>}
     */
    async DeployTemplate(TemplateID: number, NewUsername: string, NewPassword: string, NewEmail: string, RequiredTags: string[], Tag: string, FriendlyName: string, Secret: string, PostCreate: any, ExtraProvisionSettings: { [key: string]: string }): Promise<Result<RunningTask>> {
        return this.apiCall("ADSModule/DeployTemplate", { 
            TemplateID,
            NewUsername,
            NewPassword,
            NewEmail,
            RequiredTags,
            Tag,
            FriendlyName,
            Secret,
            PostCreate,
            ExtraProvisionSettings
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} Id  False
     * @return {Promise<ActionResult<any>>}
     */
    async DetatchTarget(Id: UUID): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/DetatchTarget", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @param {string} SourceArchive  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async ExtractEverywhere(SourceArchive: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/ExtractEverywhere", { 
            SourceArchive
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} instanceId  False
     * @return {Promise<Result<EndpointInfo[]>>}
     */
    async GetApplicationEndpoints(instanceId: UUID): Promise<Result<EndpointInfo[]>> {
        return this.apiCall("ADSModule/GetApplicationEndpoints", { 
            instanceId
        });
    }

    /**
     * Name Description Optional
     * @param {number} id  False
     * @return {Promise<InstanceDatastore>}
     */
    async GetDatastore(id: number): Promise<InstanceDatastore> {
        return this.apiCall("ADSModule/GetDatastore", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @param {number} datastoreId  False
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetDatastoreInstances(datastoreId: number): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("ADSModule/GetDatastoreInstances", { 
            datastoreId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<InstanceDatastore[]>>}
     */
    async GetDatastores(): Promise<Result<InstanceDatastore[]>> {
        return this.apiCall("ADSModule/GetDatastores", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<any[]>>}
     */
    async GetDeploymentTemplates(): Promise<Result<any[]>> {
        return this.apiCall("ADSModule/GetDeploymentTemplates", { 
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} GroupId  False
     * @return {Promise<Result<IADSInstance>>}
     */
    async GetGroup(GroupId: UUID): Promise<Result<IADSInstance>> {
        return this.apiCall("ADSModule/GetGroup", { 
            GroupId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} InstanceId  False
     * @return {Promise<Result<Instance>>}
     */
    async GetInstance(InstanceId: UUID): Promise<Result<Instance>> {
        return this.apiCall("ADSModule/GetInstance", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<Result<any[]>>}
     */
    async GetInstanceNetworkInfo(InstanceName: string): Promise<Result<any[]>> {
        return this.apiCall("ADSModule/GetInstanceNetworkInfo", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetInstanceStatuses(): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("ADSModule/GetInstanceStatuses", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<IADSInstance[]>>}
     */
    async GetInstances(): Promise<Result<IADSInstance[]>> {
        return this.apiCall("ADSModule/GetInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetLocalInstances(): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("ADSModule/GetLocalInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} ModuleName  False
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetProvisionArguments(ModuleName: string): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("ADSModule/GetProvisionArguments", { 
            ModuleName
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<{ [key: string]: any }>}
     */
    async GetProvisionFitness(): Promise<{ [key: string]: any }> {
        return this.apiCall("ADSModule/GetProvisionFitness", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<any[]>>}
     */
    async GetSupportedApplications(): Promise<Result<any[]>> {
        return this.apiCall("ADSModule/GetSupportedApplications", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<RemoteTargetInfo>>}
     */
    async GetTargetInfo(): Promise<Result<RemoteTargetInfo>> {
        return this.apiCall("ADSModule/GetTargetInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} ForModule  False
     * @param {string} SettingNode  False
     * @param {string[]} Values  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async HandoutInstanceConfigs(ForModule: string, SettingNode: string, Values: string[]): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/HandoutInstanceConfigs", { 
            ForModule,
            SettingNode,
            Values
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} InstanceId  False
     * @return {Promise<ActionResult<string>>}
     */
    async ManageInstance(InstanceId: UUID): Promise<ActionResult<string>> {
        return this.apiCall("ADSModule/ManageInstance", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} instanceId  False
     * @param {number} PortNumber  False
     * @param {number} Range  False
     * @param {any} Protocol  False
     * @param {string} Description  False
     * @param {boolean} Open  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async ModifyCustomFirewallRule(instanceId: UUID, PortNumber: number, Range: number, Protocol: any, Description: string, Open: boolean): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/ModifyCustomFirewallRule", { 
            instanceId,
            PortNumber,
            Range,
            Protocol,
            Description,
            Open
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} instanceId  False
     * @param {number} datastoreId  False
     * @return {Promise<Task<RunningTask>>}
     */
    async MoveInstanceDatastore(instanceId: UUID, datastoreId: number): Promise<Task<RunningTask>> {
        return this.apiCall("ADSModule/MoveInstanceDatastore", { 
            instanceId,
            datastoreId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Result<RunningTask>>}
     */
    async ReactivateLocalInstances(): Promise<Result<RunningTask>> {
        return this.apiCall("ADSModule/ReactivateLocalInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async RefreshAppCache(): Promise<void> {
        return this.apiCall("ADSModule/RefreshAppCache", { 
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} GroupId  False
     * @return {Promise<ActionResult<any>>}
     */
    async RefreshGroup(GroupId: UUID): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/RefreshGroup", { 
            GroupId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async RefreshInstanceConfig(InstanceId: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/RefreshInstanceConfig", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async RefreshRemoteConfigStores(): Promise<void> {
        return this.apiCall("ADSModule/RefreshRemoteConfigStores", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} controllerUrl  False
     * @param {string} myUrl  False
     * @param {string} username  False
     * @param {string} password  False
     * @param {string} twoFactorToken  False
     * @param {string} friendlyName  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async RegisterTarget(controllerUrl: string, myUrl: string, username: string, password: string, twoFactorToken: string, friendlyName: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/RegisterTarget", { 
            controllerUrl,
            myUrl,
            username,
            password,
            twoFactorToken,
            friendlyName
        });
    }

    /**
     * Name Description Optional
     * @param {number} id  False
     * @return {Promise<Result<RunningTask>>}
     */
    async RepairDatastore(id: number): Promise<Result<RunningTask>> {
        return this.apiCall("ADSModule/RepairDatastore", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @param {number} datastoreId  False
     * @return {Promise<Result<RunningTask>>}
     */
    async RequestDatastoreSizeCalculation(datastoreId: number): Promise<Result<RunningTask>> {
        return this.apiCall("ADSModule/RequestDatastoreSizeCalculation", { 
            datastoreId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<ActionResult<any>>}
     */
    async RestartInstance(InstanceName: string): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/RestartInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} id  False
     * @param {string} REQ_RAWJSON  False
     * @return {Promise<Task<{ [key: string]: any }>>}
     */
    async Servers(id: string, REQ_RAWJSON: string): Promise<Task<{ [key: string]: any }>> {
        return this.apiCall("ADSModule/Servers", { 
            id,
            REQ_RAWJSON
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @param {string} SettingNode  False
     * @param {string} Value  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async SetInstanceConfig(InstanceName: string, SettingNode: string, Value: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/SetInstanceConfig", { 
            InstanceName,
            SettingNode,
            Value
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} InstanceId  False
     * @param {{ [key: string]: number }} PortMappings  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async SetInstanceNetworkInfo(InstanceId: UUID, PortMappings: { [key: string]: number }): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/SetInstanceNetworkInfo", { 
            InstanceId,
            PortMappings
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @param {boolean} Suspended  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async SetInstanceSuspended(InstanceName: string, Suspended: boolean): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/SetInstanceSuspended", { 
            InstanceName,
            Suspended
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async StartAllInstances(): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/StartAllInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async StartInstance(InstanceName: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/StartInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async StopAllInstances(): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/StopAllInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<ActionResult<any>>}
     */
    async StopInstance(InstanceName: string): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/StopInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} url  False
     * @param {string} username  False
     * @param {string} password  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async TestADSLoginDetails(url: string, username: string, password: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/TestADSLoginDetails", { 
            url,
            username,
            password
        });
    }

    /**
     * Name Description Optional
     * @param {InstanceDatastore} updatedDatastore  False
     * @return {Promise<ActionResult<any>>}
     */
    async UpdateDatastore(updatedDatastore: InstanceDatastore): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/UpdateDatastore", { 
            updatedDatastore
        });
    }

    /**
     * Name Description Optional
     * @param {any} templateToUpdate  False
     * @return {Promise<ActionResult<any>>}
     */
    async UpdateDeploymentTemplate(templateToUpdate: any): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/UpdateDeploymentTemplate", { 
            templateToUpdate
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @param {string} FriendlyName  False
     * @param {string} Description  False
     * @param {boolean} StartOnBoot  False
     * @param {boolean} Suspended  False
     * @param {boolean} ExcludeFromFirewall  False
     * @param {boolean} RunInContainer  False
     * @param {number} ContainerMemory  False
     * @param {any} MemoryPolicy  False
     * @param {any} ContainerMaxCPU  False
     * @param {string} ContainerImage  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async UpdateInstanceInfo(InstanceId: string, FriendlyName: string, Description: string, StartOnBoot: boolean, Suspended: boolean, ExcludeFromFirewall: boolean, RunInContainer: boolean, ContainerMemory: number, MemoryPolicy: any, ContainerMaxCPU: any, ContainerImage: string): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/UpdateInstanceInfo", { 
            InstanceId,
            FriendlyName,
            Description,
            StartOnBoot,
            Suspended,
            ExcludeFromFirewall,
            RunInContainer,
            ContainerMemory,
            MemoryPolicy,
            ContainerMaxCPU,
            ContainerImage
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} TargetID  False
     * @return {Promise<void>}
     */
    async UpdateTarget(TargetID: UUID): Promise<void> {
        return this.apiCall("ADSModule/UpdateTarget", { 
            TargetID
        });
    }

    /**
     * Name Description Optional
     * @param {UUID} Id  False
     * @param {string} FriendlyName  False
     * @param {URL} Url  False
     * @param {string} Description  False
     * @param {string[]} Tags  False
     * @return {Promise<ActionResult<any>>}
     */
    async UpdateTargetInfo(Id: UUID, FriendlyName: string, Url: URL, Description: string, Tags: string[]): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/UpdateTargetInfo", { 
            Id,
            FriendlyName,
            Url,
            Description,
            Tags
        });
    }

    /**
     * Name Description Optional
     * @param {boolean} RestartRunning  False
     * @return {Promise<Task<ActionResult<any>>>}
     */
    async UpgradeAllInstances(RestartRunning: boolean): Promise<Task<ActionResult<any>>> {
        return this.apiCall("ADSModule/UpgradeAllInstances", { 
            RestartRunning
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<ActionResult<any>>}
     */
    async UpgradeInstance(InstanceName: string): Promise<ActionResult<any>> {
        return this.apiCall("ADSModule/UpgradeInstance", { 
            InstanceName
        });
    }

}
