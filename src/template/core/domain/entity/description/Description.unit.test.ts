import { describe, expect, it } from "vitest";
import { TemplateDescription } from "./Description";

describe("TemplateDescription", () => {
	it("should create with a valid description", () => {
		const description = new TemplateDescription("My description");
		expect(description.value).toBe("My description");
	});
	it("should throw for a description with less than 10 characters", () => {
		expect(() => new TemplateDescription("Short")).toThrow(
			"Template description must contain at least 10 characters.",
		);
	});
	it("should throw for a description with more than 160 characters", () => {
		expect(() => new TemplateDescription("a".repeat(161))).toThrow(
			"Template description cannot exceed 160 characters.",
		);
	});
});
