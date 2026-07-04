export function validateTitle(value: string): void {
	if (value.length < 1) {
		throw new Error("Title must be at least 1 character long");
	}
	if (value.length > 100) {
		throw new Error("Title must be at most 100 characters long");
	}
}
