import { Status, UUID } from "../../types";


/**
 * @interface Metrics
 * @author p0t4t0sandwich
 * @description Metrics information from the websocket connection
 * @property {UUID} Id - The UUID of the message
 * @property {boolean} Expired - Whether the message has expired
 * @property {string} Source - The source of the message
 * @property {string} Message - The message
 * @property {Status} Parameters - The parameters of the message
 * @property {number} AgeMinutes - The age of the message in minutes
 */
interface Metrics {
    Id: UUID;
    Expired: boolean;
    Source: string;
    Message: string;
    Parameters: Status;
    AgeMinutes: number;
}

export { Metrics };
