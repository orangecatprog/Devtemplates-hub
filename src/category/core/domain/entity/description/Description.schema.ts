export function validateCategoryDescription(value: string): void {
	if (value.length < 10) {
		throw new Error(
			"Category description must contain at least 10 characters.",
		);
	}
	if (value.length > 300) {
		throw new Error("Category description cannot exceed 300 characters.");
	}
}
