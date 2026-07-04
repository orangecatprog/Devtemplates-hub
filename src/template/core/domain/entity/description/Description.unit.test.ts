import { describe, expect, it } from "vitest";
import { Description } from "./Description";

describe("Description", () => {
	it("should create with a valid description", () => {
		const description = new Description("My description");
		expect(description.value).toBe("My description");
	});
	it("should throw for a description with less than 10 characters", () => {
		expect(() => new Description("Short")).toThrow(
			"Description must contain at least 10 characters.",
		);
	});
	it("should throw for a description with more than 160 characters", () => {
		expect(() => new Description("a".repeat(161))).toThrow(
			"Description cannot exceed 160 characters.",
		);
	});
});
