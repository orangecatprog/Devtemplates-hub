export function validateDescription(value: string): void {
	const trimmed = value.trim();
	if (trimmed.length < 10) {
		throw new Error("Description must contain at least 10 characters.");
	}
	if (trimmed.length > 160) {
		throw new Error("Description cannot exceed 160 characters.");
	}
}
