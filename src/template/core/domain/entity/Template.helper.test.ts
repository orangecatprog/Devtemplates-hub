import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Url } from "@/shared/core/domain/valueObjects/url";
import { TemplateDescription } from "./description";
import { Difficulty } from "./difficulty";
import { State } from "./state";
import { Title } from "./title";

export function validTemplateData() {
	return {
		title: new Title("My title"),
		description: new TemplateDescription("My description"),
		repositoryUrl: new Url("https://github.com/john/my-template"),
		demoUrl: new Url("https://github.com/john/my-template/demo"),
		difficulty: Difficulty.ADVANCED,
		state: State.DRAFT,
		createdAt: new Date(),
		authorID: new UniqueID(1),
	};
}
