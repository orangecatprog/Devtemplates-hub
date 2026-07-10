export function validatePasswordHash(value: string): string {
	if (value.length < 1) {
		throw new Error("Password hash must be at least 1 characters long");
	}
	return value;
}
