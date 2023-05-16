import fetch from 'node-fetch-commonjs';

type ContentType = 'json' | 'text' | 'file';

export class ApiClient {
    private readonly rps: number;
    private lastRequestTime: number = 0;

    constructor(rps: number) {
        this.rps = rps;
    }

    public async fetch<T>(url: string, contentType: ContentType = 'text'): Promise<T> {
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        const minTimeBetweenRequests = 1000 / this.rps;

        if (timeSinceLastRequest < minTimeBetweenRequests) {
            const timeToWait = minTimeBetweenRequests - timeSinceLastRequest;
            await new Promise(resolve => setTimeout(resolve, timeToWait));
        }

        const response = await fetch(url);
        const returnedContentType = response.headers.get('Content-Type');

        this.lastRequestTime = Date.now();

        if (contentType === 'json' || returnedContentType?.includes('application/json')) {
            return response.json() as Promise<T>;
        } else if (contentType === 'text' || returnedContentType?.includes('text')) {
            return response.text() as never as Promise<T>;
        } else {
            return response as unknown as Promise<T>;
        }
    }
}
