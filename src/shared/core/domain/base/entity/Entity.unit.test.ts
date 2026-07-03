import { describe, expect, it } from "vitest";
import { FakeEntity } from "./Entity.fake.test";

describe("Entity", () => {
	it("should expose its id", () => {
		const id = 1;

		const entity = new FakeEntity(id, {
			name: "test",
		});

		expect(entity.id).toBe(id);
	});
	it("should be equal when ids are equal", () => {
		const id = 1;

		const entity1 = new FakeEntity(id, {
			name: "test",
		});
		const entity2 = new FakeEntity(id, {
			name: "test2",
		});

		expect(entity1.equals(entity2)).toBe(true);
	});
	it("should not be equal when ids are different", () => {
		const entity1 = new FakeEntity(1, {
			name: "test",
		});
		const entity2 = new FakeEntity(2, {
			name: "test2",
		});

		expect(entity1.equals(entity2)).toBe(false);
	});
});
