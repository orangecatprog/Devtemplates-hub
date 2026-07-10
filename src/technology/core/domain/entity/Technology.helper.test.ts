import { Name } from "@/shared/core/domain/valueObjects/name/Name";
import { Url } from "@/shared/core/domain/valueObjects/url/Url";
import type { TechnologyData } from "./TechnologyData";

export function validTechnologyData(): TechnologyData {
	return {
		name: new Name("My technology"),
		iconUrl: new Url("https://example.com/icon.png"),
	};
}
