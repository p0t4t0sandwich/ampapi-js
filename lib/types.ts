/**
 * @interface ActionResult
 * @author p0t4t0sandwich
 * @description Generic response type for calls that return a result and a reason for failure
 * @property {boolean} Status - true if successful, false if not
 * @property {string} Reason - reason for failure
 * @property {T} Result - result of the call if successful
 */
interface ActionResult<T> {
    Status: boolean;
    Reason: string;
    Result: T;
}

/**
 * @interface AMPVersion
 * @author p0t4t0sandwich
 * @description AMP version information
 * @property {number} Major - The major version number
 * @property {number} Minor - The minor version number
 * @property {number} Build - The build number
 * @property {number} Revision - The revision number
 * @property {number} MajorRevision - The major revision number
 * @property {number} MinorRevision - The minor revision number
 */
interface AMPVersion {
    Major: number;
    Minor: number;
    Build: number;
    Revision: number;
    MajorRevision: number;
    MinorRevision: number;
}

/**
 * @interface Branding
 * @author p0t4t0sandwich
 * @description Defines the Branding object as part of the ModuleInfo object.
 * @property {boolean} DisplayBranding - Whether to display branding
 * @property {string} PageTitle - The page title
 * @property {string} CompanyName - The company name
 * @property {string} WelcomeMessage - The welcome message
 * @property {string} BrandingMessage - The branding message
 * @property {string} ShortBrandingMessage - The short branding message
 * @property {string} URL - The URL
 * @property {string} SupportURL - The support URL
 * @property {string} SupportText - The support text
 * @property {string} SubmitTicketURL - The submit ticket URL
 * @property {string} LogoURL - The logo URL
 * @property {string} BackgroundURL - The background URL
 * @property {string} SplashFrameURL - The splash frame URL
 * @property {string} ForgotPasswordURL - The forgot password URL
 */
interface Branding {
    DisplayBranding: boolean;
    PageTitle: string;
    CompanyName: string;
    WelcomeMessage: string;
    BrandingMessage: string;
    ShortBrandingMessage: string;
    URL: string;
    SupportURL: string;
    SupportText: string;
    SubmitTicketURL: string;
    LogoURL: string;
    BackgroundURL: string;
    SplashFrameURL: string;
    ForgotPasswordURL: string;
}

/**
 * @interface ConsoleEntry
 * @author p0t4t0sandwich
 * @description Interface for the result of API.Core#GetUpdates.ConsoleEntries
 * @property {string} Timestamp - The timestamp of the console entry
 * @property {string} Source - The source of the console entry
 * @property {string} SourceId - The source ID of the console entry
 * @property {string} Type - The type of the console entry
 * @property {string} Contents - The contents of the console entry
 */
interface ConsoleEntry {
    Timestamp: string;
    Source: string;
    SourceId: string;
    Type: string;
    Contents: string;
}

/**
 * @interface CPUInfo
 * @author p0t4t0sandwich
 * @description CPU information object
 * @property {number} Sockets - Number of CPU sockets
 * @property {number} Cores - Number of CPU cores
 * @property {number} Threads - Number of CPU threads
 * @property {string} Vendor - CPU vendor
 * @property {string} ModelName - CPU model name
 * @property {number} TotalCores - Total number of CPU cores
 * @property {number} TotalThreads - Total number of CPU threads
 */
interface CPUInfo {
    Sockets: number;
    Cores: number;
    Threads: number;
    Vendor: string;
    ModelName: string;
    TotalCores: number;
    TotalThreads: number;
}

/**
 * @interface EndpointInfo
 * @author p0t4t0sandwich
 * @description An application endpoint object
 * @property {string} DisplayName - The display name of the endpoint
 * @property {string} Endpoint - The endpoint address
 * @property {string} Uri - The URI of the endpoint
 */
interface EndpointInfo {
    DisplayName: string;
    Endpoint: string;
    Uri: string;
}

