import type { Name } from "@/shared/core/domain/entities/name/Name";
import type { Url } from "@/shared/core/domain/valueObjects/url/Url";

export interface TechnologyData {
	name: Name;
	iconUrl: Url;
}
