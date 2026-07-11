import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { ReviewData } from "./ReviewData";
import { Score } from "./score";

export function validReviewData(): ReviewData {
	return {
		score: new Score(5),
		userId: new UniqueID(1),
		templateId: new UniqueID(2),
	};
}
