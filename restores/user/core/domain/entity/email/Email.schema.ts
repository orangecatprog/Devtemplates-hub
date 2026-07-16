const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): void {
	if (!EMAIL_REGEX.test(value)) {
		throw new Error("Email must be a valid email address.");
	}
}
