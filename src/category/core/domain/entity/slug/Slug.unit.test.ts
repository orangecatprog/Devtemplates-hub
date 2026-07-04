import { describe, expect, it } from "vitest";
import { Slug } from "./Slug";

describe("Slug", () => {
	it("should create with a valid slug", () => {
		const slug = new Slug("my-slug");
		expect(slug.value).toBe("my-slug");
	});
	it("should throw for a slug with uppercase letters", () => {
		expect(() => new Slug("My-Slug")).toThrow("Slug must be lowercase");
	});
	it("should throw for a slug with spaces", () => {
		expect(() => new Slug("my slug")).toThrow(
			"Slug must not contain spaces",
		);
	});
	it("should throw for a slug with special characters", () => {
		expect(() => new Slug("my-slug!")).toThrow(
			"Slug must not contain special characters",
		);
	});
	describe("Less than 2 characters", () => {
		it("should create with a slug with exactly 2 characters", () => {
			const slug = new Slug("ab");
			expect(slug.value).toBe("ab");
		});
		it("should throw for a slug with less than 2 characters", () => {
			expect(() => new Slug("a")).toThrow(
				"Slug must be at least 2 characters long",
			);
		});
	});
	describe("More than 100 characters", () => {
		it("should create with a slug with exactly 100 characters", () => {
			const slug = new Slug("a".repeat(100));
			expect(slug.value).toBe("a".repeat(100));
		});
		it("should throw for a slug with more than 100 characters", () => {
			expect(() => new Slug("a".repeat(101))).toThrow(
				"Slug must be at most 100 characters long",
			);
		});
	});
});
