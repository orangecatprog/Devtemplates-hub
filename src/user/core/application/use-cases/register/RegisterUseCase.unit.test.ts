import { describe, expect, it } from "vitest";

import { FakeIdGenerator } from "@/shared/core/application/contracts/idGenerator/idGenerator.fake.test";
import { FakePasswordHasher } from "../../contracts/passwordHasher/PasswordHasher.fake.test";
import { FakeUserRepository } from "../../contracts/repository/UserRepository.fake.test";
import { RegisterUseCase } from "./RegisterUseCase";

describe("RegisterUseCase", () => {
	it("should register a new user", async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeIdGenerator = new FakeIdGenerator();
		const fakePasswordHasher = new FakePasswordHasher();

		const useCase = new RegisterUseCase(
			fakeUserRepository,
			fakeIdGenerator,
			fakePasswordHasher,
		);

		const result = await useCase.execute({
			username: "john",
			email: "john@test.com",
			password: "12345678",
			confirmPassword: "12345678",
			githubUrl: "https://github.com/john",
		});

		expect(fakeIdGenerator.generate().value).toBe(2);

		expect(result).toEqual({
			id: 1,
			username: "john",
			email: "john@test.com",
		});
	});
	it("should throw an error if passwords do not match", async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeIdGenerator = new FakeIdGenerator();
		const fakePasswordHasher = new FakePasswordHasher();

		const useCase = new RegisterUseCase(
			fakeUserRepository,
			fakeIdGenerator,
			fakePasswordHasher,
		);

		await expect(
			useCase.execute({
				username: "john",
				email: "john@test.com",
				password: "12345678",
				confirmPassword: "1234567",
				githubUrl: "https://github.com/john",
			}),
		).rejects.toThrow("Passwords do not match");
	});
});
