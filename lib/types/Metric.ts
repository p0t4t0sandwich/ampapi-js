/**
 * @interface Metric
 * @description Interface for a metric
 * @author p0t4t0sandich
 * @property {number} RawValue The raw value of the metric
 * @property {number} MaxValue The maximum value of the metric
 * @property {number} Percent The percentage of the metric
 * @property {string} Units The units of the metric
 * @property {string} Color The color of the metric
 * @property {string} Color2 The second color of the metric
 * @property {string} Color3 The third color of the metric
 */
interface Metric {
    RawValue: number;
    MaxValue: number;
    Percent: number;
    Units: string;
    Color?: string;
    Color2?: string;
    Color3?: string;
}

export { Metric };
