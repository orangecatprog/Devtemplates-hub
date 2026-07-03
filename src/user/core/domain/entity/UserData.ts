import type { Bio } from "./bio/Bio";
import type { Email } from "./email/Email";
import type { PasswordHash } from "./passwordHash/PasswordHash";
import type { Role } from "./role/Role";
import type { Username } from "./username/Username";
import type { URL } from "@shared/core/domain/url/URL";

export interface UserData {
	username: Username;
	email: Email;
	passwordHash: PasswordHash;
	githubUrl: URL;
	linkedinUrl: URL;
	bio: Bio;
	registerDate: Date;
	role: Role;
}
