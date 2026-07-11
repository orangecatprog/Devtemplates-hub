import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";

export interface FavoriteData {
	userId: UniqueID;
	templateId: UniqueID;
}
