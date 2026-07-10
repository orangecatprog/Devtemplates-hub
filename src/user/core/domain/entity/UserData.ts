import type { Bio } from "./bio/Bio";
import type { Email } from "./email/Email";
import type { PasswordHash } from "./passwordHash/PasswordHash";
import type { Role } from "./role/Role";
import type { Username } from "./username/Username";
import type { Url } from "@/shared/core/domain/valueObjects/url/Url";

export interface UserData {
	username: Username;
	email: Email;
	passwordHash: PasswordHash;
	githubUrl: Url;
	linkedinUrl: Url | undefined;
	bio: Bio;
	registerDate: Date;
	role: Role;
}
