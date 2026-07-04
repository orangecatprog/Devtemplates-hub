import { Title } from "./Title";
import { describe, expect, it } from "vitest";

describe("Title", () => {
	it("should create with a valid title", () => {
		const title = new Title("My title");
		expect(title.value).toBe("My title");
	});
	it("should throw for a title with less than 1 character", () => {
		expect(() => new Title("")).toThrow(
			"Title must be at least 1 character long",
		);
	});
	it("should throw for a title with more than 100 characters", () => {
		expect(() => new Title("a".repeat(101))).toThrow(
			"Title must be at most 100 characters long",
		);
	});
});
