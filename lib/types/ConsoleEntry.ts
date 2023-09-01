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

export { ConsoleEntry };
