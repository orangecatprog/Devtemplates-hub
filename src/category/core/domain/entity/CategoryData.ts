import type { Name } from "../../../../shared/core/domain/valueObjects/name";
import type { CategoryDescription } from "./description";
import type { Slug } from "./slug";

export interface CategoryData {
	name: Name;
	slug: Slug;
	description: CategoryDescription;
}
