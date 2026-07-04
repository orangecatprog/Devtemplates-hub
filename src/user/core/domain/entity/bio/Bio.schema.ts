export function validateBio(value: string): void {
	if (value.length < 10) {
		throw new Error("Bio must contain at least 10 characters.");
	}
	if (value.length > 500) {
		throw new Error("Bio cannot exceed 500 characters.");
	}
}
