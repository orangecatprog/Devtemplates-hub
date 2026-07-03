import { z } from "zod";

export const UsernameSchema = z
	.string()
	.min(3, "Username must contain at least 3 characters.")
	.max(30, "Username cannot exceed 30 characters.")
	.regex(
		/^[a-zA-Z0-9_-]+$/,
		"Username can only contain letters, numbers, hyphens and underscores.",
	)
	.refine(
		(value) => value === value.trim(),
		"Username cannot contain leading or trailing spaces.",
	);
