/**
 * @interface ActionResult
 * @author p0t4t0sandwich
 * @description Generic response type for calls that return a result and a reason for failure
 * @property {boolean} Status - true if successful, false if not
 * @property {string} Reason - reason for failure
 * @property {T} Result - result of the call
 */
interface ActionResult<T> {
    Status: boolean;
    Reason: string;
    Result: T;
}

export { ActionResult };
