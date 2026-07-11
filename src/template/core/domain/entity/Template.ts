import { Entity } from "@/shared/core/domain/entities/base";
import type { Url } from "@/shared/core/domain/valueObjects/url";
import type { TemplateDescription } from "./description";
import type { DifficultySchema } from "./difficulty";
import { StateSchema } from "./state";
import type { TemplateData } from "./TemplateData";
import type { Title } from "./title";

export class Template extends Entity<TemplateData> {
	get title(): Title {
		return this.data.title;
	}

	changeTitle(title: Title): void {
		this.data.title = title;
	}

	get description(): TemplateDescription {
		return this.data.description;
	}

	changeDescription(description: TemplateDescription): void {
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

	get difficulty(): DifficultySchema {
		return this.data.difficulty;
	}

	changeDifficultySchema(difficulty: DifficultySchema): void {
		this.data.difficulty = difficulty;
	}

	get state(): StateSchema {
		return this.data.state;
	}

	publish(): void {
		if (this.data.state !== StateSchema.DRAFT) {
			throw new Error("Cannot publish a template that is not a draft.");
		}
		this.data.state = StateSchema.PUBLISHED;
	}

	archive(): void {
		if (this.data.state !== StateSchema.PUBLISHED) {
			throw new Error("Cannot archive a template that is not published.");
		}
		this.data.state = StateSchema.ARCHIVED;
	}
}
