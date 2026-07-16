import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Url } from "@/shared/core/domain/valueObjects/url";
import { User } from "@/user/core/domain/entity";
import { Bio } from "@/user/core/domain/entity/bio";
import { Email } from "@/user/core/domain/entity/email";
import { PasswordHash } from "@/user/core/domain/entity/passwordHash";
import { Role, RoleSchema } from "@/user/core/domain/entity/role";
import { Username } from "@/user/core/domain/entity/username";
import { describe, expect, it } from "vitest";
import { FakeUserRepository } from "../../contracts/repository/UserRepository.fake.test";
import { FakePasswordHasher } from "../contracts/passwordHasher/PasswordHasher.fake.test";
import { ChangePasswordUseCase } from "./ChangePasswordUseCase";

describe("ChangePasswordUseCase", () => {
	it("should change password", async () => {
		const repository = new FakeUserRepository();
		const passwordHasher = new FakePasswordHasher();

		const useCase = new ChangePasswordUseCase(repository, passwordHasher);

		const user = new User(new UniqueID(1), {
			username: new Username("john"),
			email: new Email("john@test.com"),
			passwordHash: new PasswordHash(
				await passwordHasher.hash("h12345678h"),
			),
			githubUrl: new Url("https://github.com/john"),
			bio: new Bio(""),
			registerDate: new Date(),
			role: new Role(RoleSchema.USER),
		});

		await repository.create(user);

		await useCase.execute({
			userId: user.id.value,
			previousPassword: "h12345678h",
			newPassword: "h123456789h",
			confirmPassword: "h123456789h",
		});

		expect(
			await passwordHasher.compare(
				"h123456789h",
				user.passwordHash.value,
			),
		).toBe(true);
	});

	it("should throw when password is invalid", async () => {
		const repository = new FakeUserRepository();
		const passwordHasher = new FakePasswordHasher();

		const useCase = new ChangePasswordUseCase(repository, passwordHasher);

		const user = new User(new UniqueID(1), {
			username: new Username("john"),
			email: new Email("john@test.com"),
			passwordHash: new PasswordHash(
				await passwordHasher.hash("h12345678h"),
			),
			githubUrl: new Url("https://github.com/john"),
			bio: new Bio(""),
			registerDate: new Date(),
			role: new Role(RoleSchema.USER),
		});

		await repository.create(user);

		await expect(
			useCase.execute({
				userId: user.id.value,
				previousPassword: "wrong-password",
				newPassword: "h123456789h",
				confirmPassword: "h123456789h",
			}),
		).rejects.toThrow("Invalid credentials");
	});

	it("should throw when user does not exist", async () => {
		const useCase = new ChangePasswordUseCase(
			new FakeUserRepository(),
			new FakePasswordHasher(),
		);

		await expect(
			useCase.execute({
				userId: new UniqueID(1).value,
				previousPassword: "wrong-password",
				newPassword: "h123456789h",
				confirmPassword: "h123456789h",
			}),
		).rejects.toThrow("Entity not found");
	});

	it("should throw when passwords do not match", async () => {
		const repository = new FakeUserRepository();
		const passwordHasher = new FakePasswordHasher();

		const useCase = new ChangePasswordUseCase(repository, passwordHasher);

		const user = new User(new UniqueID(1), {
			username: new Username("john"),
			email: new Email("john@test.com"),
			passwordHash: new PasswordHash(
				await passwordHasher.hash("h12345678h"),
			),
			githubUrl: new Url("https://github.com/john"),
			bio: new Bio(""),
			registerDate: new Date(),
			role: new Role(RoleSchema.USER),
		});

		await repository.create(user);

		await expect(
			useCase.execute({
				userId: user.id.value,
				previousPassword: "h12345678h",
				newPassword: "wrong-password",
				confirmPassword: "wrong-password2",
			}),
		).rejects.toThrow("Passwords do not match");
	});
});