/**
 * @interface IADSInstance
 * @author p0t4t0sandwich
 * @description An ADS instance object
 * @property {number} Id - The ADS instance ID
 * @property {UUID} InstanceId - The instance ID
 * @property {string} FriendlyName - The friendly name
 * @property {string} Description - The description
 * @property {boolean} Disabled - Whether the instance is disabled
 * @property {boolean} isRemote - Whether the instance is remote
 * @property {PlatformInfo} Platform - Platform information object
 * @property {InstanceDatastore[]} Datastores - The datastores
 * @property {boolean} CreatesInContainers - Whether the instance creates in containers
 * @property {State} State - The state
 * @property {string} StateReason - The state reason
 * @property {boolean} CanCreate - Whether the instance can create
 * @property {string} LastUpdated - The last updated
 * @property {Instance[]} AvailableInstances - The available instances
 * @property {string[]} AvailableIPs - The available IPs
 * @property {string} URL - The URL
 * @property {string[]} Tags - The tags
 * @property {string[]} TagsNames - The tag names
 */
interface IADSInstance {
    Id: number;
    InstanceId: UUID;
    FriendlyName: string;
    Description: string;
    Disabled: boolean;
    isRemote: boolean;
    Platform: PlatformInfo;
    Datastores: InstanceDatastore[];
    CreatesInContainers: boolean;
    State: State;
    StateReason: string;
    CanCreate: boolean;
    LastUpdated: string;
    AvailableInstances: Instance[];
    AvailableIPs: string[];
    URL: string;
    Tags: string[];
    TagsNames: string[];
}

/**
 * @interface Instance
 * @author p0t4t0sandwich
 * @description An instance object
 * @property {UUID} InstanceID - The instance ID
 * @property {UUID} TargetID - The target ID
 * @property {string} InstanceName - The instance name
 * @property {string} FriendlyName - The friendly name
 * @property {string} Description - The description
 * @property {string} Module - The module
 * @property {string} ModuleDisplayName - The module display name
 * @property {AMPVersion} AMPVersion - The AMP version
 * @property {boolean} IsHTTPS - Whether HTTPS is enabled
 * @property {string} IP - The IP address
 * @property {number} Port - The port
 * @property {boolean} Daemon - Whether the instance is a daemon
 * @property {boolean} DaemonAutostart - Whether the daemon autostarts
 * @property {boolean} ExcludeFromFirewall - Whether the instance is excluded from the firewall
 * @property {boolean} Running - Whether the instance is running
 * @property {State} AppState - The application state
 * @property {string[]} Tags - The tags
 * @property {number} DiskUsageMB - The disk usage in MB
 * @property {number} ReleaseStream - The release stream
 * @property {number} ManagementMode - The management mode
 * @property {boolean} Suspended - Whether the instance is suspended
 * @property {boolean} IsContainerInstance - Whether the instance is a container instance
 * @property {number} ContainerMemoryMB - The container memory in MB
 * @property {number} ContainerMemoryPolicy - The container memory policy
 * @property {number} ContainerCPUs - The container CPUs
 * @property {string} SpecificDockerImage - The specific docker image
 * @property {{ [key: string]: Metric }} Metrics - The metrics
 * @property {EndpointInfo[]} ApplicationEndpoints - The application endpoints
 * @property {{ [key: string]: string }} DeploymentArgs - The deployment arguments
 * @property {string} DisplayImageSource - The display image source
 */
interface Instance {
    InstanceID: UUID;
    TargetID: UUID;
    InstanceName: string;
    FriendlyName: string;
    Description: string;
    Module: string;
    ModuleDisplayName: string;
    AMPVersion: AMPVersion;
    IsHTTPS: boolean;
    IP: string;
    Port: number;
    Daemon: boolean;
    DaemonAutostart: boolean;
    ExcludeFromFirewall: boolean;
    Running: boolean;
    AppState: State;
    Tags: string[];
    DiskUsageMB: number;
    ReleaseStream: number;
    ManagementMode: number;
    Suspended: boolean;
    IsContainerInstance: boolean;
    ContainerMemoryMB: number;
    ContainerMemoryPolicy: number;
    ContainerCPUs: number;
    SpecificDockerImage: string;
    Metrics: { [key: string]: Metric };
    ApplicationEndpoints: EndpointInfo[];
    DeploymentArgs: { [key: string]: string };
    DisplayImageSource: string;
}

