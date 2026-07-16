import { describe, expect, it } from "vitest";
import { PasswordHash } from "./PasswordHash";

describe("PasswordHash", () => {
	it("should create with a valid password hash", () => {
		const passwordHash = new PasswordHash("my-password-hash");
		expect(passwordHash.value).toBe("my-password-hash");
	});
	describe("Less than 1 character", () => {
		it("should create with a password hash with less than 1 character", () => {
			expect(() => new PasswordHash("")).toThrow(
				"Password hash must be at least 1 characters long",
			);
		});
	});
});
