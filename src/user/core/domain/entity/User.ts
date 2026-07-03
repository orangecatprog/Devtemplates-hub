import { Entity } from "@shared/core/domain/base/entity/Entity";
import type { UserData } from "./UserData";
import type { URL } from "@shared/core/domain/url/URL";
import type { Bio } from "./bio/Bio";
import type { Email } from "./email/Email";
import type { Username } from "./username/Username";
import type { Role } from "./role/Role";
import type { PasswordHash } from "./passwordHash/PasswordHash";

export class User extends Entity<UserData> {
	get username(): Username {
		return this.data.username;
	}

	get email(): Email {
		return this.data.email;
	}

	get githubUrl(): URL | undefined {
		return this.data.githubUrl;
	}

	get linkedinUrl(): URL | undefined {
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

	changeUsername(username: Username): void {
		this.data.username = username;
	}

	changeEmail(email: Email): void {
		this.data.email = email;
	}

	updateBio(bio: Bio): void {
		this.data.bio = bio;
	}

	changeGithubUrl(githubUrl: URL): void {
		this.data.githubUrl = githubUrl;
	}

	changePasswordHash(passwordHash: PasswordHash): void {
		this.data.passwordHash = passwordHash;
	}

	changeLinkedinUrl(linkedinUrl: URL): void {
		this.data.linkedinUrl = linkedinUrl;
	}

	passwordEqual(password: PasswordHash): boolean {
		return this.data.passwordHash.equals(password);
	}
}
