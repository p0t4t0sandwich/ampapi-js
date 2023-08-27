import { UUID } from "crypto";
import { AMPVersion } from "./AMPVersion.js";
import { State } from "./State.js";
import { Metric } from "./Metric.js";
import { EndpointInfo } from "./EndpointInfo.js";


/**
 * @interface Instance
 * @author p0t4t0sandwich
 * @description An instance object
 * @property {UUID} InstanceID - The instance ID
 * @property {UUID} TargetID - The target ID
 * @property {string} InstanceName - The instance name
 * @property {string} FriendlyName - The friendly name
 * @property {string} Module - The module
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
    Module: string;
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
    Metrics: { [key: string]: Metric };
    ApplicationEndpoints: EndpointInfo[];
    DeploymentArgs: { [key: string]: string };
    DisplayImageSource: string;
}

export { Instance };
