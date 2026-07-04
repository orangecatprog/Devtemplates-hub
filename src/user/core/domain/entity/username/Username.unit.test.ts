import { describe, expect, it } from "vitest";
import { Username } from "./Username";

describe("Username", () => {
	it("should create with a valid username", () => {
		const username = new Username("john_doe");
		expect(username.value).toBe("john_doe");
	});

	it("should throw for a username shorter than 3 characters", () => {
		expect(() => new Username("ab")).toThrow(
			"Username must contain at least 3 characters.",
		);
	});

	it("should throw for a username longer than 30 characters", () => {
		expect(() => new Username("a".repeat(31))).toThrow(
			"Username cannot exceed 30 characters.",
		);
	});

	it("should throw for a username with invalid characters", () => {
		expect(() => new Username("user name!")).toThrow(
			"Username can only contain letters, numbers, hyphens and underscores.",
		);
	});

	it("should throw for a username with leading spaces", () => {
		expect(() => new Username(" user")).toThrow(
			"Username cannot contain leading or trailing spaces.",
		);
	});

	it("should throw for a username with trailing spaces", () => {
		expect(() => new Username("user ")).toThrow(
			"Username cannot contain leading or trailing spaces.",
		);
	});
});
