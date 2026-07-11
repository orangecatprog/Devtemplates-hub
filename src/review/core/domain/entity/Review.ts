import { Entity } from "@/shared/core/domain/entities/base";
import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { ReviewData } from "./ReviewData";
import type { Score } from "./score";

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
