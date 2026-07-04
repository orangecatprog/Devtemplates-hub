export function validateName(value: string): void {
	if (value.length < 1) {
		throw new Error("Name must be at least 1 character long");
	}
	if (value.length > 100) {
		throw new Error("Name must be at most 100 characters long");
	}
}
