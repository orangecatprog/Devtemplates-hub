import type { UniqueIDType } from "@/shared/core/domain/valueObjects/uniqueID";

export interface OutputRegisterDTO {
	id: UniqueIDType;
	username: string;
	email: string;
}
