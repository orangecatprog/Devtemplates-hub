import type { UniqueIDType } from "@/shared/core/domain/valueObjects/uniqueID";

export interface InputChangePasswordDTO {
	userId: UniqueIDType;
	previousPassword: string;
	newPassword: string;
	confirmPassword: string;
}
