import { describe, expect, it } from "vitest";
import { Password } from "./Password";

describe("Password", () => {
	it("should create with a valid password", () => {
		const password = new Password("securePass1");
		expect(password.value).toBe("securePass1");
	});

	it("should throw for a password shorter than 8 characters", () => {
		expect(() => new Password("short")).toThrow(
			"Password must contain at least 8 characters.",
		);
	});

	it("should throw for a password longer than 100 characters", () => {
		expect(() => new Password("a".repeat(101))).toThrow(
			"Password cannot exceed 100 characters.",
		);
	});

	it("should throw for a password with invalid characters", () => {
		expect(() => new Password("pass word!")).toThrow(
			"Password can only contain letters, numbers, hyphens and underscores.",
		);
	});

	it("should throw for a password with leading spaces", () => {
		expect(() => new Password(" pass123")).toThrow(
			"Password cannot contain leading or trailing spaces.",
		);
	});

	it("should throw for a password with trailing spaces", () => {
		expect(() => new Password("pass123 ")).toThrow(
			"Password cannot contain leading or trailing spaces.",
		);
	});
});
