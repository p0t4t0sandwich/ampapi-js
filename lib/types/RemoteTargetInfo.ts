import { InstanceDatastore } from "./InstnaceDatastore.js";
import { PlatformInfo } from "./PlatformInfo.js";


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

export { RemoteTargetInfo };
