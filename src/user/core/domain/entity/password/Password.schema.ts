const PASSWORD_REGEX = /^[a-zA-Z0-9_-]+$/;

export function validatePassword(value: string): void {
	if (value.length < 8) {
		throw new Error("Password must contain at least 8 characters.");
	}
	if (value.length > 100) {
		throw new Error("Password cannot exceed 100 characters.");
	}
	if (value !== value.trim()) {
		throw new Error("Password cannot contain leading or trailing spaces.");
	}
	if (!PASSWORD_REGEX.test(value)) {
		throw new Error(
			"Password can only contain letters, numbers, hyphens and underscores.",
		);
	}
}
