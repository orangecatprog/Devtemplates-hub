const specialCharacters = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/;

export function validateSlug(value: string): string {
	if (value.toLowerCase() !== value) {
		throw new Error("Slug must be lowercase");
	}
	if (value.includes(" ")) {
		throw new Error("Slug must not contain spaces");
	}
	if (specialCharacters.test(value)) {
		throw new Error("Slug must not contain special characters");
	}
	if (value.length < 2) {
		throw new Error("Slug must be at least 2 characters long");
	}
	if (value.length > 100) {
		throw new Error("Slug must be at most 100 characters long");
	}
	return value;
}
