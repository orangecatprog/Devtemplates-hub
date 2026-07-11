import { Entity } from "@/shared/core/domain/entities/base";
import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { CommentData } from "./CommentData";
import type { Content } from "./content";

export class Comment extends Entity<CommentData> {
	get content(): Content {
		return this.data.content;
	}

	changeContent(content: Content): void {
		this.data.content = content;
	}

	get createdAt(): Date {
		return this.data.createdAt;
	}

	get userId(): UniqueID {
		return this.data.userId;
	}

	get templateId(): UniqueID {
		return this.data.templateId;
	}
}
