// lib/AMPAPI.ts
class AMPAPI {
  baseUri;
  dataSource;
  username;
  password;
  rememberMeToken;
  sessionId;
  constructor(baseUri, username = "", password = "", rememberMeToken = "", sessionId = "") {
    this.baseUri = baseUri;
    if (!this.baseUri.endsWith("/")) {
      this.baseUri += "/";
    }
    this.dataSource = this.baseUri + "API";
    this.username = username;
    this.password = password;
    this.rememberMeToken = rememberMeToken;
    this.sessionId = sessionId;
  }
  async apiCall(endpoint, data = {}) {
    const session = { SESSIONID: this.sessionId };
    const response = await fetch(this.dataSource + "/" + endpoint, {
      method: "POST",
      headers: { Accept: "text/javascript" },
      body: JSON.stringify({ ...data, ...session })
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("API call failed");
    }
  }
  async APILogin() {
    const data = {
      username: this.username,
      password: this.password,
      token: this.rememberMeToken,
      rememberMe: true
    };
    const loginResult = await this.apiCall("Core/Login", data);
    if (loginResult.success === true) {
      this.rememberMeToken = loginResult.rememberMeToken;
      this.sessionId = loginResult.sessionID;
    }
    return loginResult;
  }
}

// lib/apimodules/ADSModule.ts
class ADSModule extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async AddDatastore(newDatastore) {
    return this.apiCall("ADSModule/AddDatastore", {
      newDatastore
    });
  }
  async ApplyInstanceConfiguration(InstanceID, Args, RebuildConfiguration) {
    return this.apiCall("ADSModule/ApplyInstanceConfiguration", {
      InstanceID,
      Args,
      RebuildConfiguration
    });
  }
  async ApplyTemplate(InstanceID, TemplateID, NewFriendlyName, Secret, RestartIfPreviouslyRunning) {
    return this.apiCall("ADSModule/ApplyTemplate", {
      InstanceID,
      TemplateID,
      NewFriendlyName,
      Secret,
      RestartIfPreviouslyRunning
    });
  }
  async AttachADS(Friendly, IsHTTPS, Host, Port, InstanceID) {
    return this.apiCall("ADSModule/AttachADS", {
      Friendly,
      IsHTTPS,
      Host,
      Port,
      InstanceID
    });
  }
  async CloneTemplate(Id, NewName) {
    return this.apiCall("ADSModule/CloneTemplate", {
      Id,
      NewName
    });
  }
  async ConvertToManaged(InstanceName) {
    return this.apiCall("ADSModule/ConvertToManaged", {
      InstanceName
    });
  }
  async CreateDeploymentTemplate(Name) {
    return this.apiCall("ADSModule/CreateDeploymentTemplate", {
      Name
    });
  }
  async CreateInstance(TargetADSInstance, NewInstanceId, Module, InstanceName, FriendlyName, IPBinding, PortNumber, AdminUsername, AdminPassword, ProvisionSettings, AutoConfigure, PostCreate, StartOnBoot, DisplayImageSource, TargetDatastore) {
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
  async CreateLocalInstance(Instance2, PostCreate) {
    return this.apiCall("ADSModule/CreateLocalInstance", {
      Instance: Instance2,
      PostCreate
    });
  }
  async DeleteDatastore(id) {
    return this.apiCall("ADSModule/DeleteDatastore", {
      id
    });
  }
  async DeleteDeploymentTemplate(Id) {
    return this.apiCall("ADSModule/DeleteDeploymentTemplate", {
      Id
    });
  }
  async DeleteInstance(InstanceName) {
    return this.apiCall("ADSModule/DeleteInstance", {
      InstanceName
    });
  }
  async DeleteInstanceUsers(InstanceId) {
    return this.apiCall("ADSModule/DeleteInstanceUsers", {
      InstanceId
    });
  }
  async DeployTemplate(TemplateID, NewUsername, NewPassword, NewEmail, RequiredTags, Tag, FriendlyName, Secret, PostCreate, ExtraProvisionSettings) {
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
  async DetatchTarget(Id) {
    return this.apiCall("ADSModule/DetatchTarget", {
      Id
    });
  }
  async ExtractEverywhere(SourceArchive) {
    return this.apiCall("ADSModule/ExtractEverywhere", {
      SourceArchive
    });
  }
  async GetApplicationEndpoints(instanceId) {
    return this.apiCall("ADSModule/GetApplicationEndpoints", {
      instanceId
    });
  }
  async GetDatastore(id) {
    return this.apiCall("ADSModule/GetDatastore", {
      id
    });
  }
  async GetDatastoreInstances(datastoreId) {
    return this.apiCall("ADSModule/GetDatastoreInstances", {
      datastoreId
    });
  }
  async GetDatastores() {
    return this.apiCall("ADSModule/GetDatastores", {});
  }
  async GetDeploymentTemplates() {
    return this.apiCall("ADSModule/GetDeploymentTemplates", {});
  }
  async GetGroup(GroupId) {
    return this.apiCall("ADSModule/GetGroup", {
      GroupId
    });
  }
  async GetInstance(InstanceId) {
    return this.apiCall("ADSModule/GetInstance", {
      InstanceId
    });
  }
  async GetInstanceNetworkInfo(InstanceName) {
    return this.apiCall("ADSModule/GetInstanceNetworkInfo", {
      InstanceName
    });
  }
  async GetInstanceStatuses() {
    return this.apiCall("ADSModule/GetInstanceStatuses", {});
  }
  async GetInstances() {
    return this.apiCall("ADSModule/GetInstances", {});
  }
  async GetLocalInstances() {
    return this.apiCall("ADSModule/GetLocalInstances", {});
  }
  async GetProvisionArguments(ModuleName) {
    return this.apiCall("ADSModule/GetProvisionArguments", {
      ModuleName
    });
  }
  async GetProvisionFitness() {
    return this.apiCall("ADSModule/GetProvisionFitness", {});
  }
  async GetSupportedApplications() {
    return this.apiCall("ADSModule/GetSupportedApplications", {});
  }
  async GetTargetInfo() {
    return this.apiCall("ADSModule/GetTargetInfo", {});
  }
  async HandoutInstanceConfigs(ForModule, SettingNode, Values) {
    return this.apiCall("ADSModule/HandoutInstanceConfigs", {
      ForModule,
      SettingNode,
      Values
    });
  }
  async ManageInstance(InstanceId) {
    return this.apiCall("ADSModule/ManageInstance", {
      InstanceId
    });
  }
  async ModifyCustomFirewallRule(instanceId, PortNumber, Range, Protocol, Description, Open) {
    return this.apiCall("ADSModule/ModifyCustomFirewallRule", {
      instanceId,
      PortNumber,
      Range,
      Protocol,
      Description,
      Open
    });
  }
  async MoveInstanceDatastore(instanceId, datastoreId) {
    return this.apiCall("ADSModule/MoveInstanceDatastore", {
      instanceId,
      datastoreId
    });
  }
  async ReactivateLocalInstances() {
    return this.apiCall("ADSModule/ReactivateLocalInstances", {});
  }
  async RefreshAppCache() {
    return this.apiCall("ADSModule/RefreshAppCache", {});
  }
  async RefreshGroup(GroupId) {
    return this.apiCall("ADSModule/RefreshGroup", {
      GroupId
    });
  }
  async RefreshInstanceConfig(InstanceId) {
    return this.apiCall("ADSModule/RefreshInstanceConfig", {
      InstanceId
    });
  }
  async RefreshRemoteConfigStores() {
    return this.apiCall("ADSModule/RefreshRemoteConfigStores", {});
  }
  async RegisterTarget(controllerUrl, myUrl, username, password, twoFactorToken, friendlyName) {
    return this.apiCall("ADSModule/RegisterTarget", {
      controllerUrl,
      myUrl,
      username,
      password,
      twoFactorToken,
      friendlyName
    });
  }
  async RepairDatastore(id) {
    return this.apiCall("ADSModule/RepairDatastore", {
      id
    });
  }
  async RequestDatastoreSizeCalculation(datastoreId) {
    return this.apiCall("ADSModule/RequestDatastoreSizeCalculation", {
      datastoreId
    });
  }
  async RestartInstance(InstanceName) {
    return this.apiCall("ADSModule/RestartInstance", {
      InstanceName
    });
  }
  async Servers(id, REQ_RAWJSON) {
    return this.apiCall("ADSModule/Servers", {
      id,
      REQ_RAWJSON
    });
  }
  async SetInstanceConfig(InstanceName, SettingNode, Value) {
    return this.apiCall("ADSModule/SetInstanceConfig", {
      InstanceName,
      SettingNode,
      Value
    });
  }
  async SetInstanceNetworkInfo(InstanceId, PortMappings) {
    return this.apiCall("ADSModule/SetInstanceNetworkInfo", {
      InstanceId,
      PortMappings
    });
  }
  async SetInstanceSuspended(InstanceName, Suspended) {
    return this.apiCall("ADSModule/SetInstanceSuspended", {
      InstanceName,
      Suspended
    });
  }
  async StartAllInstances() {
    return this.apiCall("ADSModule/StartAllInstances", {});
  }
  async StartInstance(InstanceName) {
    return this.apiCall("ADSModule/StartInstance", {
      InstanceName
    });
  }
  async StopAllInstances() {
    return this.apiCall("ADSModule/StopAllInstances", {});
  }
  async StopInstance(InstanceName) {
    return this.apiCall("ADSModule/StopInstance", {
      InstanceName
    });
  }
  async TestADSLoginDetails(url, username, password) {
    return this.apiCall("ADSModule/TestADSLoginDetails", {
      url,
      username,
      password
    });
  }
  async UpdateDatastore(updatedDatastore) {
    return this.apiCall("ADSModule/UpdateDatastore", {
      updatedDatastore
    });
  }
  async UpdateDeploymentTemplate(templateToUpdate) {
    return this.apiCall("ADSModule/UpdateDeploymentTemplate", {
      templateToUpdate
    });
  }
  async UpdateInstanceInfo(InstanceId, FriendlyName, Description, StartOnBoot, Suspended, ExcludeFromFirewall, RunInContainer, ContainerMemory, MemoryPolicy, ContainerMaxCPU, ContainerImage) {
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
  async UpdateTarget(TargetID) {
    return this.apiCall("ADSModule/UpdateTarget", {
      TargetID
    });
  }
  async UpdateTargetInfo(Id, FriendlyName, Url, Description, Tags) {
    return this.apiCall("ADSModule/UpdateTargetInfo", {
      Id,
      FriendlyName,
      Url,
      Description,
      Tags
    });
  }
  async UpgradeAllInstances(RestartRunning) {
    return this.apiCall("ADSModule/UpgradeAllInstances", {
      RestartRunning
    });
  }
  async UpgradeInstance(InstanceName) {
    return this.apiCall("ADSModule/UpgradeInstance", {
      InstanceName
    });
  }
}

// lib/apimodules/Core.ts
class Core extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async AcknowledgeAMPUpdate() {
    return this.apiCall("Core/AcknowledgeAMPUpdate", {});
  }
  async AddEventTrigger(triggerId) {
    return this.apiCall("Core/AddEventTrigger", {
      triggerId
    });
  }
  async AddIntervalTrigger(months, days, hours, minutes, daysOfMonth, description) {
    return this.apiCall("Core/AddIntervalTrigger", {
      months,
      days,
      hours,
      minutes,
      daysOfMonth,
      description
    });
  }
  async AddTask(TriggerID, MethodID, ParameterMapping) {
    return this.apiCall("Core/AddTask", {
      TriggerID,
      MethodID,
      ParameterMapping
    });
  }
  async AsyncTest() {
    return this.apiCall("Core/AsyncTest", {});
  }
  async CancelTask(TaskId) {
    return this.apiCall("Core/CancelTask", {
      TaskId
    });
  }
  async ChangeTaskOrder(TriggerID, TaskID, NewOrder) {
    return this.apiCall("Core/ChangeTaskOrder", {
      TriggerID,
      TaskID,
      NewOrder
    });
  }
  async ChangeUserPassword(Username, OldPassword, NewPassword, TwoFactorPIN) {
    return this.apiCall("Core/ChangeUserPassword", {
      Username,
      OldPassword,
      NewPassword,
      TwoFactorPIN
    });
  }
  async ConfirmTwoFactorSetup(Username, TwoFactorCode) {
    return this.apiCall("Core/ConfirmTwoFactorSetup", {
      Username,
      TwoFactorCode
    });
  }
  async CreateRole(Name, AsCommonRole) {
    return this.apiCall("Core/CreateRole", {
      Name,
      AsCommonRole
    });
  }
  async CreateTestTask() {
    return this.apiCall("Core/CreateTestTask", {});
  }
  async CreateUser(Username) {
    return this.apiCall("Core/CreateUser", {
      Username
    });
  }
  async CurrentSessionHasPermission(PermissionNode) {
    return this.apiCall("Core/CurrentSessionHasPermission", {
      PermissionNode
    });
  }
  async DeleteInstanceUsers(InstanceId) {
    return this.apiCall("Core/DeleteInstanceUsers", {
      InstanceId
    });
  }
  async DeleteRole(RoleId) {
    return this.apiCall("Core/DeleteRole", {
      RoleId
    });
  }
  async DeleteTask(TriggerID, TaskID) {
    return this.apiCall("Core/DeleteTask", {
      TriggerID,
      TaskID
    });
  }
  async DeleteTrigger(TriggerID) {
    return this.apiCall("Core/DeleteTrigger", {
      TriggerID
    });
  }
  async DeleteUser(Username) {
    return this.apiCall("Core/DeleteUser", {
      Username
    });
  }
  async DisableTwoFactor(Password, TwoFactorCode) {
    return this.apiCall("Core/DisableTwoFactor", {
      Password,
      TwoFactorCode
    });
  }
  async DismissAllTasks() {
    return this.apiCall("Core/DismissAllTasks", {});
  }
  async DismissTask(TaskId) {
    return this.apiCall("Core/DismissTask", {
      TaskId
    });
  }
  async EditIntervalTrigger(Id, months, days, hours, minutes, daysOfMonth, description) {
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
  async EditTask(TriggerID, TaskID, ParameterMapping) {
    return this.apiCall("Core/EditTask", {
      TriggerID,
      TaskID,
      ParameterMapping
    });
  }
  async EnableTwoFactor(Username, Password) {
    return this.apiCall("Core/EnableTwoFactor", {
      Username,
      Password
    });
  }
  async EndUserSession(Id) {
    return this.apiCall("Core/EndUserSession", {
      Id
    });
  }
  async GetAMPRolePermissions(RoleId) {
    return this.apiCall("Core/GetAMPRolePermissions", {
      RoleId
    });
  }
  async GetAMPUserInfo(Username) {
    return this.apiCall("Core/GetAMPUserInfo", {
      Username
    });
  }
  async GetAMPUsersSummary() {
    return this.apiCall("Core/GetAMPUsersSummary", {});
  }
  async GetAPISpec() {
    return this.apiCall("Core/GetAPISpec", {});
  }
  async GetActiveAMPSessions() {
    return this.apiCall("Core/GetActiveAMPSessions", {});
  }
  async GetAllAMPUserInfo() {
    return this.apiCall("Core/GetAllAMPUserInfo", {});
  }
  async GetAuditLogEntries(Before, Count) {
    return this.apiCall("Core/GetAuditLogEntries", {
      Before,
      Count
    });
  }
  async GetConfig(node) {
    return this.apiCall("Core/GetConfig", {
      node
    });
  }
  async GetConfigs(nodes) {
    return this.apiCall("Core/GetConfigs", {
      nodes
    });
  }
  async GetDiagnosticsInfo() {
    return this.apiCall("Core/GetDiagnosticsInfo", {});
  }
  async GetModuleInfo() {
    return this.apiCall("Core/GetModuleInfo", {});
  }
  async GetNewGuid() {
    return this.apiCall("Core/GetNewGuid", {});
  }
  async GetPermissionsSpec() {
    return this.apiCall("Core/GetPermissionsSpec", {});
  }
  async GetPortSummaries() {
    return this.apiCall("Core/GetPortSummaries", {});
  }
  async GetProvisionSpec() {
    return this.apiCall("Core/GetProvisionSpec", {});
  }
  async GetRemoteLoginToken(Description, IsTemporary) {
    return this.apiCall("Core/GetRemoteLoginToken", {
      Description,
      IsTemporary
    });
  }
  async GetRole(RoleId) {
    return this.apiCall("Core/GetRole", {
      RoleId
    });
  }
  async GetRoleData() {
    return this.apiCall("Core/GetRoleData", {});
  }
  async GetRoleIds() {
    return this.apiCall("Core/GetRoleIds", {});
  }
  async GetScheduleData() {
    return this.apiCall("Core/GetScheduleData", {});
  }
  async GetSettingValues(SettingNode, WithRefresh) {
    return this.apiCall("Core/GetSettingValues", {
      SettingNode,
      WithRefresh
    });
  }
  async GetSettingsSpec() {
    return this.apiCall("Core/GetSettingsSpec", {});
  }
  async GetStatus() {
    return this.apiCall("Core/GetStatus", {});
  }
  async GetTasks() {
    return this.apiCall("Core/GetTasks", {});
  }
  async GetTimeIntervalTrigger(Id) {
    return this.apiCall("Core/GetTimeIntervalTrigger", {
      Id
    });
  }
  async GetUpdateInfo() {
    return this.apiCall("Core/GetUpdateInfo", {});
  }
  async GetUpdates() {
    return this.apiCall("Core/GetUpdates", {});
  }
  async GetUserActionsSpec() {
    return this.apiCall("Core/GetUserActionsSpec", {});
  }
  async GetUserInfo(UID) {
    return this.apiCall("Core/GetUserInfo", {
      UID
    });
  }
  async GetUserList() {
    return this.apiCall("Core/GetUserList", {});
  }
  async GetWebauthnChallenge() {
    return this.apiCall("Core/GetWebauthnChallenge", {});
  }
  async GetWebauthnCredentialIDs(username) {
    return this.apiCall("Core/GetWebauthnCredentialIDs", {
      username
    });
  }
  async GetWebauthnCredentialSummaries() {
    return this.apiCall("Core/GetWebauthnCredentialSummaries", {});
  }
  async GetWebserverMetrics() {
    return this.apiCall("Core/GetWebserverMetrics", {});
  }
  async Kill() {
    return this.apiCall("Core/Kill", {});
  }
  async Login(username, password, token, rememberMe) {
    return this.apiCall("Core/Login", {
      username,
      password,
      token,
      rememberMe
    });
  }
  async Logout() {
    return this.apiCall("Core/Logout", {});
  }
  async RefreshSettingValueList(Node) {
    return this.apiCall("Core/RefreshSettingValueList", {
      Node
    });
  }
  async RefreshSettingsSourceCache() {
    return this.apiCall("Core/RefreshSettingsSourceCache", {});
  }
  async RenameRole(RoleId, NewName) {
    return this.apiCall("Core/RenameRole", {
      RoleId,
      NewName
    });
  }
  async ResetUserPassword(Username, NewPassword) {
    return this.apiCall("Core/ResetUserPassword", {
      Username,
      NewPassword
    });
  }
  async Restart() {
    return this.apiCall("Core/Restart", {});
  }
  async RestartAMP() {
    return this.apiCall("Core/RestartAMP", {});
  }
  async Resume() {
    return this.apiCall("Core/Resume", {});
  }
  async RevokeWebauthnCredential(ID) {
    return this.apiCall("Core/RevokeWebauthnCredential", {
      ID
    });
  }
  async RunEventTriggerImmediately(triggerId) {
    return this.apiCall("Core/RunEventTriggerImmediately", {
      triggerId
    });
  }
  async SendConsoleMessage(message) {
    return this.apiCall("Core/SendConsoleMessage", {
      message
    });
  }
  async SetAMPRolePermission(RoleId, PermissionNode, Enabled) {
    return this.apiCall("Core/SetAMPRolePermission", {
      RoleId,
      PermissionNode,
      Enabled
    });
  }
  async SetAMPUserRoleMembership(UserId, RoleId, IsMember) {
    return this.apiCall("Core/SetAMPUserRoleMembership", {
      UserId,
      RoleId,
      IsMember
    });
  }
  async SetConfig(node, value) {
    return this.apiCall("Core/SetConfig", {
      node,
      value
    });
  }
  async SetConfigs(data) {
    return this.apiCall("Core/SetConfigs", {
      data
    });
  }
  async SetTriggerEnabled(Id, Enabled) {
    return this.apiCall("Core/SetTriggerEnabled", {
      Id,
      Enabled
    });
  }
  async Sleep() {
    return this.apiCall("Core/Sleep", {});
  }
  async Start() {
    return this.apiCall("Core/Start", {});
  }
  async Stop() {
    return this.apiCall("Core/Stop", {});
  }
  async Suspend() {
    return this.apiCall("Core/Suspend", {});
  }
  async UpdateAMPInstance() {
    return this.apiCall("Core/UpdateAMPInstance", {});
  }
  async UpdateAccountInfo(EmailAddress, TwoFactorPIN) {
    return this.apiCall("Core/UpdateAccountInfo", {
      EmailAddress,
      TwoFactorPIN
    });
  }
  async UpdateApplication() {
    return this.apiCall("Core/UpdateApplication", {});
  }
  async UpdateUserInfo(Username, Disabled, PasswordExpires, CannotChangePassword, MustChangePassword, EmailAddress) {
    return this.apiCall("Core/UpdateUserInfo", {
      Username,
      Disabled,
      PasswordExpires,
      CannotChangePassword,
      MustChangePassword,
      EmailAddress
    });
  }
  async UpgradeAMP() {
    return this.apiCall("Core/UpgradeAMP", {});
  }
  async WebauthnRegister(attestationObject, clientDataJSON, description) {
    return this.apiCall("Core/WebauthnRegister", {
      attestationObject,
      clientDataJSON,
      description
    });
  }
}

// lib/apimodules/EmailSenderPlugin.ts
class EmailSenderPlugin extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async TestSMTPSettings() {
    return this.apiCall("EmailSenderPlugin/TestSMTPSettings", {});
  }
}

// lib/apimodules/FileManagerPlugin.ts
class FileManagerPlugin extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async AppendFileChunk(Filename, Data, Delete) {
    return this.apiCall("FileManagerPlugin/AppendFileChunk", {
      Filename,
      Data,
      Delete
    });
  }
  async CalculateFileMD5Sum(FilePath) {
    return this.apiCall("FileManagerPlugin/CalculateFileMD5Sum", {
      FilePath
    });
  }
  async ChangeExclusion(ModifyPath, AsDirectory, Exclude) {
    return this.apiCall("FileManagerPlugin/ChangeExclusion", {
      ModifyPath,
      AsDirectory,
      Exclude
    });
  }
  async CopyFile(Origin, TargetDirectory) {
    return this.apiCall("FileManagerPlugin/CopyFile", {
      Origin,
      TargetDirectory
    });
  }
  async CreateArchive(PathToArchive) {
    return this.apiCall("FileManagerPlugin/CreateArchive", {
      PathToArchive
    });
  }
  async CreateDirectory(NewPath) {
    return this.apiCall("FileManagerPlugin/CreateDirectory", {
      NewPath
    });
  }
  async DownloadFileFromURL(Source, TargetDirectory) {
    return this.apiCall("FileManagerPlugin/DownloadFileFromURL", {
      Source,
      TargetDirectory
    });
  }
  async Dummy() {
    return this.apiCall("FileManagerPlugin/Dummy", {});
  }
  async EmptyTrash(TrashDirectoryName) {
    return this.apiCall("FileManagerPlugin/EmptyTrash", {
      TrashDirectoryName
    });
  }
  async ExtractArchive(ArchivePath, DestinationPath) {
    return this.apiCall("FileManagerPlugin/ExtractArchive", {
      ArchivePath,
      DestinationPath
    });
  }
  async GetDirectoryListing(Dir) {
    return this.apiCall("FileManagerPlugin/GetDirectoryListing", {
      Dir
    });
  }
  async GetFileChunk(Filename, Position, Length) {
    return this.apiCall("FileManagerPlugin/GetFileChunk", {
      Filename,
      Position,
      Length
    });
  }
  async ReadFileChunk(Filename, Offset, ChunkSize) {
    return this.apiCall("FileManagerPlugin/ReadFileChunk", {
      Filename,
      Offset,
      ChunkSize
    });
  }
  async RenameDirectory(oldDirectory, NewDirectoryName) {
    return this.apiCall("FileManagerPlugin/RenameDirectory", {
      oldDirectory,
      NewDirectoryName
    });
  }
  async RenameFile(Filename, NewFilename) {
    return this.apiCall("FileManagerPlugin/RenameFile", {
      Filename,
      NewFilename
    });
  }
  async TrashDirectory(DirectoryName) {
    return this.apiCall("FileManagerPlugin/TrashDirectory", {
      DirectoryName
    });
  }
  async TrashFile(Filename) {
    return this.apiCall("FileManagerPlugin/TrashFile", {
      Filename
    });
  }
  async WriteFileChunk(Filename, Data, Offset, FinalChunk) {
    return this.apiCall("FileManagerPlugin/WriteFileChunk", {
      Filename,
      Data,
      Offset,
      FinalChunk
    });
  }
}

// lib/apimodules/LocalFileBackupPlugin.ts
class LocalFileBackupPlugin extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async DeleteFromS3(BackupId) {
    return this.apiCall("LocalFileBackupPlugin/DeleteFromS3", {
      BackupId
    });
  }
  async DeleteLocalBackup(BackupId) {
    return this.apiCall("LocalFileBackupPlugin/DeleteLocalBackup", {
      BackupId
    });
  }
  async DownloadFromS3(BackupId) {
    return this.apiCall("LocalFileBackupPlugin/DownloadFromS3", {
      BackupId
    });
  }
  async GetBackups() {
    return this.apiCall("LocalFileBackupPlugin/GetBackups", {});
  }
  async RestoreBackup(BackupId, DeleteExistingData) {
    return this.apiCall("LocalFileBackupPlugin/RestoreBackup", {
      BackupId,
      DeleteExistingData
    });
  }
  async SetBackupSticky(BackupId, Sticky) {
    return this.apiCall("LocalFileBackupPlugin/SetBackupSticky", {
      BackupId,
      Sticky
    });
  }
  async TakeBackup(Title, Description, Sticky) {
    return this.apiCall("LocalFileBackupPlugin/TakeBackup", {
      Title,
      Description,
      Sticky
    });
  }
  async UploadToS3(BackupId) {
    return this.apiCall("LocalFileBackupPlugin/UploadToS3", {
      BackupId
    });
  }
}

