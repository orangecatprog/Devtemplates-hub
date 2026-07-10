import { Name } from "../../../../shared/core/domain/valueObjects/name/Name";
import type { CategoryData } from "./CategoryData";
import { CategoryDescription } from "./description/Description";
import { Slug } from "./slug/Slug";

export function validCategoryData(): CategoryData {
	return {
		name: new Name("My category"),
		slug: new Slug("my-category"),
		description: new CategoryDescription("My category description"),
	};
}
