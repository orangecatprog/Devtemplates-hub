import type { UseCase } from "@/shared/core/application/use-cases/base";
import { PasswordHash } from "@/user/core/domain/entity/passwordHash";
import type { UserRepository } from "../../contracts/repository";
import type { PasswordHasher } from "../contracts/passwordHasher";
import type { InputChangePasswordDTO, OutputChangePasswordDTO } from "./dtos";

export class ChangePasswordUseCase implements UseCase<
	InputChangePasswordDTO,
	OutputChangePasswordDTO
> {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly passwordHasher: PasswordHasher,
	) {}

	async execute(
		input: InputChangePasswordDTO,
	): Promise<OutputChangePasswordDTO> {
		const user = await this.userRepository.getById(input.userId);

		if (
			!(await this.passwordHasher.compare(
				input.previousPassword,
				user.passwordHash.value,
			))
		) {
			throw new Error("Invalid credentials");
		}
		if (!(input.newPassword === input.confirmPassword)) {
			throw new Error("Passwords do not match");
		}

		const passwordHash = await this.passwordHasher.hash(input.newPassword);

		user.changePasswordHash(new PasswordHash(passwordHash));

		await this.userRepository.update(user);

		return {
			id: user.id.value,
			username: user.username.value,
			email: user.email.value,
		};
	}
}
