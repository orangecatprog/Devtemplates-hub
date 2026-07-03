import { z } from "zod";

export const URLSchema = z.url({
	error: "URL must be a valid URL.",
});
