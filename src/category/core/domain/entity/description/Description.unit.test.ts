import { describe, expect, it } from "vitest";
import { CategoryDescription } from "./Description";

describe("CategoryDescription", () => {
	it("should create with a valid description", () => {
		const description = new CategoryDescription("My category");
		expect(description.value).toBe("My category");
	});
	describe("Less than 10 characters", () => {
		it("should create with a description with exactly 10 characters", () => {
			const description = new CategoryDescription("a".repeat(10));
			expect(description.value).toBe("a".repeat(10));
		});
		it("should throw for a description with less than 10 characters", () => {
			expect(() => new CategoryDescription("a".repeat(9))).toThrow(
				"Category description must contain at least 10 characters.",
			);
		});
	});
	describe("More than 300 characters", () => {
		it("should create with a description with exactly 300 characters", () => {
			const description = new CategoryDescription("a".repeat(300));
			expect(description.value).toBe("a".repeat(300));
		});
		it("should throw for a description with more than 300 characters", () => {
			expect(() => new CategoryDescription("a".repeat(301))).toThrow(
				"Category description cannot exceed 300 characters.",
			);
		});
	});
});
