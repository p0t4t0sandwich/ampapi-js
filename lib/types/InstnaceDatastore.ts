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

export { InstanceDatastore };
