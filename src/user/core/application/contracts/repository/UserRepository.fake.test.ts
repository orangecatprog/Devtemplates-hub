import type { User } from "@/user/core/domain/entity/User";
import type { UserRepository } from "./UserRepository";
import { FakeRepository } from "@/shared/core/application/contracts/repository/Repository.fake.test";

export class FakeUserRepository
	extends FakeRepository<User>
	implements UserRepository
{
	private readonly users: User[] = [];

	async findByUsername(username: string): Promise<User> {
		const user = this.users.find((u) => u.username.value === username);

		if (!user) {
			throw new Error("User not found");
		}

		return user;
	}

	async findByEmail(email: string): Promise<User> {
		const user = this.users.find((u) => u.email.value === email);

		if (!user) {
			throw new Error("User not found");
		}

		return user;
	}
}
