import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { Url } from "@/shared/core/domain/valueObjects/url";
import type { TemplateDescription } from "./description";
import type { Difficulty } from "./difficulty";
import type { State } from "./state";
import type { Title } from "./title";

export interface TemplateData {
	title: Title;
	description: TemplateDescription;
	repositoryUrl: Url;
	demoUrl: Url | undefined;
	difficulty: Difficulty;
	state: State;
	createdAt: Date;
	authorID: UniqueID;
}
