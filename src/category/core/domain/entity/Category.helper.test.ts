import { Name } from "../../../../shared/core/domain/entities/name/Name";
import { Slug } from "./slug/Slug";
import type { CategoryData } from "./CategoryData";
import { CategoryDescription } from "./description/Description";

export function validCategoryData(): CategoryData {
	return {
		name: new Name("My category"),
		slug: new Slug("my-category"),
		description: new CategoryDescription("My category description"),
	};
}
