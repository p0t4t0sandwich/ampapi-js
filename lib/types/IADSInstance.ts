import { UUID } from "crypto";
import { PlatformInfo } from "./PlatformInfo.js";
import { InstanceDatastore } from "./InstnaceDatastore.js";
import { State } from "./State.js";
import { Instance } from "./Instance.js";

/**
 * @interface IADSInstance
 * @author p0t4t0sandwich
 * @description An ADS instance object
 * @property {number} Id - The ADS instance ID
 * @property {UUID} InstanceId - The instance ID
 * @property {string} FriendlyName - The friendly name
 * @property {boolean} Disabled - Whether the instance is disabled
 * @property {boolean} isRemote - Whether the instance is remote
 * @property {PlatformInfo} PlatformInfo - PlatformInfo information object
 * @property {InstanceDatastore[]} Datastores - The datastores
 * @property {boolean} CreatesInContainers - Whether the instance creates in containers
 * @property {State} State - The state
 * @property {string} StateReason - The state reason
 * @property {boolean} CanCreate - Whether the instance can create
 * @property {string} LastUpdated - The last updated
 * @property {Instance[]} AvailableInstances - The available instances
 * @property {string[]} AvailableIPs - The available IPs
 */
interface IADSInstance {
    Id: number;
    InstanceId: UUID;
    FriendlyName: string;
    Disabled: boolean;
    isRemote: boolean;
    PlatformInfo: PlatformInfo;
    Datastores: InstanceDatastore[];
    CreatesInContainers: boolean;
    State: State;
    StateReason: string;
    CanCreate: boolean;
    LastUpdated: string;
    AvailableInstances: Instance[];
    AvailableIPs: string[];
}

export { IADSInstance };
