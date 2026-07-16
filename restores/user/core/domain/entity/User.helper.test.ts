import { Url } from "@/shared/core/domain/valueObjects/url";
import { Bio } from "./bio";
import { Email } from "./email";
import { PasswordHash } from "./passwordHash";
import { Role, RoleSchema } from "./role";
import type { UserData } from "./UserData";
import { Username } from "./username";

export function validUserData(): UserData {
	return {
		username: new Username("john_doe"),
		email: new Email("john@email.com"),
		passwordHash: new PasswordHash("hashed"),
		githubUrl: new Url("https://github.com/john"),
		linkedinUrl: new Url("https://linkedin.com/in/john"),
		bio: new Bio("developer with 10 years of experience"),
		registerDate: new Date(),
		role: new Role(RoleSchema.USER),
	};
}
