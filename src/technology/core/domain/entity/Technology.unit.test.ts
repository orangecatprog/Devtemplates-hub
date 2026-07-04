import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import { describe, expect, it } from "vitest";
import { validTechnologyData } from "./Technology.helper.test";
import { Technology } from "./Technology";
import { Name } from "@/shared/core/domain/entities/name/Name";

describe("Technology", () => {
	it("should create a technology with valid data", () => {
		const technology = new Technology(
			new UniqueID(1),
			validTechnologyData(),
		);
		expect(technology).toBeDefined();
	});
	describe("Name", () => {
		it("should expose name correctly", () => {
			const technology = new Technology(
				new UniqueID(1),
				validTechnologyData(),
			);
			expect(technology.name.value).toBe("My technology");
		});
		it("should change name", () => {
			const technology = new Technology(
				new UniqueID(1),
				validTechnologyData(),
			);

			technology.changeName(new Name("New Technology"));

			expect(technology.name.value).toBe("New Technology");
		});
	});
	describe("Icon URL", () => {
		it("should expose icon url correctly", () => {
			const technology = new Technology(
				new UniqueID(1),
				validTechnologyData(),
			);
			expect(technology.iconUrl).toBe("https://example.com/icon.png");
		});
		it("should change icon url", () => {
			const technology = new Technology(
				new UniqueID(1),
				validTechnologyData(),
			);

			technology.changeIconUrl("https://example.com/new-icon.png");

			expect(technology.iconUrl).toBe("https://example.com/new-icon.png");
		});
	});
});
