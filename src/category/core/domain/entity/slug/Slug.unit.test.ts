import { describe, expect, it } from "vitest";
import { Slug } from "./Slug";

describe("Slug", () => {
	describe("Valid values", () => {
		it("should create with a valid slug", () => {
			const slug = new Slug("my-slug");
			expect(slug.value).toBe("my-slug");
		});

		it("should create with exactly 2 characters", () => {
			const slug = new Slug("ab");
			expect(slug.value).toBe("ab");
		});

		it("should create with exactly 100 characters", () => {
			const slug = new Slug("a".repeat(100));
			expect(slug.value).toBe("a".repeat(100));
		});
	});

	describe("Lowercase validation", () => {
		it("should throw for uppercase letters", () => {
			expect(() => new Slug("My-Slug")).toThrow("Slug must be lowercase");
		});
	});

	describe("Spaces validation", () => {
		it("should throw for spaces", () => {
			expect(() => new Slug("my slug")).toThrow(
				"Slug must not contain spaces",
			);
		});
	});

	describe("Special characters validation", () => {
		it("should throw for special characters", () => {
			expect(() => new Slug("my-slug!")).toThrow(
				"Slug must not contain special characters",
			);
		});
	});

	describe("Minimum length", () => {
		it("should throw for less than 2 characters", () => {
			expect(() => new Slug("a")).toThrow(
				"Slug must be at least 2 characters long",
			);
		});
	});

	describe("Maximum length", () => {
		it("should throw for more than 100 characters", () => {
			expect(() => new Slug("a".repeat(101))).toThrow(
				"Slug must be at most 100 characters long",
			);
		});
	});

	describe("Branch coverage", () => {
		it("should evaluate every condition as false", () => {
			expect(new Slug("abcdefghijklmnopqrstuvwxyz").value).toBe(
				"abcdefghijklmnopqrstuvwxyz",
			);
		});

		it("should reach the maximum length validation", () => {
			expect(() => new Slug("a".repeat(101))).toThrow(
				"Slug must be at most 100 characters long",
			);
		});

		it("should reach the minimum length validation", () => {
			expect(() => new Slug("a")).toThrow(
				"Slug must be at least 2 characters long",
			);
		});
	});
});
