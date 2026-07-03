import { z } from "zod";

export const PasswordSchema = z
	.string()
	.min(8, "Password must contain at least 8 characters.")
	.max(100, "Password cannot exceed 100 characters.")
	.regex(
		/^[a-zA-Z0-9_-]+$/,
		"Password can only contain letters, numbers, hyphens and underscores.",
	)
	.refine(
		(value) => value === value.trim(),
		"Password cannot contain leading or trailing spaces.",
	);
