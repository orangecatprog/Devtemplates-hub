import type { PasswordHasher } from "./PasswordHasher";

export class FakePasswordHasher implements PasswordHasher {
	async hash(password: string): Promise<string> {
		return "fake-hash" + password;
	}
}
