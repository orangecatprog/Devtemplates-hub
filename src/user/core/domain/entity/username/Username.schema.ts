const USERNAME_REGEX = /^[a-zA-Z0-9_-]+$/;

export function validateUsername(value: string): void {
	if (value.length < 3) {
		throw new Error("Username must contain at least 3 characters.");
	}
	if (value.length > 30) {
		throw new Error("Username cannot exceed 30 characters.");
	}
	if (value !== value.trim()) {
		throw new Error("Username cannot contain leading or trailing spaces.");
	}
	if (!USERNAME_REGEX.test(value)) {
		throw new Error(
			"Username can only contain letters, numbers, hyphens and underscores.",
		);
	}
}
