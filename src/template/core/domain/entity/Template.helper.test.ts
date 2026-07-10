import { Url } from "@/shared/core/domain/valueObjects/url/Url";
import { TemplateDescription } from "./description/Description";
import { Title } from "./title/Title";
import { Difficulty } from "./difficulty/Difficulty";
import { State } from "./state/State";
import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";

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
