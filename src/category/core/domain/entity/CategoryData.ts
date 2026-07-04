import type { CategoryDescription } from "./description/Description";
import type { Name } from "../../../../shared/core/domain/entities/name/Name";
import type { Slug } from "./slug/Slug";

export interface CategoryData {
	name: Name;
	slug: Slug;
	description: CategoryDescription;
}
