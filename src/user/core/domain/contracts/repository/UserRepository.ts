import type { Repository } from "@/shared/core/domain/contracts/repository/Repository";
import type { User } from "../../entity/User";

export interface UserRepository extends Repository<User> {
	findByUsername(username: string): Promise<User>;
	findByEmail(email: string): Promise<User>;
}
