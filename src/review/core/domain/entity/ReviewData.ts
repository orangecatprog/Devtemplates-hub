import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { Score } from "./score";

export interface ReviewData {
	score: Score;
	userId: UniqueID;
	templateId: UniqueID;
}
