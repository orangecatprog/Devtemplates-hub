import { describe, expect, it } from "vitest";
import { Bio } from "./Bio";

describe("Bio", () => {
	it("should create with a valid bio", () => {
		const bio = new Bio("developer with 10 years of experience");
		expect(bio.value).toBe("developer with 10 years of experience");
	});

	it("should throw for a bio shorter than 10 characters", () => {
		expect(() => new Bio("short")).toThrow(
			"Bio must contain at least 10 characters.",
		);
	});

	it("should throw for a bio longer than 500 characters", () => {
		expect(() => new Bio("a".repeat(501))).toThrow(
			"Bio cannot exceed 500 characters.",
		);
	});
});
