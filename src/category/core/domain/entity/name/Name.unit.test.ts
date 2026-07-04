import { describe, expect, it } from "vitest";
import { Name } from "./Name";

describe("Name", () => {
	it("should create with a valid name", () => {
		const name = new Name("My name");
		expect(name.value).toBe("My name");
	});
	describe("Less than 1 character", () => {
		it("should create with a name with exactly 1 character", () => {
			const name = new Name("a");
			expect(name.value).toBe("a");
		});
		it("should throw for a name with less than 1 character", () => {
			expect(() => new Name("")).toThrow(
				"Name must be at least 1 character long",
			);
		});
	});
	describe("More than 100 characters", () => {
		it("should create with a name with more than 100 characters", () => {
			const name = new Name("a".repeat(100));
			expect(name.value).toBe("a".repeat(100));
		});
		it("should throw for a name with more than 100 characters", () => {
			expect(() => new Name("a".repeat(101))).toThrow(
				"Name must be at most 100 characters long",
			);
		});
	});
});
