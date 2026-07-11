import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";

export function validDownloadData() {
	return {
		date: new Date(),
		userId: new UniqueID(1),
		templateId: new UniqueID(2),
	};
}
