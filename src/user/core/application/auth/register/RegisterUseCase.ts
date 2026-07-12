import type { IdGenerator } from "@/shared/core/application/contracts/idGenerator";
import { type UseCase } from "@/shared/core/application/use-cases/base/UseCase";
import { Url } from "@/shared/core/domain/valueObjects/url";
import type { UserRepository } from "@/user/core/application/contracts/repository";
import { User } from "@/user/core/domain/entity";
import { Bio } from "@/user/core/domain/entity/bio";
import { Email } from "@/user/core/domain/entity/email";
import { Password } from "@/user/core/domain/entity/password";
import { PasswordHash } from "@/user/core/domain/entity/passwordHash";
import { Role, RoleSchema } from "@/user/core/domain/entity/role";
import { Username } from "@/user/core/domain/entity/username";
import type { PasswordHasher } from "../contracts/passwordHasher";
import type { InputRegisterDTO, OutputRegisterDTO } from "./dtos";

export class RegisterUseCase implements UseCase<
	InputRegisterDTO,
	OutputRegisterDTO
> {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly idGenerator: IdGenerator,
		private readonly passwordHasher: PasswordHasher,
	) {}

	async execute(dto: InputRegisterDTO): Promise<OutputRegisterDTO> {
		if (dto.password !== dto.confirmPassword) {
			throw new Error("Passwords do not match");
		}
		const passwordVO = new Password(dto.password);
		const passwordHash = await this.passwordHasher.hash(passwordVO.value);
		const user = new User(this.idGenerator.generate(), {
			username: new Username(dto.username),
			email: new Email(dto.email),
			passwordHash: new PasswordHash(passwordHash),
			githubUrl: new Url(dto.githubUrl),
			bio: new Bio(""),
			registerDate: new Date(),
			role: new Role(RoleSchema.USER),
		});
		await this.userRepository.create(user);
		return {
			id: user.id.value,
			username: user.username.value,
			email: user.email.value,
		};
	}
}
