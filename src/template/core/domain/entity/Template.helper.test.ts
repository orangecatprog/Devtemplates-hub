import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Url } from "@/shared/core/domain/valueObjects/url";
import { TemplateDescription } from "./description";
import { StateSchema } from "./state";
import { Title } from "./title";
import { DifficultySchema } from "./difficulty";

export function validTemplateData() {
	return {
		title: new Title("My title"),
		description: new TemplateDescription("My description"),
		repositoryUrl: new Url("https://github.com/john/my-template"),
		demoUrl: new Url("https://github.com/john/my-template/demo"),
		difficulty: DifficultySchema.ADVANCED,
		state: StateSchema.DRAFT,
		createdAt: new Date(),
		authorID: new UniqueID(1),
	};
}
