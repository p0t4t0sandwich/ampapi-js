/**
 * @interface ModuleInfo
 * @author p0t4t0sandwich
 * @description An interface to represent the object returned by the ADSModule#GetModuleInfo() method.
 * @property {string} Name - The name of the module
 * @property {string} Author - The author of the module
 * @property {string} AppName - The app name
 * @property {boolean} SupportsSleep - Whether the module supports sleep
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
 * @property {string} InstanceId - The instance ID
 * @property {string} InstanceName - The instance name
 * @property {string} FriendlyName - The friendly name
 * @property {string} EndpointURI - The endpoint URI
 * @property {string} PrimaryEndpoint - The primary endpoint
 * @property {string} ModuleName - The module name
 * @property {boolean} IsRemoteInstance - Whether the instance is remote
 * @property {string} DisplayBaseURI - The display base URI
 * @property {boolean} RequiresFullLoad - Whether a full load is required
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
 * @interface Branding
 * @author p0t4t0sandwich
 * @description An interface to represent the Branding object as part of the ModuleInfo object.
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

export { ModuleInfo, Branding };
