import { describe, expect, it } from "vitest";
import { Template } from "./Template";
import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import { validTemplateData } from "./Template.helper.test";
import { Title } from "./title/Title";
import { TemplateDescription } from "./description/Description";
import { Url } from "@/shared/core/domain/url/Url";
import { Difficulty } from "./difficulty/Difficulty";
import { State } from "./state/State";

describe("Template", () => {
	it("should create a template with valid data", () => {
		const template = new Template(new UniqueID(1), validTemplateData());

		expect(template).toBeDefined();
	});
	describe("Title", () => {
		it("should expose title correctly", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			expect(template.title.value).toBe(validTemplateData().title.value);
		});
		it("should change title", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.changeTitle(new Title("New Template"));

			expect(template.title.value).toBe("New Template");
		});
	});
	describe("Description", () => {
		it("should expose description correctly", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			expect(template.description.value).toBe(
				validTemplateData().description.value,
			);
		});
		it("should change description", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.changeDescription(
				new TemplateDescription("Updated template description"),
			);

			expect(template.description.value).toBe(
				"Updated template description",
			);
		});
	});
	describe("Repository URL", () => {
		it("should expose repository url correctly", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			expect(template.repositoryUrl.value).toBe(
				validTemplateData().repositoryUrl.value,
			);
		});
		it("should change repository url", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			const newUrl = new Url("https://github.com/new-repo");
			template.changeRepositoryUrl(newUrl);

			expect(template.repositoryUrl.value).toBe(newUrl.value);
		});
	});
	describe("Demo URL", () => {
		it("should expose demo url correctly", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			expect(template.demoUrl?.value).toBe(
				validTemplateData().demoUrl?.value,
			);
		});
		it("should change demo url", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			const newUrl = new Url("https://github.com/new-demo");
			template.changeDemoUrl(newUrl);

			expect(template.demoUrl?.value).toBe(newUrl.value);
		});
	});
	describe("Difficulty", () => {
		it("should expose difficulty correctly", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			expect(template.difficulty).toBe(validTemplateData().difficulty);
		});
		it("should change difficulty", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.changeDifficulty(Difficulty.BEGINNER);

			expect(template.difficulty).toBe(Difficulty.BEGINNER);
		});
	});
	describe("State", () => {
		it("should expose state correctly", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			expect(template.state).toBe(validTemplateData().state);
		});
		it("should change state from draft to published", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.publish();

			expect(template.state).toBe(State.PUBLISHED);
		});
		it("should throw when trying to publish a template that is already published", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.publish();
			expect(() => template.publish()).toThrow(
				"Cannot publish a template that is not a draft.",
			);
		});
		it("should change state from published to archived", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.publish();
			template.archive();

			expect(template.state).toBe(State.ARCHIVED);
		});
		it("should throw when trying to archive a template that is already archived", () => {
			const template = new Template(new UniqueID(1), validTemplateData());

			template.publish();
			template.archive();
			expect(() => template.archive()).toThrow(
				"Cannot archive a template that is not published.",
			);
		});
	});
});
