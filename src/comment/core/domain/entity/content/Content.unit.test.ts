import { describe, expect, it } from "vitest";
import { Content } from "./Content";

describe("Content", () => {
	it("should create with a valid content", () => {
		const content = new Content("My content");
		expect(content.value).toBe("My content");
	});
	describe("Less than 5 characters", () => {
		it("should create with a content with exactly 5 characters", () => {
			const content = new Content("a".repeat(5));
			expect(content.value).toBe("a".repeat(5));
		});
		it("should throw for a content with less than 5 characters", () => {
			expect(() => {
				new Content("My");
			}).toThrow("Content must contain at least 5 characters.");
		});
	});
	describe("More than 1000 characters", () => {
		it("should create with a content with exactly 1000 characters", () => {
			const content = new Content("a".repeat(1000));
			expect(content.value).toBe("a".repeat(1000));
		});
		it("should throw for a content with more than 1000 characters", () => {
			expect(() => {
				new Content("a".repeat(1001));
			}).toThrow("Content cannot exceed 1000 characters.");
		});
	});
});