// lib/apimodules/MinecraftModule.ts
class MinecraftModule extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async AcceptEULA() {
    return this.apiCall("MinecraftModule/AcceptEULA", {});
  }
  async AddOPEntry(UserOrUUID) {
    return this.apiCall("MinecraftModule/AddOPEntry", {
      UserOrUUID
    });
  }
  async AddToWhitelist(UserOrUUID) {
    return this.apiCall("MinecraftModule/AddToWhitelist", {
      UserOrUUID
    });
  }
  async BanUserByID(ID) {
    return this.apiCall("MinecraftModule/BanUserByID", {
      ID
    });
  }
  async BukGetCategories() {
    return this.apiCall("MinecraftModule/BukGetCategories", {});
  }
  async BukGetInstallUpdatePlugin(pluginId) {
    return this.apiCall("MinecraftModule/BukGetInstallUpdatePlugin", {
      pluginId
    });
  }
  async BukGetInstalledPlugins() {
    return this.apiCall("MinecraftModule/BukGetInstalledPlugins", {});
  }
  async BukGetPluginInfo(PluginId) {
    return this.apiCall("MinecraftModule/BukGetPluginInfo", {
      PluginId
    });
  }
  async BukGetPluginsForCategory(CategoryId, PageNumber, PageSize) {
    return this.apiCall("MinecraftModule/BukGetPluginsForCategory", {
      CategoryId,
      PageNumber,
      PageSize
    });
  }
  async BukGetPopularPlugins() {
    return this.apiCall("MinecraftModule/BukGetPopularPlugins", {});
  }
  async BukGetRemovePlugin(PluginId) {
    return this.apiCall("MinecraftModule/BukGetRemovePlugin", {
      PluginId
    });
  }
  async BukGetSearch(Query, PageNumber, PageSize) {
    return this.apiCall("MinecraftModule/BukGetSearch", {
      Query,
      PageNumber,
      PageSize
    });
  }
  async ClearInventoryByID(ID) {
    return this.apiCall("MinecraftModule/ClearInventoryByID", {
      ID
    });
  }
  async GetFailureReason() {
    return this.apiCall("MinecraftModule/GetFailureReason", {});
  }
  async GetHeadByUUID(id) {
    return this.apiCall("MinecraftModule/GetHeadByUUID", {
      id
    });
  }
  async GetOPWhitelist() {
    return this.apiCall("MinecraftModule/GetOPWhitelist", {});
  }
  async GetWhitelist() {
    return this.apiCall("MinecraftModule/GetWhitelist", {});
  }
  async KickUserByID(ID) {
    return this.apiCall("MinecraftModule/KickUserByID", {
      ID
    });
  }
  async KillByID(ID) {
    return this.apiCall("MinecraftModule/KillByID", {
      ID
    });
  }
  async LoadOPList() {
    return this.apiCall("MinecraftModule/LoadOPList", {});
  }
  async RemoveOPEntry(UserOrUUID) {
    return this.apiCall("MinecraftModule/RemoveOPEntry", {
      UserOrUUID
    });
  }
  async RemoveWhitelistEntry(UserOrUUID) {
    return this.apiCall("MinecraftModule/RemoveWhitelistEntry", {
      UserOrUUID
    });
  }
  async SmiteByID(ID) {
    return this.apiCall("MinecraftModule/SmiteByID", {
      ID
    });
  }
}

