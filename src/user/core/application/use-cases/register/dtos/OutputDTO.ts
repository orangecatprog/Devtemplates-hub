import type { UniqueIDType } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID.type";

export interface OutputRegisterDTO {
	id: UniqueIDType;
	username: string;
	email: string;
}
