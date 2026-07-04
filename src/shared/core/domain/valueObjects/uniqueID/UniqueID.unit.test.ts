import { describe, expect, it } from "vitest";
import { UniqueID } from "./UniqueID";

describe("UniqueID", () => {
	it("should create a valid unique id", () => {
		const id = new UniqueID(1);
		expect(id.value).toBe(1);
	});
	it("should reject invalid ids", () => {
		expect(() => new UniqueID(0)).toThrow();
		expect(() => new UniqueID(-1)).toThrow();
	});
});
