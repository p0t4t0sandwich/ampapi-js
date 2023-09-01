import { ConsoleEntry } from "./ConsoleEntry.js";
import { Status } from "./Status.js";


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
 * @interface Message
 * @author p0t4t0sandwich
 * @description Message type for API.Core.GetUpdatesResult status messages
 * @see Updates
 * @link lib/apimodules/Core#GetUpdates
 * @property {string} Id - The ID of the message
 * @property {boolean} Expired - Whether the message has expired
 * @property {string} Source - The source of the message
 * @property {string} Message - The message
 * @property {number} AgeMinutes - The age of the message in minutes
 */
interface Message {
    Id: string;
    Expired: boolean;
    Source: string;
    Message: string;
    AgeMinutes: number;
}

export { Updates, Message };
