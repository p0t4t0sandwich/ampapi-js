/**
 * @enum State
 * @author p0t4t0sandwich
 * @description Represents the state of an instance
 * @property {number} Undefined -> -1
 * @property {number} Stopped -> 0
 * @property {number} PreStart -> 5
 * @property {number} Configuring -> 7 The server is performing some first-time-start configuration.
 * @property {number} Starting -> 10
 * @property {number} Ready -> 20
 * @property {number} Restarting -> 30 Server is in the middle of stopping, but once shutdown has finished it will automatically restart.
 * @property {number} Stopping -> 40
 * @property {number} PreparingForSleep -> 45
 * @property {number} Sleeping -> 50 The application should be able to be resumed quickly if using this state. Otherwise use Stopped.
 * @property {number} Waiting -> 60 The application is waiting for some external service/application to respond/become available.
 * @property {number} Installing -> 70
 * @property {number} Updating -> 75
 * @property {number} AwaitingUserInput -> 80 Used during installation, means that some user input is required to complete setup (authentication etc).
 * @property {number} Failed -> 100 Something is preventing the application from starting, and the module will not try again without user action
 * @property {number} Suspended -> 200
 * @property {number} Maintainence -> 250
 * @property {number} Indeterminate -> 999 The state is unknown, or doesn't apply (for modules that don't start an external process)
 */
enum State {
    Undefined = -1,
    Stopped = 0,
    PreStart = 5,
    /**
     * The server is performing some first-time-start configuration.
     */
    Configuring = 7,
    Starting = 10,
    Ready = 20,
    /**
     * Server is in the middle of stopping, but once shutdown has finished it will automatically restart.
     */
    Restarting = 30,
    Stopping = 40,
    PreparingForSleep = 45,
    /**
     * The application should be able to be resumed quickly if using this state. Otherwise use Stopped.
     */
    Sleeping = 50,
    /**
     * The application is waiting for some external service/application to respond/become available.
     */
    Waiting = 60,
    Installing = 70,
    Updating = 75,
    /**
     * Used during installation, means that some user input is required to complete setup (authentication etc).
     */
    AwaitingUserInput = 80,
    /**
     * Something is preventing the application from starting, and the module will not try again without user action
     */
    Failed = 100,
    Suspended = 200,
    Maintainence = 250,
    /**
     * The state is unknown, or doesn't apply (for modules that don't start an external process)
     */
    Indeterminate = 999
}

export { State };
