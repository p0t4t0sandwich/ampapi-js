/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

/**
 * @class AMPAPI
 * @description The main class for the AMP API
 * @property {string} baseUri The base URI for the AMP API
 * @property {string} sessionId The session ID for the AMP API
 * @property {string} dataSource The complete API URL for the AMP API
 */
class AMPAPI {
    public baseUri: string;
    public sessionId: string;
    public dataSource: string;

    /**
     * @constructor
     * @description The constructor for the AMP API
     * @param baseUri The base URI for the AMP API
     */
    constructor(baseUri: string) {
        this.baseUri = baseUri;
        this.sessionId = "";
        this.dataSource = "";

        // Check if the base URI ends with a slash
        this.dataSource = this.baseUri.endsWith("/") ? this.baseUri + "API" : this.baseUri + "/API";
    }

    /**
     * @function apiCall
     * @description A function to make a call to the AMP API
     * @param {string} endpoint The endpoint to call
     * @param {any} data The data to send to the endpoint
     * @returns {Promise<any>} The response from the API
     * @throws {Error} An error if the API call fails
     */
    async apiCall(endpoint: string, data: any = {}): Promise<any> {
        // Create the session object
        const session = { "SESSIONID": this.sessionId }

        // Make the request
        const response = await fetch(this.dataSource + "/" + endpoint, {
            method: "POST",
            headers: { "Accept": "text/javascript" },
            body: JSON.stringify({ ...data, ...session })
        });

        // Check if the response is valid
        if (response.ok) {
            // Return the response
            return response.json();
        } else {
            // Throw an error
            throw new Error("API call failed");
        }
    }

    /**
     * Name TypeName Description Optional
     * @param {any} newDatastore AMPType: InstanceDatastore 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_AddDatastore(newDatastore: any): Promise<any> {
        return this.apiCall("ADSModule/AddDatastore", { newDatastore });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} id AMPType: Int32 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_DeleteDatastore(id: number): Promise<any> {
        return this.apiCall("ADSModule/DeleteDatastore", { id });
    }

    /**
     * Name TypeName Description Optional
     * @param {any} updatedDatastore AMPType: InstanceDatastore 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_UpdateDatastore(updatedDatastore: any): Promise<any> {
        return this.apiCall("ADSModule/UpdateDatastore", { updatedDatastore });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<InstanceDatastore>
     */
    async ADSModule_GetDatastores(): Promise<any[]> {
        return this.apiCall("ADSModule/GetDatastores");
    }

