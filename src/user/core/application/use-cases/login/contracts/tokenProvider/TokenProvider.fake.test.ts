import type { User } from "@/user/core/domain/entity";
import type { TokenProvider } from "./TokenProvider";

export class FakeTokenProvider implements TokenProvider {
	generatedFor?: User;
	async generateToken(user: User): Promise<string> {
		this.generatedFor = user;
		return "fake-token" + user.username.value;
	}
}
