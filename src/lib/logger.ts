export function log(message: string): void {
	const stack = new Error().stack;
	const callerFrame = stack?.split('\n')[2] ?? '';

	const match =
		callerFrame.match(/at (\S+) \(.*:(\d+):\d+\)/) ?? callerFrame.match(/at (.*):(\d+):\d+/);

	const fnName = match?.[1] ?? 'anonymous';
	const line = match?.[2] ?? '?';
	const time = new Date().toISOString();

	console.log(`[${time}] [${fnName}:${line}] ${message}`);
}
