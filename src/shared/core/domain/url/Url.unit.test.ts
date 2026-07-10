import { describe, expect, it } from "vitest";
import { Url } from "./Url";

describe("Url", () => {
	it("should create with a valid https url", () => {
		const url = new Url("https://github.com/john");
		expect(url.value).toBe("https://github.com/john");
	});

	it("should create with a valid http url", () => {
		const url = new Url("http://example.com");
		expect(url.value).toBe("http://example.com");
	});

	it("should throw for an invalid url", () => {
		expect(() => new Url("not-a-url")).toThrow("Url must be a valid Url.");
	});

	it("should throw for an empty string", () => {
		expect(() => new Url("")).toThrow("Url must be a valid Url.");
	});
});
