export function validateCategoryDescription(value: string): void {
	if (value.length < 10) {
		throw new Error("Description must contain at least 10 characters.");
	}
	if (value.length > 300) {
		throw new Error("Description cannot exceed 300 characters.");
	}
}
