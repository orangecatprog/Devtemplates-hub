import type { PasswordHasher } from "./PasswordHasher";

export class FakePasswordHasher implements PasswordHasher {
	async hash(password: string): Promise<string> {
		return "fake-hash" + password;
	}
	async compare(password: string, hash: string): Promise<boolean> {
		return hash.includes(password);
	}
}
