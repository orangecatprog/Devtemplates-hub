import type { Url } from "@/shared/core/domain/valueObjects/url";
import type { Bio } from "./bio";
import type { Email } from "./email";
import type { PasswordHash } from "./passwordHash";
import type { Role } from "./role";
import type { Username } from "./username";

export interface UserData {
	username: Username;
	email: Email;
	passwordHash: PasswordHash;
	githubUrl: Url;
	linkedinUrl?: Url | undefined;
	bio: Bio;
	registerDate: Date;
	role: Role;
}