// lib/apimodules/RCONPlugin.ts
class RCONPlugin extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async Dummy() {
    return this.apiCall("RCONPlugin/Dummy", {});
  }
}

// lib/apimodules/steamcmdplugin.ts
class steamcmdplugin extends AMPAPI {
  constructor(ampapi) {
    super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
  }
  async CancelSteamGuard() {
    return this.apiCall("steamcmdplugin/CancelSteamGuard", {});
  }
  async SteamGuardCode(code) {
    return this.apiCall("steamcmdplugin/SteamGuardCode", {
      code
    });
  }
  async SteamUsernamePassword(username, password) {
    return this.apiCall("steamcmdplugin/SteamUsernamePassword", {
      username,
      password
    });
  }
}

// lib/modules/CommonAPI.ts
class CommonAPI extends AMPAPI {
  Core = new Core(this);
  EmailSenderPlugin = new EmailSenderPlugin(this);
  FileManagerPlugin = new FileManagerPlugin(this);
  LocalFileBackupPlugin = new LocalFileBackupPlugin(this);
  constructor(baseUri, username = "", password = "", rememberMeToken = "", sessionId = "") {
    super(baseUri, username, password, rememberMeToken, sessionId);
  }
  async APILogin() {
    const loginResult = await super.APILogin();
    if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
      this.rememberMeToken = loginResult.rememberMeToken;
      this.sessionId = loginResult.sessionID;
      this.Core.sessionId = this.sessionId;
      this.Core.rememberMeToken = this.rememberMeToken;
      this.EmailSenderPlugin.sessionId = this.sessionId;
      this.EmailSenderPlugin.rememberMeToken = this.rememberMeToken;
      this.FileManagerPlugin.sessionId = this.sessionId;
      this.FileManagerPlugin.rememberMeToken = this.rememberMeToken;
      this.LocalFileBackupPlugin.sessionId = this.sessionId;
      this.LocalFileBackupPlugin.rememberMeToken = this.rememberMeToken;
    }
    return loginResult;
  }
}

