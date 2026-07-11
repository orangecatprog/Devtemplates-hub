import { Name } from "@/shared/core/domain/valueObjects/name";
import type { CategoryData } from "./CategoryData";
import { CategoryDescription } from "./description";
import { Slug } from "./slug";

export function validCategoryData(): CategoryData {
	return {
		name: new Name("My category"),
		slug: new Slug("my-category"),
		description: new CategoryDescription("My category description"),
	};
}
