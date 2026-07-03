import { z } from "zod";

export const EmailSchema = z.email({
	error: "Email must be a valid email address.",
});
