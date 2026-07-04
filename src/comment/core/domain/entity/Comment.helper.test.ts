import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import { Content } from "./content/Content";
import type { CommentData } from "./CommentData";

export function validCommentData(): CommentData {
	return {
		content: new Content("My content"),
		createdAt: new Date(),
		userId: new UniqueID(1),
		templateId: new UniqueID(2),
	};
}
