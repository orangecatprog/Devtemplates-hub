import { Entity } from "@/shared/core/domain/base/entity/Entity";
import type { FavoriteData } from "./FavoriteData";
import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";

export class Favorite extends Entity<FavoriteData> {
	get userId(): UniqueID {
		return this.data.userId;
	}

	get templateId(): UniqueID {
		return this.data.templateId;
	}
}
