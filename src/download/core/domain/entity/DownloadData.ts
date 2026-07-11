import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";

export interface DownloadData {
	date: Date;
	userId: UniqueID;
	templateId: UniqueID;
}
