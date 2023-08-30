import { Metric } from "./Metric.js";


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

export { Status };
