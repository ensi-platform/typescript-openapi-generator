import readline from 'node:readline';

export class TerminalLoader {
    private processInfo: string;
    private startInfo: string;
    private finishInfo: string;

    constructor({
        startInfo,
        finishInfo,
        processInfo,
    }: {
        startInfo: string;
        finishInfo: string;
        processInfo: string;
    }) {
        this.startInfo = startInfo;
        this.processInfo = processInfo;
        this.finishInfo = finishInfo;
    }

    public reinit({
        startInfo,
        finishInfo,
        processInfo,
    }: {
        startInfo: string;
        finishInfo: string;
        processInfo: string;
    }) {
        this.startInfo = startInfo;
        this.processInfo = processInfo;
        this.finishInfo = finishInfo;
    }

    private start = () => {
        console.info(this.startInfo);
        console.info(this.processInfo + '...');
    };

    private finish = () => {
        readline.moveCursor(process.stdout, 0, -1);
        readline.clearLine(process.stdout, 0);
        console.log('\u001B[32m%s\u001B[0m', this.finishInfo);
        readline.moveCursor(process.stdout, 0, 1);
    };

    public processing = async <T>(promise: () => Promise<T>) => {
        this.start();
        const result = await promise();
        this.finish();

        return result;
    };
}
