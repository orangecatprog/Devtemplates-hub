import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";

export interface DownloadData {
	date: Date;
	userId: UniqueID;
	templateId: UniqueID;
}
