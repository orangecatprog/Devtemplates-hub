import { describe, expect, it } from "vitest";

import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Url } from "@/shared/core/domain/valueObjects/url";
import { User } from "@/user/core/domain/entity";
import { Bio } from "@/user/core/domain/entity/bio";
import { Email } from "@/user/core/domain/entity/email";
import { PasswordHash } from "@/user/core/domain/entity/passwordHash";
import { Role, RoleSchema } from "@/user/core/domain/entity/role";
import { Username } from "@/user/core/domain/entity/username";
import { FakeUserRepository } from "../../contracts/repository/UserRepository.fake.test";
import { FakeTokenProvider } from "../contracts/tokenProvider/TokenProvider.fake.test";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

describe("RefreshTokenUseCase", () => {
	it("should generate a new access token and refresh token", async () => {
		const repository = new FakeUserRepository();
		const tokenProvider = new FakeTokenProvider();

		const user = new User(new UniqueID(1), {
			username: new Username("john"),
			email: new Email("john@test.com"),
			passwordHash: new PasswordHash("hash"),
			githubUrl: new Url("https://github.com/john"),
			bio: new Bio(""),
			registerDate: new Date(),
			role: new Role(RoleSchema.USER),
		});

		await repository.create(user);

		const useCase = new RefreshTokenUseCase(repository, tokenProvider);

		const result = await useCase.execute({
			refreshToken: "fake-access-token:1",
		});

		expect(result).toEqual({
			accessToken: "fake-access-token:1",
			refreshToken: "fake-refresh-token:1",
		});
	});

	it("should verify the refresh token", async () => {
		const repository = new FakeUserRepository();
		const tokenProvider = new FakeTokenProvider();

		const user = new User(new UniqueID(1), {
			username: new Username("john"),
			email: new Email("john@test.com"),
			passwordHash: new PasswordHash("hash"),
			githubUrl: new Url("https://github.com/john"),
			bio: new Bio(""),
			registerDate: new Date(),
			role: new Role(RoleSchema.USER),
		});

		await repository.create(user);

		const useCase = new RefreshTokenUseCase(repository, tokenProvider);

		await useCase.execute({
			refreshToken: "fake-access-token: 1",
		});

		expect(
			tokenProvider.verifyRefreshToken("fake-access-token: 1"),
		).toBeDefined();
	});

	it("should throw when refresh token is invalid", async () => {
		const repository = new FakeUserRepository();
		const tokenProvider = new FakeTokenProvider();

		const useCase = new RefreshTokenUseCase(repository, tokenProvider);

		await expect(
			useCase.execute({
				refreshToken: "fake-access-token:invalid-token",
			}),
		).rejects.toThrow("Invalid refresh token");
	});

	it("should throw when user does not exist", async () => {
		const repository = new FakeUserRepository();
		const tokenProvider = new FakeTokenProvider();

		const useCase = new RefreshTokenUseCase(repository, tokenProvider);

		await expect(
			useCase.execute({
				refreshToken: "fake-access-token: 1",
			}),
		).rejects.toThrow("Entity not found");
	});
});
