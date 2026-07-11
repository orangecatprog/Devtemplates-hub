import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { Content } from "./content";

export interface CommentData {
	content: Content;
	createdAt: Date;
	userId: UniqueID;
	templateId: UniqueID;
}
