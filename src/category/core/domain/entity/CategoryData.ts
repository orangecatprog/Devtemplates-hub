import type { Name } from "../../../../shared/core/domain/valueObjects/name/Name";
import type { CategoryDescription } from "./description/Description";
import type { Slug } from "./slug/Slug";

export interface CategoryData {
	name: Name;
	slug: Slug;
	description: CategoryDescription;
}
