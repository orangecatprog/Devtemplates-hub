import { describe, it, expect } from "vitest";

import { User } from "./User";
import { UniqueID } from "@/shared/core/domain/uniqueID/UniqueID";
import { validUserData } from "./User.helper.test";
import { Username } from "./username/Username";
import { Email } from "./email/Email";
import { Bio } from "./bio/Bio";
import { URL } from "@/shared/core/domain/url/URL";
import { PasswordHash } from "./passwordHash/PasswordHash";

describe("User", () => {
	it("should create a user with valid data", () => {
		const user = new User(new UniqueID(1), validUserData());
		expect(user).toBeDefined();
	});

	it("should preserve the provided id", () => {
		const user = new User(new UniqueID(1), validUserData());
		expect(user.id.value).toBe(1);
	});

	it("should expose username correctly", () => {
		const user = new User(new UniqueID(1), validUserData());
		expect(user.username.value).toBe("john_doe");
	});

	it("should change username", () => {
		const user = new User(new UniqueID(1), validUserData());

		user.changeUsername(new Username("new_name"));

		expect(user.username.value).toBe("new_name");
	});

	it("should change email", () => {
		const user = new User(new UniqueID(1), validUserData());

		user.changeEmail(new Email("new@email.com"));

		expect(user.email.value).toBe("new@email.com");
	});

	it("should update bio", () => {
		const user = new User(new UniqueID(1), validUserData());

		user.updateBio(new Bio("new bio with 10 years of experience"));

		expect(user.bio.value).toBe("new bio with 10 years of experience");
	});

	it("should set github url", () => {
		const user = new User(new UniqueID(1), validUserData());

		const url = new URL("https://github.com/new");
		user.changeGithubUrl(url);

		expect(user.githubUrl?.value).toBe("https://github.com/new");
	});

	it("should set linkedin url", () => {
		const user = new User(new UniqueID(1), validUserData());

		const url = new URL("https://linkedin.com/in/new");
		user.changeLinkedinUrl(url);

		expect(user.linkedinUrl?.value).toBe("https://linkedin.com/in/new");
	});

	it("should update password hash", () => {
		const user = new User(new UniqueID(1), validUserData());

		const newHash = new PasswordHash("new-hash");

		user.changePasswordHash(newHash);

		expect(user.passwordEqual(newHash)).toBe(true);
	});

	it("should be equal when ids match", () => {
		const user1 = new User(new UniqueID(1), validUserData());
		const user2 = new User(new UniqueID(1), validUserData());

		expect(user1.equals(user2)).toBe(true);
	});

	it("should not be equal when ids differ", () => {
		const user1 = new User(new UniqueID(1), validUserData());
		const user2 = new User(new UniqueID(2), validUserData());

		expect(user1.equals(user2)).toBe(false);
	});
});