/**
 * @interface InstanceDatastore
 * @author p0t4t0sandwich
 * @description A datastore object
 * @property {number} Id - The datastore ID
 * @property {string} FriendlyName - The friendly name
 */
interface InstanceDatastore {
    Id: number;
    FriendlyName: string;
}

/**
 * @interface LicenceInfo
 * @description Interface for the result of API.Core.ActivateAMPLicence
 * @link lib/apimodules/Core#ActivateAMPLicence
 * @property {UUID} LicenceKey - The licence key
 * @property {UUID} Grade - The grade
 * @property {string} GradeName - The grade name
 * @property {UUID} Product - The product
 * @property {string} ProductName - The product name
 * @property {string} Expires - The expiry date
 * @property {number} Usage - The usage
 */
interface LicenceInfo {
    LicenceKey: UUID;
    Grade: UUID;
    GradeName: string;
    Product: UUID;
    ProductName: string;
    Expires: string;
    Usage: number;
}

/**
 * @interface LoginResult
 * @description Interface for the result of API.Core.Login
 * @author p0t4t0sandich
 * @property {boolean} success Whether the login was successful
 * @property {string[]} permissions The permissions of the user
 * @property {string} sessionID The session ID of the user
 * @property {string} rememberMeToken The remember me token of the user
 * @property {UserInfo} userInfo The user info of the user
 * @property {string} resultReason The reason for the result
 * @property {number} result The result of the login
 */
interface LoginResult {
    success: boolean;
    permissions: string[];
    sessionID: string;
    rememberMeToken: string;
    userInfo: UserInfo;
    resultReason: string;
    result: number;
}

/**
 * @interface Message
 * @author p0t4t0sandwich
 * @description Message type for API.Core.GetUpdatesResult status messages
 * @see Updates
 * @link lib/apimodules/Core#GetUpdates
 * @property {UUID} Id - The ID of the message
 * @property {boolean} Expired - Whether the message has expired
 * @property {string} Source - The source of the message
 * @property {string} Message - The message
 * @property {number} AgeMinutes - The age of the message in minutes
 */
interface Message {
    Id: UUID;
    Expired: boolean;
    Source: string;
    Message: string;
    AgeMinutes: number;
}

/**
 * @interface Metric
 * @description Interface for a metric
 * @author p0t4t0sandich
 * @property {number} RawValue The raw value of the metric
 * @property {number} MaxValue The maximum value of the metric
 * @property {number} Percent The percentage of the metric
 * @property {string} Units The units of the metric
 * @property {string} Color The color of the metric
 * @property {string} Color2 The second color of the metric
 * @property {string} Color3 The third color of the metric
 */
interface Metric {
    RawValue: number;
    MaxValue: number;
    Percent: number;
    Units: string;
    Color?: string;
    Color2?: string;
    Color3?: string;
}

/**
 * @interface ModuleInfo
 * @author p0t4t0sandwich
 * @description An interface to represent the object returned by the ADSModule#GetModuleInfo() method
 * @property {string} Name - The name of the module
 * @property {string} Author - The author of the module
 * @property {string} AppName - The app name
 * @property {boolean} SupportsSleep - Whether the module supports sleep mode
 * @property {string[]} LoadedPlugins - The loaded plugins
 * @property {string} AMPVersion - The AMP version
 * @property {string} AMPBuild - The AMP build
 * @property {string} ToolsVersion - The tools version
 * @property {string} APIVersion - The API version
 * @property {string} VersionCodename - The version codename
 * @property {string} Timestamp - The timestamp
 * @property {string} BuildSpec - The build spec
 * @property {Branding} Branding - The branding object
 * @property {boolean} Analytics - Whether analytics are enabled
 * @property {string[]} FeatureSet - The feature set
 * @property {UUID} InstanceId - The instance ID
 * @property {string} InstanceName - The instance name
 * @property {string} FriendlyName - The friendly name
 * @property {string} EndpointURI - The endpoint URI
 * @property {string} PrimaryEndpoint - The primary endpoint
 * @property {string} ModuleName - The module name
 * @property {boolean} IsRemoteInstance - Whether the instance is remote
 * @property {string} DisplayBaseURI - The display base URI
 * @property {boolean} RequiresFullLoad - Whether the module requires a full load
 * @property {boolean} AllowRememberMe - Whether remember me is allowed
 */
