import { describe, expect, it } from "vitest";

import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Url } from "@/shared/core/domain/valueObjects/url";
import { Bio } from "@/user/core/domain/entity/bio";
import { Email } from "@/user/core/domain/entity/email";
import { PasswordHash } from "@/user/core/domain/entity/passwordHash";
import { Role, RoleSchema } from "@/user/core/domain/entity/role";
import { User } from "@/user/core/domain/entity";
import { Username } from "@/user/core/domain/entity/username";
import { FakePasswordHasher } from "../../contracts/passwordHasher/PasswordHasher.fake.test";
import { FakeUserRepository } from "../../contracts/repository/UserRepository.fake.test";
import { FakeTokenProvider } from "./contracts/tokenProvider/TokenProvider.fake.test";
import { LoginUseCase } from "./LoginUseCase";

describe("LoginUseCase", () => {
	it("should login using email", async () => {
		const repository = new FakeUserRepository();
		const passwordHasher = new FakePasswordHasher();
		const tokenProvider = new FakeTokenProvider();

		const passwordHash = await passwordHasher.hash("12345678");

		await repository.create(
			new User(new UniqueID(1), {
				username: new Username("john"),
				email: new Email("john@test.com"),
				passwordHash: new PasswordHash(passwordHash),
				githubUrl: new Url("https://github.com/john"),
				bio: new Bio(""),
				registerDate: new Date(),
				role: new Role(RoleSchema.USER),
			}),
		);

		const useCase = new LoginUseCase(
			repository,
			passwordHasher,
			tokenProvider,
		);

		const result = await useCase.execute({
			identifier: "john@test.com",
			password: "12345678",
		});

		expect(result).toEqual({
			token: "fake-tokenjohn",
		});

		expect(tokenProvider.generatedFor?.id.value).toBe(1);
	});

	it("should login using username", async () => {
		const repository = new FakeUserRepository();
		const passwordHasher = new FakePasswordHasher();
		const tokenProvider = new FakeTokenProvider();

		const passwordHash = await passwordHasher.hash("12345678");

		await repository.create(
			new User(new UniqueID(1), {
				username: new Username("john"),
				email: new Email("john@test.com"),
				passwordHash: new PasswordHash(passwordHash),
				githubUrl: new Url("https://github.com/john"),
				bio: new Bio(""),
				registerDate: new Date(),
				role: new Role(RoleSchema.USER),
			}),
		);

		const useCase = new LoginUseCase(
			repository,
			passwordHasher,
			tokenProvider,
		);

		const result = await useCase.execute({
			identifier: "john",
			password: "12345678",
		});

		expect(result.token).toBe("fake-tokenjohn");
	});

	it("should throw when password is invalid", async () => {
		const repository = new FakeUserRepository();
		const passwordHasher = new FakePasswordHasher();
		const tokenProvider = new FakeTokenProvider();

		const passwordHash = await passwordHasher.hash("12345678");

		await repository.create(
			new User(new UniqueID(1), {
				username: new Username("john"),
				email: new Email("john@test.com"),
				passwordHash: new PasswordHash(passwordHash),
				githubUrl: new Url("https://github.com/john"),
				bio: new Bio(""),
				registerDate: new Date(),
				role: new Role(RoleSchema.USER),
			}),
		);

		const useCase = new LoginUseCase(
			repository,
			passwordHasher,
			tokenProvider,
		);

		await expect(
			useCase.execute({
				identifier: "john@test.com",
				password: "wrong-password",
			}),
		).rejects.toThrow("Invalid credentials");
	});

	it("should throw when user does not exist", async () => {
		const useCase = new LoginUseCase(
			new FakeUserRepository(),
			new FakePasswordHasher(),
			new FakeTokenProvider(),
		);

		await expect(
			useCase.execute({
				identifier: "john@test.com",
				password: "12345678",
			}),
		).rejects.toThrow();
	});
});
