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
    OS: string;
    PlatformName: string;
    SystemType: number;
    Virtualization: number;
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

export { PlatformInfo, CPUInfo };
