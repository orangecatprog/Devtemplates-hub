import { describe, expect, it } from "vitest";
import { validFavoriteData } from "./Favorite.helper.test";
import { Favorite } from "./Favorite";
import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";

describe("Favorite", () => {
	it("should create a favorite with valid data", () => {
		const favorite = new Favorite(new UniqueID(1), validFavoriteData());
		expect(favorite).toBeDefined();
	});
	describe("User ID", () => {
		it("should expose user id correctly", () => {
			const favorite = new Favorite(new UniqueID(1), validFavoriteData());
			expect(favorite.userId.value).toBe(
				validFavoriteData().userId.value,
			);
		});
	});
	describe("Template ID", () => {
		it("should expose template id correctly", () => {
			const favorite = new Favorite(new UniqueID(1), validFavoriteData());
			expect(favorite.templateId.value).toBe(
				validFavoriteData().templateId.value,
			);
		});
	});
});
