import type { Url } from "@/shared/core/domain/url/Url";
import type { Title } from "./title/Title";
import type { TemplateDescription } from "./description/Description";
import type { Difficulty } from "./difficulty/Difficulty";
import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { State } from "./state/State";

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
