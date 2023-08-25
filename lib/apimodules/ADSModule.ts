/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";

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
     * @param {any} newDatastore  False
     * @return {Promise<any>}
     */
    async AddDatastore(newDatastore: any): Promise<any> {
        return this.apiCall("ADSModule/AddDatastore", { 
            newDatastore
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceID  False
     * @param {{ [key: string]: string }} Args  False
     * @param {boolean} RebuildConfiguration  True
     * @return {Promise<any>}
     */
    async ApplyInstanceConfiguration(InstanceID: string, Args: { [key: string]: string }, RebuildConfiguration: boolean): Promise<any> {
        return this.apiCall("ADSModule/ApplyInstanceConfiguration", { 
            InstanceID,
            Args,
            RebuildConfiguration
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceID  False
     * @param {number} TemplateID  False
     * @param {string} NewFriendlyName  True
     * @param {string} Secret  True
     * @param {boolean} RestartIfPreviouslyRunning  True
     * @return {Promise<any>}
     */
    async ApplyTemplate(InstanceID: string, TemplateID: number, NewFriendlyName: string, Secret: string, RestartIfPreviouslyRunning: boolean): Promise<any> {
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
     * @param {string} InstanceID  False
     * @return {Promise<any>}
     */
    async AttachADS(Friendly: string, IsHTTPS: boolean, Host: string, Port: number, InstanceID: string): Promise<any> {
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
     * @return {Promise<any>}
     */
    async CloneTemplate(Id: number, NewName: string): Promise<any> {
        return this.apiCall("ADSModule/CloneTemplate", { 
            Id,
            NewName
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any>}
     */
    async ConvertToManaged(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/ConvertToManaged", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} Name  False
     * @return {Promise<any>}
     */
    async CreateDeploymentTemplate(Name: string): Promise<any> {
        return this.apiCall("ADSModule/CreateDeploymentTemplate", { 
            Name
        });
    }

    /**
     * Name Description Optional
     * @param {string} TargetADSInstance  False
     * @param {string} NewInstanceId  False
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
     * @return {Promise<any>}
     */
    async CreateInstance(TargetADSInstance: string, NewInstanceId: string, Module: string, InstanceName: string, FriendlyName: string, IPBinding: string, PortNumber: number, AdminUsername: string, AdminPassword: string, ProvisionSettings: { [key: string]: string }, AutoConfigure: boolean, PostCreate: any, StartOnBoot: boolean, DisplayImageSource: string, TargetDatastore: number): Promise<any> {
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
     * @return {Promise<any>}
     */
    async CreateLocalInstance(Instance: any, PostCreate: any): Promise<any> {
        return this.apiCall("ADSModule/CreateLocalInstance", { 
            Instance,
            PostCreate
        });
    }

    /**
     * Name Description Optional
     * @param {number} id  False
     * @return {Promise<any>}
     */
    async DeleteDatastore(id: number): Promise<any> {
        return this.apiCall("ADSModule/DeleteDatastore", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @param {number} Id  False
     * @return {Promise<any>}
     */
    async DeleteDeploymentTemplate(Id: number): Promise<any> {
        return this.apiCall("ADSModule/DeleteDeploymentTemplate", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any>}
     */
    async DeleteInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/DeleteInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @return {Promise<any>}
     */
    async DeleteInstanceUsers(InstanceId: string): Promise<any> {
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
     * @return {Promise<any>}
     */
    async DeployTemplate(TemplateID: number, NewUsername: string, NewPassword: string, NewEmail: string, RequiredTags: string[], Tag: string, FriendlyName: string, Secret: string, PostCreate: any, ExtraProvisionSettings: { [key: string]: string }): Promise<any> {
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
     * @param {string} Id  False
     * @return {Promise<any>}
     */
    async DetatchTarget(Id: string): Promise<any> {
        return this.apiCall("ADSModule/DetatchTarget", { 
            Id
        });
    }

    /**
     * Name Description Optional
     * @param {string} SourceArchive  False
     * @return {Promise<any>}
     */
    async ExtractEverywhere(SourceArchive: string): Promise<any> {
        return this.apiCall("ADSModule/ExtractEverywhere", { 
            SourceArchive
        });
    }

    /**
     * Name Description Optional
     * @param {string} instanceId  False
     * @return {Promise<any[]>}
     */
    async GetApplicationEndpoints(instanceId: string): Promise<any[]> {
        return this.apiCall("ADSModule/GetApplicationEndpoints", { 
            instanceId
        });
    }

    /**
     * Name Description Optional
     * @param {number} id  False
     * @return {Promise<any>}
     */
    async GetDatastore(id: number): Promise<any> {
        return this.apiCall("ADSModule/GetDatastore", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @param {number} datastoreId  False
     * @return {Promise<any[]>}
     */
    async GetDatastoreInstances(datastoreId: number): Promise<any[]> {
        return this.apiCall("ADSModule/GetDatastoreInstances", { 
            datastoreId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetDatastores(): Promise<any[]> {
        return this.apiCall("ADSModule/GetDatastores", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetDeploymentTemplates(): Promise<any[]> {
        return this.apiCall("ADSModule/GetDeploymentTemplates", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} GroupId  False
     * @return {Promise<boolean>}
     */
    async GetGroup(GroupId: string): Promise<boolean> {
        return this.apiCall("ADSModule/GetGroup", { 
            GroupId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @return {Promise<any>}
     */
    async GetInstance(InstanceId: string): Promise<any> {
        return this.apiCall("ADSModule/GetInstance", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any[]>}
     */
    async GetInstanceNetworkInfo(InstanceName: string): Promise<any[]> {
        return this.apiCall("ADSModule/GetInstanceNetworkInfo", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetInstanceStatuses(): Promise<any[]> {
        return this.apiCall("ADSModule/GetInstanceStatuses", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetInstances(): Promise<any[]> {
        return this.apiCall("ADSModule/GetInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetLocalInstances(): Promise<any[]> {
        return this.apiCall("ADSModule/GetLocalInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} ModuleName  False
     * @return {Promise<any[]>}
     */
    async GetProvisionArguments(ModuleName: string): Promise<any[]> {
        return this.apiCall("ADSModule/GetProvisionArguments", { 
            ModuleName
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetProvisionFitness(): Promise<any> {
        return this.apiCall("ADSModule/GetProvisionFitness", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any[]>}
     */
    async GetSupportedApplications(): Promise<any[]> {
        return this.apiCall("ADSModule/GetSupportedApplications", { 
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async GetTargetInfo(): Promise<any> {
        return this.apiCall("ADSModule/GetTargetInfo", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} ForModule  False
     * @param {string} SettingNode  False
     * @param {string[]} Values  False
     * @return {Promise<any>}
     */
    async HandoutInstanceConfigs(ForModule: string, SettingNode: string, Values: string[]): Promise<any> {
        return this.apiCall("ADSModule/HandoutInstanceConfigs", { 
            ForModule,
            SettingNode,
            Values
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @return {Promise<any>}
     */
    async ManageInstance(InstanceId: string): Promise<any> {
        return this.apiCall("ADSModule/ManageInstance", { 
            InstanceId
        });
    }

    /**
     * Name Description Optional
     * @param {string} instanceId  False
     * @param {number} PortNumber  False
     * @param {number} Range  False
     * @param {string} Protocol  False
     * @param {string} Description  False
     * @param {boolean} Open  False
     * @return {Promise<any>}
     */
    async ModifyCustomFirewallRule(instanceId: string, PortNumber: number, Range: number, Protocol: string, Description: string, Open: boolean): Promise<any> {
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
     * @param {string} instanceId  False
     * @param {number} datastoreId  False
     * @return {Promise<any>}
     */
    async MoveInstanceDatastore(instanceId: string, datastoreId: number): Promise<any> {
        return this.apiCall("ADSModule/MoveInstanceDatastore", { 
            instanceId,
            datastoreId
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async ReactivateLocalInstances(): Promise<any> {
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
     * @param {string} GroupId  False
     * @return {Promise<any>}
     */
    async RefreshGroup(GroupId: string): Promise<any> {
        return this.apiCall("ADSModule/RefreshGroup", { 
            GroupId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @return {Promise<any>}
     */
    async RefreshInstanceConfig(InstanceId: string): Promise<any> {
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
     * @return {Promise<any>}
     */
    async RegisterTarget(controllerUrl: string, myUrl: string, username: string, password: string, twoFactorToken: string, friendlyName: string): Promise<any> {
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
     * @return {Promise<any>}
     */
    async RepairDatastore(id: number): Promise<any> {
        return this.apiCall("ADSModule/RepairDatastore", { 
            id
        });
    }

    /**
     * Name Description Optional
     * @param {number} datastoreId  False
     * @return {Promise<any>}
     */
    async RequestDatastoreSizeCalculation(datastoreId: number): Promise<any> {
        return this.apiCall("ADSModule/RequestDatastoreSizeCalculation", { 
            datastoreId
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any>}
     */
    async RestartInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/RestartInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} id  False
     * @param {string} REQ_RAWJSON  False
     * @return {Promise<any>}
     */
    async Servers(id: string, REQ_RAWJSON: string): Promise<any> {
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
     * @return {Promise<any>}
     */
    async SetInstanceConfig(InstanceName: string, SettingNode: string, Value: string): Promise<any> {
        return this.apiCall("ADSModule/SetInstanceConfig", { 
            InstanceName,
            SettingNode,
            Value
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceId  False
     * @param {{ [key: string]: number }} PortMappings  False
     * @return {Promise<any>}
     */
    async SetInstanceNetworkInfo(InstanceId: string, PortMappings: { [key: string]: number }): Promise<any> {
        return this.apiCall("ADSModule/SetInstanceNetworkInfo", { 
            InstanceId,
            PortMappings
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @param {boolean} Suspended  False
     * @return {Promise<any>}
     */
    async SetInstanceSuspended(InstanceName: string, Suspended: boolean): Promise<any> {
        return this.apiCall("ADSModule/SetInstanceSuspended", { 
            InstanceName,
            Suspended
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async StartAllInstances(): Promise<any> {
        return this.apiCall("ADSModule/StartAllInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any>}
     */
    async StartInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/StartInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<any>}
     */
    async StopAllInstances(): Promise<any> {
        return this.apiCall("ADSModule/StopAllInstances", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any>}
     */
    async StopInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/StopInstance", { 
            InstanceName
        });
    }

    /**
     * Name Description Optional
     * @param {string} url  False
     * @param {string} username  False
     * @param {string} password  False
     * @return {Promise<any>}
     */
    async TestADSLoginDetails(url: string, username: string, password: string): Promise<any> {
        return this.apiCall("ADSModule/TestADSLoginDetails", { 
            url,
            username,
            password
        });
    }

    /**
     * Name Description Optional
     * @param {any} updatedDatastore  False
     * @return {Promise<any>}
     */
    async UpdateDatastore(updatedDatastore: any): Promise<any> {
        return this.apiCall("ADSModule/UpdateDatastore", { 
            updatedDatastore
        });
    }

    /**
     * Name Description Optional
     * @param {any} templateToUpdate  False
     * @return {Promise<any>}
     */
    async UpdateDeploymentTemplate(templateToUpdate: any): Promise<any> {
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
     * @return {Promise<any>}
     */
    async UpdateInstanceInfo(InstanceId: string, FriendlyName: string, Description: string, StartOnBoot: boolean, Suspended: boolean, ExcludeFromFirewall: boolean, RunInContainer: boolean, ContainerMemory: number, MemoryPolicy: any, ContainerMaxCPU: any, ContainerImage: string): Promise<any> {
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
     * @param {string} TargetID  False
     * @return {Promise<void>}
     */
    async UpdateTarget(TargetID: string): Promise<void> {
        return this.apiCall("ADSModule/UpdateTarget", { 
            TargetID
        });
    }

    /**
     * Name Description Optional
     * @param {string} Id  False
     * @param {string} FriendlyName  False
     * @param {string} Url  False
     * @param {string} Description  False
     * @param {string[]} Tags  False
     * @return {Promise<any>}
     */
    async UpdateTargetInfo(Id: string, FriendlyName: string, Url: string, Description: string, Tags: string[]): Promise<any> {
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
     * @return {Promise<any>}
     */
    async UpgradeAllInstances(RestartRunning: boolean): Promise<any> {
        return this.apiCall("ADSModule/UpgradeAllInstances", { 
            RestartRunning
        });
    }

    /**
     * Name Description Optional
     * @param {string} InstanceName  False
     * @return {Promise<any>}
     */
    async UpgradeInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/UpgradeInstance", { 
            InstanceName
        });
    }

}
