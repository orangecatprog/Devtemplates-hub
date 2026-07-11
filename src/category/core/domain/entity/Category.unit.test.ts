import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { describe, expect, it } from "vitest";
import { Name } from "../../../../shared/core/domain/valueObjects/name";
import { Category } from "./Category";
import { validCategoryData } from "./Category.helper.test";
import { CategoryDescription } from "./description";
import { Slug } from "./slug";

describe("Category", () => {
	it("should create a category with valid data", () => {
		const category = new Category(new UniqueID(1), validCategoryData());
		expect(category).toBeDefined();
	});
	describe("Name", () => {
		it("should expose name correctly", () => {
			const category = new Category(new UniqueID(1), validCategoryData());
			expect(category.name.value).toBe("My category");
		});
		it("should change name", () => {
			const category = new Category(new UniqueID(1), validCategoryData());

			category.changeName(new Name("New Category"));

			expect(category.name.value).toBe("New Category");
		});
	});
	describe("Slug", () => {
		it("should expose slug correctly", () => {
			const category = new Category(new UniqueID(1), validCategoryData());
			expect(category.slug.value).toBe("my-category");
		});
		it("should change slug", () => {
			const category = new Category(new UniqueID(1), validCategoryData());

			category.changeSlug(new Slug("new-slug"));

			expect(category.slug.value).toBe("new-slug");
		});
	});
	describe("Description", () => {
		it("should expose description correctly", () => {
			const category = new Category(new UniqueID(1), validCategoryData());
			expect(category.description.value).toBe("My category description");
		});
		it("should change description", () => {
			const category = new Category(new UniqueID(1), validCategoryData());

			category.changeDescription(
				new CategoryDescription("Updated category description"),
			);

			expect(category.description.value).toBe(
				"Updated category description",
			);
		});
	});
});