interface ModuleInfo {
    Name: string;
    Author: string;
    AppName: string;
    SupportsSleep: boolean;
    LoadedPlugins: string[];
    AMPVersion: string;
    AMPBuild: string;
    ToolsVersion: string;
    APIVersion: string;
    VersionCodename: string;
    Timestamp: string;
    BuildSpec: string;
    Branding: Branding;
    Analytics: boolean;
    FeatureSet: string[];
    InstanceId: string;
    InstanceName: string;
    FriendlyName: string;
    EndpointURI: string;
    PrimaryEndpoint: string;
    ModuleName: string;
    IsRemoteInstance: boolean;
    DisplayBaseURI: string;
    RequiresFullLoad: boolean;
    AllowRememberMe: boolean;
}

/**
 * @interface PlatformInfo
 * @author p0t4t0sandwich
 * @description PlatformInfo information object
 * @property {CPUInfo} CPUInfo - CPU information object
 * @property {number} InstalledRAMMB - Installed RAM in MB
 * @property {string} OS - The OS
 * @property {string} PlatformName - The platform name
 * @property {number} SystemType - The system type
 * @property {number} Virtualization - The virtualization
 */
interface PlatformInfo {
    CPUInfo: CPUInfo;
    InstalledRAMMB: number;
    OS: number;
    PlatformName: string;
    SystemType: number;
    Virtualization: number;
}

/**
 * @interface RemoteTargetInfo
 * @author p0t4t0sandwich
 * @description An interface to represent the object returned by the ADSModule#GetTargetInfo() method
 * @property {string[]} IPAddressList - The IP address list
 * @property {PlatformInfo} PlatformInfo - PlatformInfo information object
 * @property {InstanceDatastore[]} Datastores - The datastores
 * @property {boolean} DeploysInContainers - Whether the instance deploys in containers
 */
interface RemoteTargetInfo {
    IPAddressList: string[];
    PlatformInfo: PlatformInfo;
    Datastores: InstanceDatastore[];
    DeploysInContainers: boolean;
}

/**
 * @interface RunningTask
 * @author p0t4t0sandwich
 * @description A running task object
 * @link lib/apimodules/Core#GetTasks()
 * @property {boolean} IsPrimaryTask - Whether the task is the primary task
 * @property {string} StartTime - The start time
 * @property {UUID} Id - The ID
 * @property {string} Name - The name
 * @property {string} Description - The description
 * @property {boolean} HideFromUI - Whether the task is hidden from the UI
 * @property {boolean} FastDismiss - Whether the task can be dismissed quickly
 * @property {string} LastUpdatePushed - The last update pushed
 * @property {number} ProgressPercent - The progress percentage
 * @property {boolean} IsCancellable - Whether the task is cancellable
 * @property {string} Origin - The origin
 * @property {boolean} IsIndeterminate - Whether the task is indeterminate
 * @property {number} State - The state
 * @property {boolean} Status - The status
 */
interface RunningTask {
    IsPrimaryTask: boolean;
    StartTime: string;
    Id: UUID;
    Name: string;
    Description: string;
    HideFromUI: boolean;
    FastDismiss: boolean;
    LastUpdatePushed: string;
    ProgressPercent: number;
    IsCancellable: boolean;
    Origin: string;
    IsIndeterminate: boolean;
    State: number;
    Status: boolean;
}

