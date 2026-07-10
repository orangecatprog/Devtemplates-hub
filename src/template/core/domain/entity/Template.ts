import { Entity } from "@/shared/core/domain/entities/base/Entity";
import type { Url } from "@/shared/core/domain/valueObjects/url/Url";
import type { Description } from "./description/Description";
import type { Difficulty } from "./difficulty/Difficulty";
import { State } from "./state/State";
import type { TemplateData } from "./TemplateData";
import type { Title } from "./title/Title";

export class Template extends Entity<TemplateData> {
	get title(): Title {
		return this.data.title;
	}

	changeTitle(title: Title): void {
		this.data.title = title;
	}

	get description(): Description {
		return this.data.description;
	}

	changeDescription(description: Description): void {
		this.data.description = description;
	}

	get repositoryUrl(): Url {
		return this.data.repositoryUrl;
	}

	changeRepositoryUrl(repositoryUrl: Url): void {
		this.data.repositoryUrl = repositoryUrl;
	}

	get demoUrl(): Url | undefined {
		return this.data.demoUrl;
	}

	changeDemoUrl(demoUrl: Url | undefined): void {
		this.data.demoUrl = demoUrl;
	}

	get difficulty(): Difficulty {
		return this.data.difficulty;
	}

	changeDifficulty(difficulty: Difficulty): void {
		this.data.difficulty = difficulty;
	}

	get state(): State {
		return this.data.state;
	}

	publish(): void {
		if (this.data.state !== State.DRAFT) {
			throw new Error("Cannot publish a template that is not a draft.");
		}
		this.data.state = State.PUBLISHED;
	}

	archive(): void {
		if (this.data.state !== State.PUBLISHED) {
			throw new Error("Cannot archive a template that is not published.");
		}
		this.data.state = State.ARCHIVED;
	}
}
