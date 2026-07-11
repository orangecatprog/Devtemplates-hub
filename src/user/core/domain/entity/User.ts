import { Entity } from "@/shared/core/domain/entities/base";
import type { UserData } from "./UserData";

import type { Url } from "@/shared/core/domain/valueObjects/url";
import type { Bio } from "./bio";
import type { Email } from "./email";
import type { PasswordHash } from "./passwordHash";
import type { Role } from "./role";
import type { Username } from "./username";

export class User extends Entity<UserData> {
	// GETTERS
	get username(): Username {
		return this.data.username;
	}

	get email(): Email {
		return this.data.email;
	}

	get githubUrl(): Url {
		return this.data.githubUrl;
	}

	get linkedinUrl(): Url | undefined {
		return this.data.linkedinUrl;
	}

	get bio(): Bio {
		return this.data.bio;
	}

	get registerDate(): Date {
		return this.data.registerDate;
	}

	get role(): Role {
		return this.data.role;
	}

	get passwordHash(): PasswordHash {
		return this.data.passwordHash;
	}

	// MUTATORS

	changeUsername(username: Username): void {
		this.data.username = username;
	}

	changeEmail(email: Email): void {
		this.data.email = email;
	}

	updateBio(bio: Bio): void {
		this.data.bio = bio;
	}

	changeGithubUrl(githubUrl: Url): void {
		this.data.githubUrl = githubUrl;
	}

	changeLinkedinUrl(linkedinUrl: Url | undefined): void {
		this.data.linkedinUrl = linkedinUrl;
	}

	changePasswordHash(passwordHash: PasswordHash): void {
		this.data.passwordHash = passwordHash;
	}

	changeRole(role: Role): void {
		this.data.role = role;
	}

	// HELPERS
	passwordEqual(password: PasswordHash): boolean {
		return this.data.passwordHash.equals(password);
	}
}