/**
 * @interface SettingSpec
 * @author p0t4t0sandwich
 * @description A setting specification object
 * @property {boolean} ReadOnly - Whether the setting is read-only
 * @property {string} Name - The name
 * @property {string} Description - The description
 * @property {string} Category - The category
 * @property {any} CurrentValue - The current value
 * @property {string} ValType - The value type
 * @property {any} EnumValues - The enum values
 * @property {boolean} EnumValuesAreDeferred - Whether the enum values are deferred
 * @property {string} Node - The node
 * @property {string} InputType - The input type
 * @property {any} SelectionSource - The selection source
 * @property {boolean} IsProvisionSpec - Whether the setting is a provision spec
 * @property {boolean} ReadOnlyProvision - Whether the provision is read-only
 * @property {any[]} Actions - The actions
 * @property {any} Keywords - The keywords
 * @property {boolean} AlwaysAllowRead - Whether the setting is always allowed to be read
 * @property {string} Tag - The tag
 * @property {number} MaxLength - The max length
 * @property {string} Placeholder - The placeholder
 * @property {string} Suffix - The suffix
 * @property {string} Meta - The meta
 * @property {boolean} RequiresRestart - Whether the setting requires a restart
 */
interface Spec {
    ReadOnly: boolean;
    Name: string;
    Description: string;
    Category: string;
    CurrentValue: any;
    ValType: string;
    EnumValues: any;
    EnumValuesAreDeferred: boolean;
    Node: string;
    InputType: string;
    SelectionSource: any;
    IsProvisionSpec: boolean;
    ReadOnlyProvision: boolean;
    Actions: any[];
    Keywords: any;
    AlwaysAllowRead: boolean;
    Tag: string;
    MaxLength: number;
    Placeholder: string;
    Suffix: string;
    Meta: string;
    RequiresRestart: boolean;
}

/**
 * @enum State
 * @author p0t4t0sandwich
 * @description Represents the state of an instance
 * @property {number} Undefined -> -1
 * @property {number} Stopped -> 0
 * @property {number} PreStart -> 5
 * @property {number} Configuring -> 7 The server is performing some first-time-start configuration.
 * @property {number} Starting -> 10
 * @property {number} Ready -> 20
 * @property {number} Restarting -> 30 Server is in the middle of stopping, but once shutdown has finished it will automatically restart.
 * @property {number} Stopping -> 40
 * @property {number} PreparingForSleep -> 45
 * @property {number} Sleeping -> 50 The application should be able to be resumed quickly if using this state. Otherwise use Stopped.
 * @property {number} Waiting -> 60 The application is waiting for some external service/application to respond/become available.
 * @property {number} Installing -> 70
 * @property {number} Updating -> 75
 * @property {number} AwaitingUserInput -> 80 Used during installation, means that some user input is required to complete setup (authentication etc).
 * @property {number} Failed -> 100 Something is preventing the application from starting, and the module will not try again without user action
 * @property {number} Suspended -> 200
 * @property {number} Maintainence -> 250
 * @property {number} Indeterminate -> 999 The state is unknown, or doesn't apply (for modules that don't start an external process)
 */
enum State {
    Undefined = -1,
    Stopped = 0,
    PreStart = 5,
    /**
     * The server is performing some first-time-start configuration.
     */
    Configuring = 7,
    Starting = 10,
    Ready = 20,
    /**
     * Server is in the middle of stopping, but once shutdown has finished it will automatically restart.
     */
    Restarting = 30,
    Stopping = 40,
    PreparingForSleep = 45,
    /**
     * The application should be able to be resumed quickly if using this state. Otherwise use Stopped.
     */
    Sleeping = 50,
    /**
     * The application is waiting for some external service/application to respond/become available.
     */
    Waiting = 60,
    Installing = 70,
    Updating = 75,
    /**
     * Used during installation, means that some user input is required to complete setup (authentication etc).
     */
    AwaitingUserInput = 80,
    /**
     * Something is preventing the application from starting, and the module will not try again without user action
     */
    Failed = 100,
    Suspended = 200,
    Maintainence = 250,
    /**
     * The state is unknown, or doesn't apply (for modules that don't start an external process)
     */
    Indeterminate = 999
}

