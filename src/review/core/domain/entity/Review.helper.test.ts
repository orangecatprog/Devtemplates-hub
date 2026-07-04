import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import { Score } from "./score/Score";
import type { ReviewData } from "./ReviewData";

export function validReviewData(): ReviewData {
	return {
		score: new Score(5),
		userId: new UniqueID(1),
		templateId: new UniqueID(2),
	};
}
