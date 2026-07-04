import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { Score } from "./score/Score";
import { Entity } from "@/shared/core/domain/base/entity/Entity";
import type { ReviewData } from "./ReviewData";

export class Review extends Entity<ReviewData> {
	get score(): Score {
		return this.data.score;
	}

	changeScore(score: Score): void {
		this.data.score = score;
	}

	get userId(): UniqueID {
		return this.data.userId;
	}

	get templateId(): UniqueID {
		return this.data.templateId;
	}
}
