/**
 * @author p0t4t0sandich
 * @description Response type for API.Core.GetStatus
 */

/**
 * @interface StatusMetric
 * @description Interface for a metric
 * @property {number} RawValue The raw value of the metric
 * @property {number} MaxValue The maximum value of the metric
 * @property {number} Percent The percentage of the metric
 * @property {string} Units The units of the metric
 * @property {string} Color The color of the metric
 * @property {string} Color2 The second color of the metric
 * @property {string} Color3 The third color of the metric
 */
interface StatusMetric {
    RawValue: number;
    MaxValue: number;
    Percent: number;
    Units: string;
    Color?: string;
    Color2?: string;
    Color3?: string;
}

/**
 * @interface GetStatusResult
 * @description Interface for the result of API.Core.GetStatus
 * @property {number} State The state of the instance
 * @property {string} Uptime The uptime of the instance
 * @property {{ [key: string]: StatusMetric }} Metrics The metrics of the instance
 */
interface GetStatusResult {
    State: number;
    Uptime: string;
    Metrics: { [key: string]: StatusMetric };
}

export { GetStatusResult, StatusMetric };
