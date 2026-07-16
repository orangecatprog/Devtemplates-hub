import { describe, expect, it } from "vitest";
import { Email } from "./Email";

describe("Email", () => {
	it("should create with a valid email", () => {
		const email = new Email("user@example.com");
		expect(email.value).toBe("user@example.com");
	});

	it("should throw for an invalid email", () => {
		expect(() => new Email("invalid-email")).toThrow(
			"Email must be a valid email address.",
		);
	});
});
