import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { FavoriteData } from "./FavoriteData";

export function validFavoriteData(): FavoriteData {
	return {
		userId: new UniqueID(1),
		templateId: new UniqueID(2),
	};
}
