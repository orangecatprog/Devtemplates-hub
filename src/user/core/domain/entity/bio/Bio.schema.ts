import { z } from "zod";

export const BioSchema = z
	.string()
	.min(10, "Bio must contain at least 10 characters.")
	.max(500, "Bio cannot exceed 500 characters.");
