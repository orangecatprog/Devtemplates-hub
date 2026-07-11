import { Entity } from "@/shared/core/domain/entities/base";
import type { Name } from "@/shared/core/domain/valueObjects/name/Name";
import { Url } from "@/shared/core/domain/valueObjects/url";
import type { TechnologyData } from "./TechnologyData";

export class Technology extends Entity<TechnologyData> {
	get name(): Name {
		return this.data.name;
	}

	changeName(name: Name): void {
		this.data.name = name;
	}

	get iconUrl(): string {
		return this.data.iconUrl.value;
	}

	changeIconUrl(iconUrl: string): void {
		this.data.iconUrl = new Url(iconUrl);
	}
}
