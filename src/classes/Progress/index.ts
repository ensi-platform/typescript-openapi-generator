import cliProgress from 'cli-progress';
import readline from 'node:readline';

const getProgressInitData = (name: string) => ({
    format: `${name} {bar} {percentage}%`,
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
});

export class Progress {
    private percent = 0;
    private progress: cliProgress.SingleBar;
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
        this.progress = new cliProgress.SingleBar(getProgressInitData(processInfo));
        this.startInfo = startInfo;
        this.finishInfo = finishInfo;
    }

    public reinit(name: string) {
        this.progress = new cliProgress.SingleBar(getProgressInitData(name));
    }

    private start = () => {
        console.info(this.startInfo);
        this.progress.start(100, this.percent, {
            speed: 'N/A',
        });
    };

    private finish = () => {
        this.update(100, 100);
        this.progress.stop();

        readline.moveCursor(process.stdout, 0, -1);
        readline.clearLine(process.stdout, 0);
        console.log('\u001B[32m%s\u001B[0m', this.finishInfo);
        readline.moveCursor(process.stdout, 0, 1);
    };

    public update = (currentCount: number, totalCount: number) => {
        const downloadPercent = Math.ceil((currentCount * 100) / totalCount);
        if (downloadPercent > this.percent) {
            this.percent = downloadPercent;
            this.progress.update(this.percent);
        }
    };

    public processing = async (promise: Promise<void>) => {
        this.start();
        await promise;
        this.finish();
    };
}
