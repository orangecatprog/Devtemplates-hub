import { FakeRepository } from "@/shared/core/application/contracts/repository/Repository.fake.test";
import type { User } from "@/user/core/domain/entity/User";
import type { UserRepository } from "./UserRepository";

export class FakeUserRepository
	extends FakeRepository<User>
	implements UserRepository
{
	async findByUsername(username: string): Promise<User> {
		const user = (await this.getAll()).find(
			(u) => u.username.value === username,
		);

		if (!user) {
			throw new Error("User not found");
		}

		return user;
	}

	async findByEmail(email: string): Promise<User> {
		const user = (await this.getAll()).find((u) => u.email.value === email);

		if (!user) {
			throw new Error("User not found");
		}

		return user;
	}
}
