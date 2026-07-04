import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { Content } from "./content/Content";

export interface CommentData {
	content: Content;
	createdAt: Date;
	userId: UniqueID;
	templateId: UniqueID;
}
