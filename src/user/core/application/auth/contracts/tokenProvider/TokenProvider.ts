import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { User } from "@/user/core/domain/entity";

export interface TokenProvider {
	generateAccessToken(user: User): Promise<string>;
	generateRefreshToken(user: User): Promise<string>;

	verifyAccessToken(token: string): Promise<UniqueID>;
	verifyRefreshToken(token: string): Promise<UniqueID>;
}