// lib/modules/GenericModule.ts
class GenericModule extends CommonAPI {
  RCONPlugin = new RCONPlugin(this);
  steamcmdplugin = new steamcmdplugin(this);
  constructor(baseUri, username = "", password = "", rememberMeToken = "", sessionId = "") {
    super(baseUri, username, password, rememberMeToken, sessionId);
  }
  async APILogin() {
    const loginResult = await super.APILogin();
    if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
      this.rememberMeToken = loginResult.rememberMeToken;
      this.sessionId = loginResult.sessionID;
      this.RCONPlugin.sessionId = this.sessionId;
      this.RCONPlugin.rememberMeToken = this.rememberMeToken;
      this.steamcmdplugin.sessionId = this.sessionId;
      this.steamcmdplugin.rememberMeToken = this.rememberMeToken;
    }
    return loginResult;
  }
}

// lib/modules/Minecraft.ts
class Minecraft extends CommonAPI {
  MinecraftModule = new MinecraftModule(this);
  constructor(baseUri, username = "", password = "", rememberMeToken = "", sessionId = "") {
    super(baseUri, username, password, rememberMeToken, sessionId);
  }
  async APILogin() {
    const loginResult = await super.APILogin();
    if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
      this.rememberMeToken = loginResult.rememberMeToken;
      this.sessionId = loginResult.sessionID;
      this.MinecraftModule.sessionId = this.sessionId;
      this.MinecraftModule.rememberMeToken = this.rememberMeToken;
    }
    return loginResult;
  }
}

