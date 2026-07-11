import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { Url } from "@/shared/core/domain/valueObjects/url";
import type { TemplateDescription } from "./description";
import type { DifficultySchema } from "./difficulty";
import type { StateSchema } from "./state";
import type { Title } from "./title";

export interface TemplateData {
	title: Title;
	description: TemplateDescription;
	repositoryUrl: Url;
	demoUrl: Url | undefined;
	difficulty: DifficultySchema;
	state: StateSchema;
	createdAt: Date;
	authorID: UniqueID;
}
