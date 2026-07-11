import { describe, expect, it } from "vitest";

import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { Url } from "@/shared/core/domain/valueObjects/url";
import { Bio } from "./bio";
import { Email } from "./email";
import { PasswordHash } from "./passwordHash";
import { Role, RoleSchema } from "./role";
import { User } from "./User";
import { validUserData } from "./User.helper.test";
import { Username } from "./username";

describe("User", () => {
	it("should create a user with valid data", () => {
		const user = new User(new UniqueID(1), validUserData());
		expect(user).toBeDefined();
	});
	describe("Username", () => {
		it("should expose username correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.username.value).toBe("john_doe");
		});

		it("should change username", () => {
			const user = new User(new UniqueID(1), validUserData());

			user.changeUsername(new Username("new_name"));

			expect(user.username.value).toBe("new_name");
		});
	});
	describe("Email", () => {
		it("should expose email correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.email.value).toBe("john@email.com");
		});

		it("should change email", () => {
			const user = new User(new UniqueID(1), validUserData());

			user.changeEmail(new Email("new@email.com"));

			expect(user.email.value).toBe("new@email.com");
		});
	});
	describe("Bio", () => {
		it("should expose bio correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.bio.value).toBe(
				"developer with 10 years of experience",
			);
		});

		it("should update bio", () => {
			const user = new User(new UniqueID(1), validUserData());

			user.updateBio(new Bio("new bio with 10 years of experience"));

			expect(user.bio.value).toBe("new bio with 10 years of experience");
		});
	});
	describe("Github URL", () => {
		it("should expose github url correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.githubUrl?.value).toBe("https://github.com/john");
		});

		it("should set github url", () => {
			const user = new User(new UniqueID(1), validUserData());

			const url = new Url("https://github.com/new");
			user.changeGithubUrl(url);

			expect(user.githubUrl?.value).toBe("https://github.com/new");
		});
	});
	describe("Linkedin URL", () => {
		it("should expose linkedin url correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.linkedinUrl?.value).toBe(
				"https://linkedin.com/in/john",
			);
		});

		it("should set linkedin url", () => {
			const user = new User(new UniqueID(1), validUserData());

			const url = new Url("https://linkedin.com/inew");
			user.changeLinkedinUrl(url);

			expect(user.linkedinUrl?.value).toBe("https://linkedin.com/inew");
		});
	});
	describe("Password Hash", () => {
		it("should compare password hashes correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.equals(user)).toBe(true);
		});
		it("should not compare password hashes correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			const newUser = new User(new UniqueID(2), validUserData());

			expect(user.equals(newUser)).toBe(false);
		});

		it("should update password hash", () => {
			const user = new User(new UniqueID(1), validUserData());

			const newHash = new PasswordHash("new-hash");

			user.changePasswordHash(newHash);

			expect(user.passwordEqual(newHash)).toBe(true);
		});
	});
	describe("Register date", () => {
		it("should expose register date correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.registerDate).toBeInstanceOf(Date);
		});
	});
	describe("Role", () => {
		it("should expose role correctly", () => {
			const user = new User(new UniqueID(1), validUserData());
			expect(user.role.value).toBe(RoleSchema.USER);
		});
		it("should change role", () => {
			const user = new User(new UniqueID(1), validUserData());

			user.changeRole(new Role(RoleSchema.ADMIN));

			expect(user.role.value).toBe(RoleSchema.ADMIN);
		});
	});
});
