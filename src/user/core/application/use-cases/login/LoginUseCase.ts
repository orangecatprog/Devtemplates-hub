import type { UseCase } from "@/shared/core/application/use-cases/base";
import type { User } from "@/user/core/domain/entity";
import type { PasswordHasher } from "../../contracts/passwordHasher";
import type { UserRepository } from "../../contracts/repository";
import type { TokenProvider } from "./contracts/tokenProvider";
import type { InputLoginDTO, OutputLoginDTO } from "./dtos";

export class LoginUseCase implements UseCase<InputLoginDTO, OutputLoginDTO> {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly passwordHasher: PasswordHasher,
		private readonly tokenProvider: TokenProvider,
	) {}

	async execute(input: InputLoginDTO): Promise<OutputLoginDTO> {
		const user = await this.getUser(input.identifier);

		if (
			!(await this.passwordHasher.compare(
				input.password,
				user.passwordHash.value,
			))
		) {
			throw new Error("Invalid credentials");
		}
		const token = await this.tokenProvider.generateToken(user);
		return {
			token,
		};
	}

	private async getUser(identifier: string): Promise<User> {
		let user: User | undefined;
		if (identifier.includes("@")) {
			user = await this.userRepository.findByEmail(identifier);
		} else {
			user = await this.userRepository.findByUsername(identifier);
		}
		if (!user) {
			throw new Error("User not found");
		}
		return user;
	}
}
