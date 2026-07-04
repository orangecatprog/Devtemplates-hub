import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { DownloadData } from "./DownloadData";
import { Entity } from "@/shared/core/domain/base/entity/Entity";

export class Download extends Entity<DownloadData> {
	get date(): Date {
		return this.data.date;
	}

	get userId(): UniqueID {
		return this.data.userId;
	}

	get templateId(): UniqueID {
		return this.data.templateId;
	}
}
