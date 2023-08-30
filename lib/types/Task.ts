/**
 * @interface Task
 * @author p0t4t0sandwich
 * @description Generic response type for calls that return a result
 * @property {T} result - The result of the call
 */
interface Task<T> {
    result: T;
}

export { Task };
