export function validateContent(value: string): void {
	if (value.length < 5) {
		throw new Error("Content must contain at least 5 characters.");
	}
	if (value.length > 1000) {
		throw new Error("Content cannot exceed 1000 characters.");
	}
}
