import type { Repository } from "@/shared/core/application/contracts/repository/Repository";
import type { User } from "@/user/core/domain/entity/User";

export interface UserRepository extends Repository<User> {
	findByUsername(username: string): Promise<User>;
	findByEmail(email: string): Promise<User>;
}
