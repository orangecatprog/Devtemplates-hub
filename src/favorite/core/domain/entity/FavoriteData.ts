import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";

export interface FavoriteData {
	userId: UniqueID;
	templateId: UniqueID;
}