function lookupState(state: number): string {
    switch (state) {
        case State.Undefined:
            return 'Undefined';
        case State.Stopped:
            return 'Stopped';
        case State.PreStart:
            return 'PreStart';
        case State.Configuring:
            return 'Configuring';
        case State.Starting:
            return 'Starting';
        case State.Ready:
            return 'Ready';
        case State.Restarting:
            return 'Restarting';
        case State.Stopping:
            return 'Stopping';
        case State.PreparingForSleep:
            return 'PreparingForSleep';
        case State.Sleeping:
            return 'Sleeping';
        case State.Waiting:
            return 'Waiting';
        case State.Installing:
            return 'Installing';
        case State.Updating:
            return 'Updating';
        case State.AwaitingUserInput:
            return 'AwaitingUserInput';
        case State.Failed:
            return 'Failed';
        case State.Suspended:
            return 'Suspended';
        case State.Maintainence:
            return 'Maintainence';
        case State.Indeterminate:
            return 'Indeterminate';
        default:
            return 'Unknown';
    }
}

/**
 * @interface Status
 * @description Interface for the result of API.Core.GetStatus
 * @author p0t4t0sandich
 * @property {number} State The state of the instance
 * @property {string} Uptime The uptime of the instance
 * @property {{ [key: string]: Metric }} Metrics The {@link Metric metrics} of the instance
 */
interface Status {
    State: number;
    Uptime: string;
    Metrics: { [key: string]: Metric };
}

/**
 * @interface UpdateInfo
 * @author p0t4t0sandwich
 * @description An interface to represent the object returned by the ADSModule#GetUpdateInfo() method
 * @link lib/apimodules/Core#GetUpdateInfo()
 * @property {boolean} UpdateAvailable - Whether an update is available
 * @property {string} Version - The version of the update
 * @property {string} Build - The build of the update
 * @property {string} ReleaseNotesURL - The URL to the release notes
 * @property {string} ToolsVersion - The version of the tools
 * @property {boolean} PatchOnly - Whether the update is a patch
 */
interface UpdateInfo {
    UpdateAvailable: boolean;
    Version: string;
    Build: string;
    ReleaseNotesURL: string;
    ToolsVersion: string;
    PatchOnly: boolean;
}

/**
 * @interface Updates
 * @author p0t4t0sandwich
 * @description Response type for API.Core.GetUpdates
 * @link lib/apimodules/Core#GetUpdates
 * @property {Status} Status - The status of the server
 * @property {ConsoleEntry[]} ConsoleEntries - The console entries of the server
 * @property {Message[]} Messages - The messages of the server
 * @property {string[]} Tasks - The tasks of the server
 * @property {string[]} Ports - The ports of the server
 */
interface Updates {
    Status: Status;
    ConsoleEntries: ConsoleEntry[];
    Messages: Message[];
    Tasks: string[];
    Ports: string[];
}

/**
 * @interface UserInfo
 * @description Interface for the user info
 * @author p0t4t0sandich
 * @property {UUID} ID The ID of the user
 * @property {string} Username The username of the user
 * @property {string} EmailAddress The email address of the user
 * @property {boolean} IsTwoFactorEnabled Whether two factor authentication is enabled for the user
 * @property {boolean} Disabled Whether the user is disabled
 * @property {string} LastLogin The last login of the user
 * @property {string} GravatarHash The gravatar hash of the user
 * @property {boolean} IsLDAPUser Whether the user is an LDAP user
 */
interface UserInfo {
    ID: UUID;
    Username: string;
    EmailAddress: string;
    IsTwoFactorEnabled: boolean;
    Disabled: boolean;
    LastLogin: string;
    GravatarHash: string;
    IsLDAPUser: boolean;
}

/**
 * @type URL
 * @description A URL is a string that represents a URL
 * @author p0t4t0sandich
 */
type URL = string;

/**
 * @type UUID
 * @description A UUID is a string that represents a unique identifier
 * @author p0t4t0sandich
 */
type UUID = "${string}-${string}-${string}-${string}-${string}";

export {
    ActionResult,
    AMPVersion,
    Branding,
    ConsoleEntry,
    CPUInfo,
    EndpointInfo,
    IADSInstance,
    Instance,
    InstanceDatastore,
    LicenceInfo,
    LoginResult,
    Message,
    Metric,
    ModuleInfo,
    PlatformInfo,
    RemoteTargetInfo,
    RunningTask,
    SettingSpec,
    State, lookupState,
    Status,
    UpdateInfo,
    Updates,
    UserInfo,
    URL,
    UUID
};
