import { Entity } from "@/shared/core/domain/entities/base/Entity";
import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { FavoriteData } from "./FavoriteData";

export class Favorite extends Entity<FavoriteData> {
	get userId(): UniqueID {
		return this.data.userId;
	}

	get templateId(): UniqueID {
		return this.data.templateId;
	}
}