// lib/modules/ADS.ts
class ADS extends CommonAPI {
  ADSModule = new ADSModule(this);
  constructor(baseUri, username = "", password = "", rememberMeToken = "", sessionId = "") {
    super(baseUri, username, password, rememberMeToken, sessionId);
  }
  async APILogin() {
    const loginResult = await super.APILogin();
    if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
      this.rememberMeToken = loginResult.rememberMeToken;
      this.sessionId = loginResult.sessionID;
      this.ADSModule.sessionId = this.sessionId;
      this.ADSModule.rememberMeToken = this.rememberMeToken;
    }
    return loginResult;
  }
  async InstanceLogin(instance_id, module) {
    const data = {
      username: this.username,
      password: this.password,
      token: "",
      rememberMe: true
    };
    const loginResult = await this.apiCall("ADSModule/Servers/" + instance_id + "/API/Core/Login", data);
    if (loginResult.success === true) {
      const newBaseUri = this.baseUri + "API/ADSModule/Servers/" + instance_id;
      const rememberMeToken = loginResult.rememberMeToken;
      const sessionId = loginResult.sessionID;
      let newInstance;
      switch (module) {
        case "ADS":
          newInstance = new ADS(newBaseUri, this.username, "", rememberMeToken, sessionId);
          break;
        case "GenericModule":
          newInstance = new GenericModule(newBaseUri, this.username, "", rememberMeToken, sessionId);
          break;
        case "Minecraft":
          newInstance = new Minecraft(newBaseUri, this.username, "", rememberMeToken, sessionId);
          break;
        default:
          newInstance = new CommonAPI(newBaseUri, this.username, "", rememberMeToken, sessionId);
          break;
      }
      await newInstance.APILogin();
      return newInstance;
    } else {
      return;
    }
  }
}

