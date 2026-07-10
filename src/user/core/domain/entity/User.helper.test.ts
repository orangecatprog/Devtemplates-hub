import { Bio } from "./bio/Bio";
import { Email } from "./email/Email";
import { PasswordHash } from "./passwordHash/PasswordHash";
import { Role } from "./role/Role";
import { Username } from "./username/Username";
import { Url } from "@/shared/core/domain/valueObjects/url/Url";

export function validUserData() {
	return {
		username: new Username("john_doe"),
		email: new Email("john@email.com"),
		passwordHash: new PasswordHash("hashed"),
		githubUrl: new Url("https://github.com/john"),
		linkedinUrl: new Url("https://linkedin.com/in/john"),
		bio: new Bio("developer with 10 years of experience"),
		registerDate: new Date(),
		role: Role.USER,
	};
}
