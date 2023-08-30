/**
 * @interface RunningTask
 * @author p0t4t0sandwich
 * @description A running task object
 * @link lib/apimodules/Core#GetTasks()
 */
interface RunningTask {
    IsPrimaryTask: boolean;
    StartTime: string;
    Id: string;
    Name: string;
    Description: string;
    HideFromUI: boolean;
    FastDismiss: boolean;
    LastUpdatePushed: string;
    ProgressPercent: number;
    IsCancellable: boolean;
    Origin: string;
    IsIndeterminate: boolean;
    State: number;
    Status: boolean;
}

export { RunningTask };
