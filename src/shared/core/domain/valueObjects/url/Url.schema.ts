export function validateUrl(value: string): void {
	try {
		new URL(value);
	} catch {
		throw new Error("Url must be a valid Url.");
	}
}