// lib/types.ts
var lookupState = function(state) {
  switch (state) {
    case State.Undefined:
      return "Undefined";
    case State.Stopped:
      return "Stopped";
    case State.PreStart:
      return "PreStart";
    case State.Configuring:
      return "Configuring";
    case State.Starting:
      return "Starting";
    case State.Ready:
      return "Ready";
    case State.Restarting:
      return "Restarting";
    case State.Stopping:
      return "Stopping";
    case State.PreparingForSleep:
      return "PreparingForSleep";
    case State.Sleeping:
      return "Sleeping";
    case State.Waiting:
      return "Waiting";
    case State.Installing:
      return "Installing";
    case State.Updating:
      return "Updating";
    case State.AwaitingUserInput:
      return "AwaitingUserInput";
    case State.Failed:
      return "Failed";
    case State.Suspended:
      return "Suspended";
    case State.Maintainence:
      return "Maintainence";
    case State.Indeterminate:
      return "Indeterminate";
    default:
      return "Unknown";
  }
};
var State;
(function(State2) {
  State2[State2["Undefined"] = -1] = "Undefined";
  State2[State2["Stopped"] = 0] = "Stopped";
  State2[State2["PreStart"] = 5] = "PreStart";
  State2[State2["Configuring"] = 7] = "Configuring";
  State2[State2["Starting"] = 10] = "Starting";
  State2[State2["Ready"] = 20] = "Ready";
  State2[State2["Restarting"] = 30] = "Restarting";
  State2[State2["Stopping"] = 40] = "Stopping";
  State2[State2["PreparingForSleep"] = 45] = "PreparingForSleep";
  State2[State2["Sleeping"] = 50] = "Sleeping";
  State2[State2["Waiting"] = 60] = "Waiting";
  State2[State2["Installing"] = 70] = "Installing";
  State2[State2["Updating"] = 75] = "Updating";
  State2[State2["AwaitingUserInput"] = 80] = "AwaitingUserInput";
  State2[State2["Failed"] = 100] = "Failed";
  State2[State2["Suspended"] = 200] = "Suspended";
  State2[State2["Maintainence"] = 250] = "Maintainence";
  State2[State2["Indeterminate"] = 999] = "Indeterminate";
})(State || (State = {}));

// index.ts
var ampapi_js_default = AMPAPI;
export {
  steamcmdplugin,
  lookupState,
  ampapi_js_default as default,
  State,
  RCONPlugin,
  MinecraftModule,
  Minecraft,
  LocalFileBackupPlugin,
  GenericModule,
  FileManagerPlugin,
  EmailSenderPlugin,
  Core,
  CommonAPI,
  AMPAPI,
  ADSModule,
  ADS
};
