import readline from 'node:readline';

export class TerminalLoader {
    private processInfo: string;
    private startInfo: string;
    private finishInfo: string;
    private error: string;

    constructor({
        startInfo,
        finishInfo,
        processInfo,
        error,
    }: {
        startInfo: string;
        finishInfo: string;
        processInfo: string;
        error: string;
    }) {
        this.startInfo = startInfo;
        this.processInfo = processInfo;
        this.finishInfo = finishInfo;
        this.error = error;
    }

    public reinit({
        startInfo,
        finishInfo,
        processInfo,
        error,
    }: {
        startInfo: string;
        finishInfo: string;
        processInfo: string;
        error?: string;
    }) {
        this.startInfo = startInfo;
        this.processInfo = processInfo;
        this.finishInfo = finishInfo;
        if (error) this.error = error;
    }

    private start = () => {
        console.info(this.startInfo);
        console.info(this.processInfo + '...');
    };

    private finish = () => {
        readline.moveCursor(process.stdout, 0, -1);
        readline.clearLine(process.stdout, 0);
        console.info('\u001B[32m%s\u001B[0m', this.finishInfo);
        readline.moveCursor(process.stdout, 0, 1);
    };

    public processing = async <T>(promise: () => Promise<T>) => {
        try {
            this.start();
            const result = await promise();
            this.finish();

            return result;
        } catch (err) {
            throw new Error(this.error);
        }
    };
}
