import type { Url } from "@/shared/core/domain/url/Url";
import type { Title } from "./title/Title";
import type { Description } from "./description/Description";
import type { Difficulty } from "./difficulty/Difficulty";
import type { UniqueID } from "@/shared/core/domain/uniqueID/UniqueID";
import type { State } from "./state/State";

export interface TemplateData {
	title: Title;
	description: Description;
	repositoryUrl: Url;
	demoUrl: Url | undefined;
	difficulty: Difficulty;
	state: State;
	createdAt: Date;
	authorID: UniqueID;
}