    /**
     * Name TypeName Description Optional
     * @param {number} datastoreId AMPType: Int32 
     * @return {any} AMPType: RunningTask
     */
    async ADSModule_RequestDatastoreSizeCalculation(datastoreId: number): Promise<any> {
        return this.apiCall("ADSModule/RequestDatastoreSizeCalculation", { datastoreId });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} id AMPType: Int32 
     * @return {any} AMPType: InstanceDatastore
     */
    async ADSModule_GetDatastore(id: number): Promise<any> {
        return this.apiCall("ADSModule/GetDatastore", { id });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} id AMPType: Int32 
     * @return {any} AMPType: RunningTask
     */
    async ADSModule_RepairDatastore(id: number): Promise<any> {
        return this.apiCall("ADSModule/RepairDatastore", { id });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} datastoreId AMPType: Int32 
     * @return {any[]} AMPType: IEnumerable<JObject>
     */
    async ADSModule_GetDatastoreInstances(datastoreId: number): Promise<any[]> {
        return this.apiCall("ADSModule/GetDatastoreInstances", { datastoreId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} instanceId AMPType: Guid 
     * @param {number} datastoreId AMPType: Int32 
     * @return {any} AMPType: Task<RunningTask>
     */
    async ADSModule_MoveInstanceDatastore(instanceId: string, datastoreId: number): Promise<any> {
        return this.apiCall("ADSModule/MoveInstanceDatastore", {
            instanceId, 
            datastoreId, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<DeploymentTemplate>
     */
    async ADSModule_GetDeploymentTemplates(): Promise<any[]> {
        return this.apiCall("ADSModule/GetDeploymentTemplates");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Name AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_CreateDeploymentTemplate(Name: string): Promise<any> {
        return this.apiCall("ADSModule/CreateDeploymentTemplate", { Name });
    }

    /**
     * Name TypeName Description Optional
     * @param {any} templateToUpdate AMPType: DeploymentTemplate 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_UpdateDeploymentTemplate(templateToUpdate: any): Promise<any> {
        return this.apiCall("ADSModule/UpdateDeploymentTemplate", { templateToUpdate });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} Id AMPType: Int32 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_DeleteDeploymentTemplate(Id: number): Promise<any> {
        return this.apiCall("ADSModule/DeleteDeploymentTemplate", { Id });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} Id AMPType: Int32 
     * @param {string} NewName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_CloneTemplate(Id: number, NewName: string): Promise<any> {
        return this.apiCall("ADSModule/CloneTemplate", {
            Id, 
            NewName, 
        });
    }

    /**
     * Overlays an existing template on an existing instance. Used to perform package reconfigurations. Do not use this to 'transform' an existing application into another. The instance should be deleted and re-created in that situation.
     * Name TypeName Description Optional
     * @param {string} InstanceID AMPType: Guid 
     * @param {number} TemplateID AMPType: Int32 
     * @param {string} NewFriendlyName AMPType: String 
     * @param {string} Secret AMPType: String 
     * @param {boolean} RestartIfPreviouslyRunning AMPType: Boolean 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_ApplyTemplate(InstanceID: string, TemplateID: number, NewFriendlyName: string, Secret: string, RestartIfPreviouslyRunning: boolean): Promise<any> {
        return this.apiCall("ADSModule/ApplyTemplate", {
            InstanceID, 
            TemplateID, 
            NewFriendlyName, 
            Secret, 
            RestartIfPreviouslyRunning, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {number} TemplateID AMPType: Int32 The ID of the template to be deployed, as per the Template Management UI in AMP itself.
     * @param {string} NewUsername AMPType: String If specified, AMP will create a new user with this name for this instance. Must be unique. If this user already exists, this will be ignored but the new instance will be assigned to this user.
     * @param {string} NewPassword AMPType: String If 'NewUsername' is specified and the user doesn't already exist, the password that will be assigned to this user.
     * @param {string} NewEmail AMPType: String If 'NewUsername' is specified and the user doesn't already exist, the email address that will be assigned to this user.
     * @param {string[]} RequiredTags AMPType: List<String> If specified, AMP will only deploy this template to targets that have every single 'tag' specified in their target configuration. You can adjust this via the controller by clicking 'Edit' on the target settings.
     * @param {string} Tag AMPType: String Unrelated to RequiredTags. This is to uniquely identify this instance to your own systems. It may be something like an order ID or service ID so you can find the associated instance again at a later time. If 'UseTagAsInstanceName' is enabled, then this will also be used as the instance name for the created instance - but it must be unique.
     * @param {string} FriendlyName AMPType: String A friendly name for this instance. If left blank, AMP will generate one for you.
     * @param {string} Secret AMPType: String Must be a non-empty strong in order to get a callback on deployment state change. This secret will be passed back to you in the callback so you can verify the request.
     * @param {any} PostCreate AMPType: PostCreateActions 0: Do nothing, 1: Start instance only, 2: Start instance and update application, 3: Full application startup.
     * @param {{ [key: string]: string }} ExtraProvisionSettings AMPType: Dictionary<String, String> A dictionary of setting nodes and values to create the new instance with. Identical in function to the provisioning arguments in the template itself.
     * @return {any} AMPType: RunningTask
     */
    async ADSModule_DeployTemplate(TemplateID: number, NewUsername: string, NewPassword: string, NewEmail: string, RequiredTags: string[], Tag: string, FriendlyName: string, Secret: string, PostCreate: any, ExtraProvisionSettings: { [key: string]: string }): Promise<any> {
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
            ExtraProvisionSettings, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: RemoteTargetInfo
     */
    async ADSModule_GetTargetInfo(): Promise<any> {
        return this.apiCall("ADSModule/GetTargetInfo");
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<ApplicationSpec>
     */
    async ADSModule_GetSupportedApplications(): Promise<any[]> {
        return this.apiCall("ADSModule/GetSupportedApplications");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async ADSModule_RefreshAppCache(): Promise<void> {
        return this.apiCall("ADSModule/RefreshAppCache");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async ADSModule_RefreshRemoteConfigStores(): Promise<void> {
        return this.apiCall("ADSModule/RefreshRemoteConfigStores");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} instanceId AMPType: Guid 
     * @return {any[]} AMPType: IEnumerable<EndpointInfo>
     */
    async ADSModule_GetApplicationEndpoints(instanceId: string): Promise<any[]> {
        return this.apiCall("ADSModule/GetApplicationEndpoints", { instanceId });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: RunningTask
     */
    async ADSModule_ReactivateLocalInstances(): Promise<any> {
        return this.apiCall("ADSModule/ReactivateLocalInstances");
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<IADSInstance>
     */
    async ADSModule_GetInstances(): Promise<any[]> {
        return this.apiCall("ADSModule/GetInstances");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: Guid 
     * @return {any} AMPType: JObject
     */
    async ADSModule_GetInstance(InstanceId: string): Promise<any> {
        return this.apiCall("ADSModule/GetInstance", { InstanceId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} instanceId AMPType: Guid 
     * @param {number} PortNumber AMPType: Int32 
     * @param {number} Range AMPType: Int32 
     * @param {string} Protocol AMPType: PortProtocol 
     * @param {string} Description AMPType: String 
     * @param {boolean} Open AMPType: Boolean 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_ModifyCustomFirewallRule(instanceId: string, PortNumber: number, Range: number, Protocol: string, Description: string, Open: boolean): Promise<any> {
        return this.apiCall("ADSModule/ModifyCustomFirewallRule", {
            instanceId, 
            PortNumber, 
            Range, 
            Protocol, 
            Description, 
            Open, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: Guid 
     * @return {any} AMPType: ActionResult<String>
     */
    async ADSModule_ManageInstance(InstanceId: string): Promise<any> {
        return this.apiCall("ADSModule/ManageInstance", { InstanceId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} GroupId AMPType: Guid 
     * @return {boolean} AMPType: IADSInstance
     */
    async ADSModule_GetGroup(GroupId: string): Promise<boolean> {
        return this.apiCall("ADSModule/GetGroup", { GroupId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} GroupId AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_RefreshGroup(GroupId: string): Promise<any> {
        return this.apiCall("ADSModule/RefreshGroup", { GroupId });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<JObject>
     */
    async ADSModule_GetLocalInstances(): Promise<any[]> {
        return this.apiCall("ADSModule/GetLocalInstances");
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<JObject>
     */
    async ADSModule_GetInstanceStatuses(): Promise<any[]> {
        return this.apiCall("ADSModule/GetInstanceStatuses");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: JObject
     */
    async ADSModule_GetProvisionFitness(): Promise<any> {
        return this.apiCall("ADSModule/GetProvisionFitness");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Friendly AMPType: String 
     * @param {boolean} IsHTTPS AMPType: Boolean 
     * @param {string} Host AMPType: String 
     * @param {number} Port AMPType: Int32 
     * @param {string} InstanceID AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_AttachADS(Friendly: string, IsHTTPS: boolean, Host: string, Port: number, InstanceID: string): Promise<any> {
        return this.apiCall("ADSModule/AttachADS", {
            Friendly, 
            IsHTTPS, 
            Host, 
            Port, 
            InstanceID, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Id AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_DetatchTarget(Id: string): Promise<any> {
        return this.apiCall("ADSModule/DetatchTarget", { Id });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Id AMPType: Guid 
     * @param {string} FriendlyName AMPType: String 
     * @param {string} Url AMPType: Uri 
     * @param {string} Description AMPType: String 
     * @param {string[]} Tags AMPType: List<String> 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_UpdateTargetInfo(Id: string, FriendlyName: string, Url: string, Description: string, Tags: string[]): Promise<any> {
        return this.apiCall("ADSModule/UpdateTargetInfo", {
            Id, 
            FriendlyName, 
            Url, 
            Description, 
            Tags, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_ConvertToManaged(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/ConvertToManaged", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any[]} AMPType: IEnumerable<PortUsage>
     */
    async ADSModule_GetInstanceNetworkInfo(InstanceName: string): Promise<any[]> {
        return this.apiCall("ADSModule/GetInstanceNetworkInfo", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: Guid 
     * @param {{ [key: string]: number }} PortMappings AMPType: Dictionary<String, Int32> 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_SetInstanceNetworkInfo(InstanceId: string, PortMappings: { [key: string]: number }): Promise<any> {
        return this.apiCall("ADSModule/SetInstanceNetworkInfo", {
            InstanceId, 
            PortMappings, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceID AMPType: Guid 
     * @param {{ [key: string]: string }} Args AMPType: Dictionary<String, String> 
     * @param {boolean} RebuildConfiguration AMPType: Boolean 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_ApplyInstanceConfiguration(InstanceID: string, Args: { [key: string]: string }, RebuildConfiguration: boolean): Promise<any> {
        return this.apiCall("ADSModule/ApplyInstanceConfiguration", {
            InstanceID, 
            Args, 
            RebuildConfiguration, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {any} Instance AMPType: LocalAMPInstance 
     * @param {any} PostCreate AMPType: PostCreateActions 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_CreateLocalInstance(Instance: any, PostCreate: any): Promise<any> {
        return this.apiCall("ADSModule/CreateLocalInstance", {
            Instance, 
            PostCreate, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TargetADSInstance AMPType: Guid 
     * @param {string} NewInstanceId AMPType: Guid 
     * @param {string} Module AMPType: String 
     * @param {string} InstanceName AMPType: String 
     * @param {string} FriendlyName AMPType: String 
     * @param {string} IPBinding AMPType: String 
     * @param {number} PortNumber AMPType: Int32 
     * @param {string} AdminUsername AMPType: String 
     * @param {string} AdminPassword AMPType: String 
     * @param {{ [key: string]: string }} ProvisionSettings AMPType: Dictionary<String, String> 
     * @param {boolean} AutoConfigure AMPType: Boolean When enabled, all settings other than the Module, Target and FriendlyName are ignored and replaced with automatically generated values.
     * @param {any} PostCreate AMPType: PostCreateActions 
     * @param {boolean} StartOnBoot AMPType: Boolean 
     * @param {string} DisplayImageSource AMPType: String 
     * @param {number} TargetDatastore AMPType: Int32 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_CreateInstance(TargetADSInstance: string, NewInstanceId: string, Module: string, InstanceName: string, FriendlyName: string, IPBinding: string, PortNumber: number, AdminUsername: string, AdminPassword: string, ProvisionSettings: { [key: string]: string }, AutoConfigure: boolean, PostCreate: any, StartOnBoot: boolean, DisplayImageSource: string, TargetDatastore: number): Promise<any> {
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
            TargetDatastore, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @param {string} SettingNode AMPType: String 
     * @param {string} Value AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_SetInstanceConfig(InstanceName: string, SettingNode: string, Value: string): Promise<any> {
        return this.apiCall("ADSModule/SetInstanceConfig", {
            InstanceName, 
            SettingNode, 
            Value, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_RefreshInstanceConfig(InstanceId: string): Promise<any> {
        return this.apiCall("ADSModule/RefreshInstanceConfig", { InstanceId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} ForModule AMPType: String 
     * @param {string} SettingNode AMPType: String 
     * @param {string[]} Values AMPType: List<String> 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_HandoutInstanceConfigs(ForModule: string, SettingNode: string, Values: string[]): Promise<any> {
        return this.apiCall("ADSModule/HandoutInstanceConfigs", {
            ForModule, 
            SettingNode, 
            Values, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} ModuleName AMPType: String 
     * @return {any[]} AMPType: IEnumerable<JObject>
     */
    async ADSModule_GetProvisionArguments(ModuleName: string): Promise<any[]> {
        return this.apiCall("ADSModule/GetProvisionArguments", { ModuleName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} url AMPType: String 
     * @param {string} username AMPType: String 
     * @param {string} password AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_TestADSLoginDetails(url: string, username: string, password: string): Promise<any> {
        return this.apiCall("ADSModule/TestADSLoginDetails", {
            url, 
            username, 
            password, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} controllerUrl AMPType: String 
     * @param {string} myUrl AMPType: String 
     * @param {string} username AMPType: String 
     * @param {string} password AMPType: String 
     * @param {string} twoFactorToken AMPType: String 
     * @param {string} friendlyName AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_RegisterTarget(controllerUrl: string, myUrl: string, username: string, password: string, twoFactorToken: string, friendlyName: string): Promise<any> {
        return this.apiCall("ADSModule/RegisterTarget", {
            controllerUrl, 
            myUrl, 
            username, 
            password, 
            twoFactorToken, 
            friendlyName, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TargetID AMPType: Guid 
     * @return {void} AMPType: Void
     */
    async ADSModule_UpdateTarget(TargetID: string): Promise<void> {
        return this.apiCall("ADSModule/UpdateTarget", { TargetID });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: String 
     * @param {string} FriendlyName AMPType: String 
     * @param {string} Description AMPType: String 
     * @param {boolean} StartOnBoot AMPType: Boolean 
     * @param {boolean} Suspended AMPType: Boolean 
     * @param {boolean} ExcludeFromFirewall AMPType: Boolean 
     * @param {boolean} RunInContainer AMPType: Boolean 
     * @param {number} ContainerMemory AMPType: Int32 
     * @param {any} MemoryPolicy AMPType: ContainerMemoryPolicy 
     * @param {any} ContainerMaxCPU AMPType: Single 
     * @param {string} ContainerImage AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_UpdateInstanceInfo(InstanceId: string, FriendlyName: string, Description: string, StartOnBoot: boolean, Suspended: boolean, ExcludeFromFirewall: boolean, RunInContainer: boolean, ContainerMemory: number, MemoryPolicy: any, ContainerMaxCPU: any, ContainerImage: string): Promise<any> {
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
            ContainerImage, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @param {boolean} Suspended AMPType: Boolean 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_SetInstanceSuspended(InstanceName: string, Suspended: boolean): Promise<any> {
        return this.apiCall("ADSModule/SetInstanceSuspended", {
            InstanceName, 
            Suspended, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_UpgradeInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/UpgradeInstance", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_StartAllInstances(): Promise<any> {
        return this.apiCall("ADSModule/StartAllInstances");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_StopAllInstances(): Promise<any> {
        return this.apiCall("ADSModule/StopAllInstances");
    }

    /**
     * Name TypeName Description Optional
     * @param {boolean} RestartRunning AMPType: Boolean 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_UpgradeAllInstances(RestartRunning: boolean): Promise<any> {
        return this.apiCall("ADSModule/UpgradeAllInstances", { RestartRunning });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_StartInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/StartInstance", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_RestartInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/RestartInstance", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async ADSModule_StopInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/StopInstance", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: Guid 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_DeleteInstanceUsers(InstanceId: string): Promise<any> {
        return this.apiCall("ADSModule/DeleteInstanceUsers", { InstanceId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceName AMPType: String 
     * @return {any} AMPType: RunningTask
     */
    async ADSModule_DeleteInstance(InstanceName: string): Promise<any> {
        return this.apiCall("ADSModule/DeleteInstance", { InstanceName });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} SourceArchive AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async ADSModule_ExtractEverywhere(SourceArchive: string): Promise<any> {
        return this.apiCall("ADSModule/ExtractEverywhere", { SourceArchive });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} id AMPType: String 
     * @param {string} REQ_RAWJSON AMPType: String 
     * @return {any} AMPType: Task<JObject>
     */
    async ADSModule_Servers(id: string, REQ_RAWJSON: string): Promise<any> {
        return this.apiCall("ADSModule/Servers", {
            id, 
            REQ_RAWJSON, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async FileManagerPlugin_Dummy(): Promise<void> {
        return this.apiCall("FileManagerPlugin/Dummy");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} FilePath AMPType: String 
     * @return {any} AMPType: ActionResult<String>
     */
    async FileManagerPlugin_CalculateFileMD5Sum(FilePath: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/CalculateFileMD5Sum", { FilePath });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} ModifyPath AMPType: String 
     * @param {boolean} AsDirectory AMPType: Boolean 
     * @param {boolean} Exclude AMPType: Boolean 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_ChangeExclusion(ModifyPath: string, AsDirectory: boolean, Exclude: boolean): Promise<any> {
        return this.apiCall("FileManagerPlugin/ChangeExclusion", {
            ModifyPath, 
            AsDirectory, 
            Exclude, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} PathToArchive AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_CreateArchive(PathToArchive: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/CreateArchive", { PathToArchive });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} ArchivePath AMPType: String 
     * @param {string} DestinationPath AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_ExtractArchive(ArchivePath: string, DestinationPath: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/ExtractArchive", {
            ArchivePath, 
            DestinationPath, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Dir AMPType: String 
     * @return {any[]} AMPType: IEnumerable<JObject>
     */
    async FileManagerPlugin_GetDirectoryListing(Dir: string): Promise<any[]> {
        return this.apiCall("FileManagerPlugin/GetDirectoryListing", { Dir });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Filename AMPType: String 
     * @param {number} Position AMPType: Int64 
     * @param {number} Length AMPType: Int32 
     * @return {any} AMPType: FileChunkData
     */
    async FileManagerPlugin_GetFileChunk(Filename: string, Position: number, Length: number): Promise<any> {
        return this.apiCall("FileManagerPlugin/GetFileChunk", {
            Filename, 
            Position, 
            Length, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Filename AMPType: String 
     * @param {string} Data AMPType: String 
     * @param {boolean} Delete AMPType: Boolean 
     * @return {void} AMPType: Void
     */
    async FileManagerPlugin_AppendFileChunk(Filename: string, Data: string, Delete: boolean): Promise<void> {
        return this.apiCall("FileManagerPlugin/AppendFileChunk", {
            Filename, 
            Data, 
            Delete, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Filename AMPType: String 
     * @param {number} Offset AMPType: Int64 
     * @param {number} ChunkSize AMPType: Int64 
     * @return {any} AMPType: ActionResult<String>
     */
    async FileManagerPlugin_ReadFileChunk(Filename: string, Offset: number, ChunkSize: number): Promise<any> {
        return this.apiCall("FileManagerPlugin/ReadFileChunk", {
            Filename, 
            Offset, 
            ChunkSize, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Filename AMPType: String 
     * @param {string} Data AMPType: String 
     * @param {number} Offset AMPType: Int64 
     * @param {boolean} FinalChunk AMPType: Boolean 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_WriteFileChunk(Filename: string, Data: string, Offset: number, FinalChunk: boolean): Promise<any> {
        return this.apiCall("FileManagerPlugin/WriteFileChunk", {
            Filename, 
            Data, 
            Offset, 
            FinalChunk, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Source AMPType: Uri 
     * @param {string} TargetDirectory AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_DownloadFileFromURL(Source: string, TargetDirectory: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/DownloadFileFromURL", {
            Source, 
            TargetDirectory, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Filename AMPType: String 
     * @param {string} NewFilename AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_RenameFile(Filename: string, NewFilename: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/RenameFile", {
            Filename, 
            NewFilename, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Origin AMPType: String 
     * @param {string} TargetDirectory AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_CopyFile(Origin: string, TargetDirectory: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/CopyFile", {
            Origin, 
            TargetDirectory, 
        });
    }

    /**
     * Moves a file to trash, files must be trashed before they can be deleted.
     * Name TypeName Description Optional
     * @param {string} Filename AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_TrashFile(Filename: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/TrashFile", { Filename });
    }

    /**
     * Moves a directory to trash, files must be trashed before they can be deleted.
     * Name TypeName Description Optional
     * @param {string} DirectoryName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_TrashDirectory(DirectoryName: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/TrashDirectory", { DirectoryName });
    }

    /**
     * Empties a trash bin
     * Name TypeName Description Optional
     * @param {string} TrashDirectoryName AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_EmptyTrash(TrashDirectoryName: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/EmptyTrash", { TrashDirectoryName });
    }

    /**
     * Creates a new directory. The parent directory must already exist.
     * Name TypeName Description Optional
     * @param {string} NewPath AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_CreateDirectory(NewPath: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/CreateDirectory", { NewPath });
    }

    /**
     * Renames a directory
     * Name TypeName Description Optional
     * @param {string} oldDirectory AMPType: String The full path to the old directory
     * @param {string} NewDirectoryName AMPType: String The name component of the new directory (not the full path)
     * @return {any} AMPType: ActionResult
     */
    async FileManagerPlugin_RenameDirectory(oldDirectory: string, NewDirectoryName: string): Promise<any> {
        return this.apiCall("FileManagerPlugin/RenameDirectory", {
            oldDirectory, 
            NewDirectoryName, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<ActionResult>
     */
    async EmailSenderPlugin_TestSMTPSettings(): Promise<any> {
        return this.apiCall("EmailSenderPlugin/TestSMTPSettings");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} BackupId AMPType: Guid 
     * @return {any} AMPType: RunningTask
     */
    async LocalFileBackupPlugin_UploadToS3(BackupId: string): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/UploadToS3", { BackupId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} BackupId AMPType: Guid 
     * @return {any} AMPType: RunningTask
     */
    async LocalFileBackupPlugin_DownloadFromS3(BackupId: string): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/DownloadFromS3", { BackupId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} BackupId AMPType: Guid 
     * @return {any} AMPType: Task<ActionResult>
     */
    async LocalFileBackupPlugin_DeleteFromS3(BackupId: string): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/DeleteFromS3", { BackupId });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<BackupManifest>
     */
    async LocalFileBackupPlugin_GetBackups(): Promise<any[]> {
        return this.apiCall("LocalFileBackupPlugin/GetBackups");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} BackupId AMPType: Guid 
     * @param {boolean} DeleteExistingData AMPType: Boolean 
     * @return {any} AMPType: ActionResult
     */
    async LocalFileBackupPlugin_RestoreBackup(BackupId: string, DeleteExistingData: boolean): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/RestoreBackup", {
            BackupId, 
            DeleteExistingData, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} BackupId AMPType: Guid 
     * @return {void} AMPType: Void
     */
    async LocalFileBackupPlugin_DeleteLocalBackup(BackupId: string): Promise<void> {
        return this.apiCall("LocalFileBackupPlugin/DeleteLocalBackup", { BackupId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} BackupId AMPType: Guid 
     * @param {boolean} Sticky AMPType: Boolean 
     * @return {void} AMPType: Void
     */
    async LocalFileBackupPlugin_SetBackupSticky(BackupId: string, Sticky: boolean): Promise<void> {
        return this.apiCall("LocalFileBackupPlugin/SetBackupSticky", {
            BackupId, 
            Sticky, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Title AMPType: String 
     * @param {string} Description AMPType: String 
     * @param {boolean} Sticky AMPType: Boolean 
     * @return {any} AMPType: ActionResult
     */
    async LocalFileBackupPlugin_TakeBackup(Title: string, Description: string, Sticky: boolean): Promise<any> {
        return this.apiCall("LocalFileBackupPlugin/TakeBackup", {
            Title, 
            Description, 
            Sticky, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {any} Before AMPType: Nullable<DateTime> 
     * @param {number} Count AMPType: Int32 
     * @return {any[]} AMPType: IEnumerable<IAuditLogEntry>
     */
    async Core_GetAuditLogEntries(Before: any, Count: number): Promise<any[]> {
        return this.apiCall("Core/GetAuditLogEntries", {
            Before, 
            Count, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {{ [key: string]: any[] }} AMPType: Dictionary<String, IEnumerable<JObject>>
     */
    async Core_GetSettingsSpec(): Promise<{ [key: string]: any[] }> {
        return this.apiCall("Core/GetSettingsSpec");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Node AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async Core_RefreshSettingValueList(Node: string): Promise<any> {
        return this.apiCall("Core/RefreshSettingValueList", { Node });
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_RefreshSettingsSourceCache(): Promise<void> {
        return this.apiCall("Core/RefreshSettingsSourceCache");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} SettingNode AMPType: String 
     * @param {boolean} WithRefresh AMPType: Boolean 
     * @return {{ [key: string]: string }} AMPType: IDictionary<String, String>
     */
    async Core_GetSettingValues(SettingNode: string, WithRefresh: boolean): Promise<{ [key: string]: string }> {
        return this.apiCall("Core/GetSettingValues", {
            SettingNode, 
            WithRefresh, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: List<JObject>
     */
    async Core_GetProvisionSpec(): Promise<any[]> {
        return this.apiCall("Core/GetProvisionSpec");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} node AMPType: String 
     * @return {any} AMPType: JObject
     */
    async Core_GetConfig(node: string): Promise<any> {
        return this.apiCall("Core/GetConfig", { node });
    }

    /**
     * Name TypeName Description Optional
     * @param {string[]} nodes AMPType: String[] 
     * @return {any[]} AMPType: IEnumerable<JObject>
     */
    async Core_GetConfigs(nodes: string[]): Promise<any[]> {
        return this.apiCall("Core/GetConfigs", { nodes });
    }

    /**
     * Name TypeName Description Optional
     * @param {{ [key: string]: string }} data AMPType: Dictionary<String, String> 
     * @return {boolean} AMPType: Boolean
     */
    async Core_SetConfigs(data: { [key: string]: string }): Promise<boolean> {
        return this.apiCall("Core/SetConfigs", { data });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} node AMPType: String 
     * @param {string} value AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async Core_SetConfig(node: string, value: string): Promise<any> {
        return this.apiCall("Core/SetConfig", {
            node, 
            value, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<IEnumerable<AuthRoleSummary>>
     */
    async Core_GetRoleData(): Promise<any> {
        return this.apiCall("Core/GetRoleData");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<IDictionary<Guid, String>>
     */
    async Core_GetRoleIds(): Promise<any> {
        return this.apiCall("Core/GetRoleIds");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} RoleId AMPType: Guid 
     * @return {any} AMPType: Task<AuthRoleSummary>
     */
    async Core_GetRole(RoleId: string): Promise<any> {
        return this.apiCall("Core/GetRole", { RoleId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Name AMPType: String 
     * @param {boolean} AsCommonRole AMPType: Boolean 
     * @return {any} AMPType: Task<ActionResult<Guid>>
     */
    async Core_CreateRole(Name: string, AsCommonRole: boolean): Promise<any> {
        return this.apiCall("Core/CreateRole", {
            Name, 
            AsCommonRole, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} RoleId AMPType: Guid 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_DeleteRole(RoleId: string): Promise<any> {
        return this.apiCall("Core/DeleteRole", { RoleId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} RoleId AMPType: Guid 
     * @param {string} NewName AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_RenameRole(RoleId: string, NewName: string): Promise<any> {
        return this.apiCall("Core/RenameRole", {
            RoleId, 
            NewName, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} RoleId AMPType: Guid 
     * @param {string} PermissionNode AMPType: String 
     * @param {boolean | null} Enabled AMPType: Nullable<Boolean> 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_SetAMPRolePermission(RoleId: string, PermissionNode: string, Enabled: boolean | null): Promise<any> {
        return this.apiCall("Core/SetAMPRolePermission", {
            RoleId, 
            PermissionNode, 
            Enabled, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} RoleId AMPType: Guid 
     * @return {any} AMPType: Task<IEnumerable<String>>
     */
    async Core_GetAMPRolePermissions(RoleId: string): Promise<any> {
        return this.apiCall("Core/GetAMPRolePermissions", { RoleId });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ScheduleInfo
     */
    async Core_GetScheduleData(): Promise<any> {
        return this.apiCall("Core/GetScheduleData");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} triggerId AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async Core_AddEventTrigger(triggerId: string): Promise<any> {
        return this.apiCall("Core/AddEventTrigger", { triggerId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} triggerId AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async Core_RunEventTriggerImmediately(triggerId: string): Promise<any> {
        return this.apiCall("Core/RunEventTriggerImmediately", { triggerId });
    }

    /**
     * Name TypeName Description Optional
     * @param {number[]} months AMPType: Int32[] 
     * @param {number[]} days AMPType: Int32[] 
     * @param {number[]} hours AMPType: Int32[] 
     * @param {number[]} minutes AMPType: Int32[] 
     * @param {number[]} daysOfMonth AMPType: Int32[] 
     * @param {string} description AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async Core_AddIntervalTrigger(months: number[], days: number[], hours: number[], minutes: number[], daysOfMonth: number[], description: string): Promise<any> {
        return this.apiCall("Core/AddIntervalTrigger", {
            months, 
            days, 
            hours, 
            minutes, 
            daysOfMonth, 
            description, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Id AMPType: Guid 
     * @return {any} AMPType: TimeIntervalTrigger
     */
    async Core_GetTimeIntervalTrigger(Id: string): Promise<any> {
        return this.apiCall("Core/GetTimeIntervalTrigger", { Id });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Id AMPType: Guid 
     * @param {number[]} months AMPType: Int32[] 
     * @param {number[]} days AMPType: Int32[] 
     * @param {number[]} hours AMPType: Int32[] 
     * @param {number[]} minutes AMPType: Int32[] 
     * @param {number[]} daysOfMonth AMPType: Int32[] 
     * @param {string} description AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async Core_EditIntervalTrigger(Id: string, months: number[], days: number[], hours: number[], minutes: number[], daysOfMonth: number[], description: string): Promise<any> {
        return this.apiCall("Core/EditIntervalTrigger", {
            Id, 
            months, 
            days, 
            hours, 
            minutes, 
            daysOfMonth, 
            description, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Id AMPType: Guid 
     * @param {boolean} Enabled AMPType: Boolean 
     * @return {any} AMPType: ActionResult
     */
    async Core_SetTriggerEnabled(Id: string, Enabled: boolean): Promise<any> {
        return this.apiCall("Core/SetTriggerEnabled", {
            Id, 
            Enabled, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TriggerID AMPType: Guid 
     * @param {string} MethodID AMPType: String 
     * @param {{ [key: string]: string }} ParameterMapping AMPType: Dictionary<String, String> 
     * @return {any} AMPType: ActionResult
     */
    async Core_AddTask(TriggerID: string, MethodID: string, ParameterMapping: { [key: string]: string }): Promise<any> {
        return this.apiCall("Core/AddTask", {
            TriggerID, 
            MethodID, 
            ParameterMapping, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TriggerID AMPType: Guid 
     * @param {string} TaskID AMPType: Guid 
     * @param {{ [key: string]: string }} ParameterMapping AMPType: Dictionary<String, String> 
     * @return {any} AMPType: ActionResult
     */
    async Core_EditTask(TriggerID: string, TaskID: string, ParameterMapping: { [key: string]: string }): Promise<any> {
        return this.apiCall("Core/EditTask", {
            TriggerID, 
            TaskID, 
            ParameterMapping, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TriggerID AMPType: Guid 
     * @param {string} TaskID AMPType: Guid 
     * @param {number} NewOrder AMPType: Int32 
     * @return {any} AMPType: ActionResult
     */
    async Core_ChangeTaskOrder(TriggerID: string, TaskID: string, NewOrder: number): Promise<any> {
        return this.apiCall("Core/ChangeTaskOrder", {
            TriggerID, 
            TaskID, 
            NewOrder, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TriggerID AMPType: Guid 
     * @param {string} TaskID AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async Core_DeleteTask(TriggerID: string, TaskID: string): Promise<any> {
        return this.apiCall("Core/DeleteTask", {
            TriggerID, 
            TaskID, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TriggerID AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async Core_DeleteTrigger(TriggerID: string): Promise<any> {
        return this.apiCall("Core/DeleteTrigger", { TriggerID });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<WebSessionSummary>
     */
    async Core_GetActiveAMPSessions(): Promise<any[]> {
        return this.apiCall("Core/GetActiveAMPSessions");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Id AMPType: Guid 
     * @return {void} AMPType: Void
     */
    async Core_EndUserSession(Id: string): Promise<void> {
        return this.apiCall("Core/EndUserSession", { Id });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<IEnumerable<UserInfoSummary>>
     */
    async Core_GetAMPUsersSummary(): Promise<any> {
        return this.apiCall("Core/GetAMPUsersSummary");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @return {any} AMPType: Task<UserInfo>
     */
    async Core_GetAMPUserInfo(Username: string): Promise<any> {
        return this.apiCall("Core/GetAMPUserInfo", { Username });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<IEnumerable<UserInfo>>
     */
    async Core_GetAllAMPUserInfo(): Promise<any> {
        return this.apiCall("Core/GetAllAMPUserInfo");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} UserId AMPType: Guid 
     * @param {string} RoleId AMPType: Guid 
     * @param {boolean} IsMember AMPType: Boolean 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_SetAMPUserRoleMembership(UserId: string, RoleId: string, IsMember: boolean): Promise<any> {
        return this.apiCall("Core/SetAMPUserRoleMembership", {
            UserId, 
            RoleId, 
            IsMember, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IList<IPermissionsTreeNode>
     */
    async Core_GetPermissionsSpec(): Promise<any[]> {
        return this.apiCall("Core/GetPermissionsSpec");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @return {any} AMPType: Task<ActionResult<Guid>>
     */
    async Core_CreateUser(Username: string): Promise<any> {
        return this.apiCall("Core/CreateUser", { Username });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_DeleteUser(Username: string): Promise<any> {
        return this.apiCall("Core/DeleteUser", { Username });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @param {boolean} Disabled AMPType: Boolean 
     * @param {boolean} PasswordExpires AMPType: Boolean 
     * @param {boolean} CannotChangePassword AMPType: Boolean 
     * @param {boolean} MustChangePassword AMPType: Boolean 
     * @param {string} EmailAddress AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_UpdateUserInfo(Username: string, Disabled: boolean, PasswordExpires: boolean, CannotChangePassword: boolean, MustChangePassword: boolean, EmailAddress: string): Promise<any> {
        return this.apiCall("Core/UpdateUserInfo", {
            Username, 
            Disabled, 
            PasswordExpires, 
            CannotChangePassword, 
            MustChangePassword, 
            EmailAddress, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ActionResult<String>
     */
    async Core_GetWebauthnChallenge(): Promise<any> {
        return this.apiCall("Core/GetWebauthnChallenge");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} username AMPType: String 
     * @return {any} AMPType: WebauthnLoginInfo
     */
    async Core_GetWebauthnCredentialIDs(username: string): Promise<any> {
        return this.apiCall("Core/GetWebauthnCredentialIDs", { username });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} attestationObject AMPType: String 
     * @param {string} clientDataJSON AMPType: String 
     * @param {string} description AMPType: String 
     * @return {any} AMPType: ActionResult
     */
    async Core_WebauthnRegister(attestationObject: string, clientDataJSON: string, description: string): Promise<any> {
        return this.apiCall("Core/WebauthnRegister", {
            attestationObject, 
            clientDataJSON, 
            description, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<WebauthnCredentialSummary>
     */
    async Core_GetWebauthnCredentialSummaries(): Promise<any[]> {
        return this.apiCall("Core/GetWebauthnCredentialSummaries");
    }

    /**
     * Name TypeName Description Optional
     * @param {number} ID AMPType: Int32 
     * @return {any} AMPType: ActionResult
     */
    async Core_RevokeWebauthnCredential(ID: number): Promise<any> {
        return this.apiCall("Core/RevokeWebauthnCredential", { ID });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} EmailAddress AMPType: String 
     * @param {string} TwoFactorPIN AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_UpdateAccountInfo(EmailAddress: string, TwoFactorPIN: string): Promise<any> {
        return this.apiCall("Core/UpdateAccountInfo", {
            EmailAddress, 
            TwoFactorPIN, 
        });
    }

    /**
     * Sets up two-factor authentication for the given user. ConfirmTwoFactorSetup must be invoked to complete setup.
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @param {string} Password AMPType: String 
     * @return {any} AMPType: Task<ActionResult<TwoFactorSetupInfo>>
     */
    async Core_EnableTwoFactor(Username: string, Password: string): Promise<any> {
        return this.apiCall("Core/EnableTwoFactor", {
            Username, 
            Password, 
        });
    }

    /**
     * Completes two-factor setup by supplying a valid two factor code based on the secret provided by EnableTwoFactor
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @param {string} TwoFactorCode AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_ConfirmTwoFactorSetup(Username: string, TwoFactorCode: string): Promise<any> {
        return this.apiCall("Core/ConfirmTwoFactorSetup", {
            Username, 
            TwoFactorCode, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Password AMPType: String 
     * @param {string} TwoFactorCode AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_DisableTwoFactor(Password: string, TwoFactorCode: string): Promise<any> {
        return this.apiCall("Core/DisableTwoFactor", {
            Password, 
            TwoFactorCode, 
        });
    }

    /**
     * For administrative users to alter the password of another user
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @param {string} NewPassword AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_ResetUserPassword(Username: string, NewPassword: string): Promise<any> {
        return this.apiCall("Core/ResetUserPassword", {
            Username, 
            NewPassword, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} InstanceId AMPType: Guid 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_DeleteInstanceUsers(InstanceId: string): Promise<any> {
        return this.apiCall("Core/DeleteInstanceUsers", { InstanceId });
    }

    /**
     * For a user to change their own password, requires knowing the old password
     * Name TypeName Description Optional
     * @param {string} Username AMPType: String 
     * @param {string} OldPassword AMPType: String 
     * @param {string} NewPassword AMPType: String 
     * @param {string} TwoFactorPIN AMPType: String 
     * @return {any} AMPType: Task<ActionResult>
     */
    async Core_ChangeUserPassword(Username: string, OldPassword: string, NewPassword: string, TwoFactorPIN: string): Promise<any> {
        return this.apiCall("Core/ChangeUserPassword", {
            Username, 
            OldPassword, 
            NewPassword, 
            TwoFactorPIN, 
        });
    }

    /**
     * Gets changes to the server status, in addition to any notifications or console output that have occured since the last time GetUpdates() was called by the current session.
     * Name TypeName Description Optional
     * @return {any} AMPType: JObject
     */
    async Core_GetUpdates(): Promise<any> {
        return this.apiCall("Core/GetUpdates");
    }

    /**
     * Name TypeName Description Optional
     * @return {string} AMPType: Guid
     */
    async Core_GetNewGuid(): Promise<string> {
        return this.apiCall("Core/GetNewGuid");
    }

    /**
     * Returns a list of in-application users
     * Name TypeName Description Optional
     * @return {{ [key: string]: string }} AMPType: Dictionary<String, String>
     */
    async Core_GetUserList(): Promise<{ [key: string]: string }> {
        return this.apiCall("Core/GetUserList");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} PermissionNode AMPType: String 
     * @return {boolean} AMPType: Boolean
     */
    async Core_CurrentSessionHasPermission(PermissionNode: string): Promise<boolean> {
        return this.apiCall("Core/CurrentSessionHasPermission", { PermissionNode });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: IEnumerable<RunningTask>
     */
    async Core_GetTasks(): Promise<any> {
        return this.apiCall("Core/GetTasks");
    }

    /**
     * Name TypeName Description Optional
     * @return {any[]} AMPType: IEnumerable<ListeningPortSummary>
     */
    async Core_GetPortSummaries(): Promise<any[]> {
        return this.apiCall("Core/GetPortSummaries");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: JObject
     */
    async Core_GetStatus(): Promise<any> {
        return this.apiCall("Core/GetStatus");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TaskId AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async Core_CancelTask(TaskId: string): Promise<any> {
        return this.apiCall("Core/CancelTask", { TaskId });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} TaskId AMPType: Guid 
     * @return {any} AMPType: ActionResult
     */
    async Core_DismissTask(TaskId: string): Promise<any> {
        return this.apiCall("Core/DismissTask", { TaskId });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ActionResult
     */
    async Core_DismissAllTasks(): Promise<any> {
        return this.apiCall("Core/DismissAllTasks");
    }

    /**
     * Provides information about a given in-application user (as opposed to AMP system users)
     * Name TypeName Description Optional
     * @param {string} UID AMPType: String 
     * @return {any} AMPType: JObject
     */
    async Core_GetUserInfo(UID: string): Promise<any> {
        return this.apiCall("Core/GetUserInfo", { UID });
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ActionResult
     */
    async Core_Start(): Promise<any> {
        return this.apiCall("Core/Start");
    }

    /**
     * Prevents the current instance from being started, and stops it if it's currently running.
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_Suspend(): Promise<void> {
        return this.apiCall("Core/Suspend");
    }

    /**
     * Allows the service to be re-started after previously being suspended.
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_Resume(): Promise<void> {
        return this.apiCall("Core/Resume");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_Stop(): Promise<void> {
        return this.apiCall("Core/Stop");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ActionResult
     */
    async Core_Restart(): Promise<any> {
        return this.apiCall("Core/Restart");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_Kill(): Promise<void> {
        return this.apiCall("Core/Kill");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ActionResult
     */
    async Core_Sleep(): Promise<any> {
        return this.apiCall("Core/Sleep");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ActionResult
     */
    async Core_UpdateApplication(): Promise<any> {
        return this.apiCall("Core/UpdateApplication");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_AcknowledgeAMPUpdate(): Promise<void> {
        return this.apiCall("Core/AcknowledgeAMPUpdate");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: ModuleInfo
     */
    async Core_GetModuleInfo(): Promise<any> {
        return this.apiCall("Core/GetModuleInfo");
    }

    /**
     * Name TypeName Description Optional
     * @return {{ [key: string]: any[] }} AMPType: Dictionary<String, Dictionary<String, MethodInfoSummary>>
     */
    async Core_GetAPISpec(): Promise<{ [key: string]: any[] }> {
        return this.apiCall("Core/GetAPISpec");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Object
     */
    async Core_GetUserActionsSpec(): Promise<any> {
        return this.apiCall("Core/GetUserActionsSpec");
    }

    /**
     * Name TypeName Description Optional
     * @param {string} username AMPType: String 
     * @param {string} password AMPType: String 
     * @param {string} token AMPType: String 
     * @param {boolean} rememberMe AMPType: Boolean 
     * @return {any} AMPType: Task<JObject>
     */
    async Core_Login(username: string, password: string, token: string, rememberMe: boolean): Promise<any> {
        return this.apiCall("Core/Login", {
            username, 
            password, 
            token, 
            rememberMe, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} Description AMPType: String 
     * @param {boolean} IsTemporary AMPType: Boolean 
     * @return {any} AMPType: Task<String>
     */
    async Core_GetRemoteLoginToken(Description: string, IsTemporary: boolean): Promise<any> {
        return this.apiCall("Core/GetRemoteLoginToken", {
            Description, 
            IsTemporary, 
        });
    }

    /**
     * Name TypeName Description Optional
     * @param {string} message AMPType: String 
     * @return {void} AMPType: Void
     */
    async Core_SendConsoleMessage(message: string): Promise<void> {
        return this.apiCall("Core/SendConsoleMessage", { message });
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_UpdateAMPInstance(): Promise<void> {
        return this.apiCall("Core/UpdateAMPInstance");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: UpdateInfo
     */
    async Core_GetUpdateInfo(): Promise<any> {
        return this.apiCall("Core/GetUpdateInfo");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_Logout(): Promise<void> {
        return this.apiCall("Core/Logout");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_RestartAMP(): Promise<void> {
        return this.apiCall("Core/RestartAMP");
    }

    /**
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_UpgradeAMP(): Promise<void> {
        return this.apiCall("Core/UpgradeAMP");
    }

    /**
     * Name TypeName Description Optional
     * @return {{ [key: string]: string }} AMPType: Dictionary<String, String>
     */
    async Core_GetDiagnosticsInfo(): Promise<{ [key: string]: string }> {
        return this.apiCall("Core/GetDiagnosticsInfo");
    }

    /**
     * Name TypeName Description Optional
     * @return {any} AMPType: Object
     */
    async Core_GetWebserverMetrics(): Promise<any> {
        return this.apiCall("Core/GetWebserverMetrics");
    }

    /**
     * DEV: Creates a non-ending task with 50% progress for testing purposes
     * Name TypeName Description Optional
     * @return {void} AMPType: Void
     */
    async Core_CreateTestTask(): Promise<void> {
        return this.apiCall("Core/CreateTestTask");
    }

    /**
     * DEV: Async test method
     * Name TypeName Description Optional
     * @return {any} AMPType: Task<String>
     */
    async Core_AsyncTest(): Promise<any> {
        return this.apiCall("Core/AsyncTest");
    }

}

/**
 * @class AMPAPIHandler
 * @description Modified handler class for the AMP API
 * @property {string} username Username for the AMP API
 * @property {string} password Password for the AMP API
 * @property {string} rememberMeToken Remember me token for the AMP API
 * @extends AMPAPI
 */
class AMPAPIHandler extends AMPAPI {
    private username: string;
    private password: string;
    private rememberMeToken: string;

    /**
     * @constructor
     * @description Constructor for the AMP API handler
     * @param baseUri Base URI for the AMP API
     * @param username AMP API username
     * @param password AMP API password
     * @param rememberMeToken Remember me token for the AMP API
     * @param sessionId Session ID for the AMP API
     */
    constructor(baseUri: string, username: string, password: string, rememberMeToken: string = "", sessionId: string = "") {
        super(baseUri);
        if (!this.baseUri.endsWith("/")) {
            this.baseUri += "/";
        }
        this.username = username;
        this.password = password;
        this.rememberMeToken = rememberMeToken;
        this.sessionId = sessionId;
    }

    /**
     * @method Login
     * @description Simplified login function
     * @returns {Promise<any>} The result of the login
     */
    public async Login(): Promise<any> {
        const data = {
            username: this.username,
            password: this.password,
            token: this.rememberMeToken,
            rememberMe: true,
        }

        const loginResult = await this.apiCall("Core/Login", data);

        if (loginResult.success === true) {
            this.rememberMeToken = loginResult.rememberMeToken;
            this.sessionId = loginResult.sessionID;
        }

        return loginResult;
    }

    /**
     * @method InstanceLogin
     * @description Proxies a login request to an instance and returns a new AMPAPIHandler for that instance.
     * @param {string} instanceId The instance ID to login to
     * @return {Promise<AMPAPIHandler>} A new AMPAPIHandler for the instance
     */
    public async InstanceLogin(instanceId: string): Promise<AMPAPIHandler> {
        const data = {
            username: this.username,
            password: this.password,
            token: this.rememberMeToken,
            rememberMe: true,
        }

        const loginResult = await this.apiCall("ADSModule/Servers/" + instanceId + "/API/Core/Login", data);

        if (loginResult.success === true) {
            return new AMPAPIHandler(this.baseUri + "API/ADSModule/Servers/" + instanceId, this.username, "", loginResult.rememberMeToken, loginResult.sessionID);
        } else {
            return undefined;
        }
    }
}

export { AMPAPI, AMPAPIHandler };
