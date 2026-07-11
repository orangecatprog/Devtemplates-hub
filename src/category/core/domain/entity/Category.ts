import { Entity } from "@/shared/core/domain/entities/base";
import type { Name } from "../../../../shared/core/domain/valueObjects/name";
import type { CategoryData } from "./CategoryData";
import type { CategoryDescription } from "./description";
import type { Slug } from "./slug";

export class Category extends Entity<CategoryData> {
	get name(): Name {
		return this.data.name;
	}
	changeName(name: Name): void {
		this.data.name = name;
	}
	get slug(): Slug {
		return this.data.slug;
	}
	changeSlug(slug: Slug): void {
		this.data.slug = slug;
	}
	get description(): CategoryDescription {
		return this.data.description;
	}
	changeDescription(description: CategoryDescription): void {
		this.data.description = description;
	}
}
