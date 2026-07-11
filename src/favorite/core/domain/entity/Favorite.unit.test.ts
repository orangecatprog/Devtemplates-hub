import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { describe, expect, it } from "vitest";
import { Favorite } from "./Favorite";
import { validFavoriteData } from "./Favorite.helper.test";

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
