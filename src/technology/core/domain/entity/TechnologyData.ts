import type { Name } from "@/shared/core/domain/valueObjects/name/Name";
import type { Url } from "@/shared/core/domain/valueObjects/url";

export interface TechnologyData {
	name: Name;
	iconUrl: Url;
}
