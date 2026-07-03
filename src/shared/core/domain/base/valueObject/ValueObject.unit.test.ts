import { describe, expect, it } from "vitest";
import { FakeValueObject } from "./ValueObject.fake.test";

describe("ValueObject", () => {
	it("should be equal to itself", () => {
		const vo = new FakeValueObject("test");
		expect(vo.equals(vo)).toBe(true);
	});
	it("should be equal when values are equal", () => {
		const vo1 = new FakeValueObject("test");
		const vo2 = new FakeValueObject("test");
		expect(vo1.equals(vo2)).toBe(true);
	});
	it("should not be equal when values are different", () => {
		const vo1 = new FakeValueObject("test");
		const vo2 = new FakeValueObject("test2");
		expect(vo1.equals(vo2)).toBe(false);
	});
	it("should expose its value", () => {
		const vo = new FakeValueObject("test");
		expect(vo.value).toBe("test");
	});
});
