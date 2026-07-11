import { describe, expect, it } from "vitest";
import { validCommentData } from "./Comment.helper.test";
import { Comment } from "./Comment";
import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Content } from "./content/Content";

describe("Comment", () => {
	it("should create a comment with valid data", () => {
		const comment = new Comment(new UniqueID(1), validCommentData());
		expect(comment).toBeDefined();
	});
	describe("Content", () => {
		it("should expose content correctly", () => {
			const comment = new Comment(new UniqueID(1), validCommentData());
			expect(comment.content.value).toBe(
				validCommentData().content.value,
			);
		});
		it("should change content", () => {
			const comment = new Comment(new UniqueID(1), validCommentData());

			comment.changeContent(new Content("New content"));

			expect(comment.content.value).toBe("New content");
		});
	});
	describe("Created at", () => {
		it("should expose created at correctly", () => {
			const comment = new Comment(new UniqueID(1), validCommentData());
			expect(comment.createdAt.getTime()).toBe(
				validCommentData().createdAt.getTime(),
			);
		});
	});
	describe("User ID", () => {
		it("should expose user id correctly", () => {
			const comment = new Comment(new UniqueID(1), validCommentData());
			expect(comment.userId.value).toBe(validCommentData().userId.value);
		});
	});
	describe("Template ID", () => {
		it("should expose template id correctly", () => {
			const comment = new Comment(new UniqueID(1), validCommentData());
			expect(comment.templateId.value).toBe(
				validCommentData().templateId.value,
			);
		});
	});
});
