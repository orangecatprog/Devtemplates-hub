import { type UseCase } from "@/shared/core/application/use-cases/base/UseCase";
import type { IdGenerator } from "@/shared/core/domain/contracts/id/idGenerator";
import { Url } from "@/shared/core/domain/valueObjects/url/Url";
import type { PasswordHasher } from "@/user/core/domain/contracts/PasswordHasher";
import type { UserRepository } from "@/user/core/domain/contracts/repository/UserRepository";
import { Bio } from "@/user/core/domain/entity/bio/Bio";
import { Email } from "@/user/core/domain/entity/email/Email";
import { Password } from "@/user/core/domain/entity/password/Password";
import { PasswordHash } from "@/user/core/domain/entity/passwordHash/PasswordHash";
import { Role } from "@/user/core/domain/entity/role/Role";
import { RoleSchema } from "@/user/core/domain/entity/role/Role.schema";
import { User } from "@/user/core/domain/entity/User";
import { Username } from "@/user/core/domain/entity/username/Username";
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
		this.userRepository.create(user);
		return {
			id: user.id.value.toString(),
			username: user.username.value,
			email: user.email.value,
		};
	}
}
