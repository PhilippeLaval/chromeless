import { Chrome, Command, ChromelessOptions } from '../types';
export default class LocalChrome implements Chrome {
    private options;
    private runtimeClientPromise;
    private chromeInstance?;
    constructor(options?: ChromelessOptions);
    private initRuntimeClient;
    private startChrome;
    private connectToChrome;
    private setViewport;
    process<T extends any>(command: Command): Promise<T>;
    close(): Promise<void>;
}
