import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { Score } from "./score/Score";

export interface ReviewData {
	score: Score;
	userId: UniqueID;
	templateId: UniqueID;
}
