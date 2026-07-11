import type { User } from "@/user/core/domain/entity";

export interface TokenProvider {
	generateToken(user: User): Promise<string>;
}
