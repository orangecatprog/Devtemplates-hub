import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { User } from "@/user/core/domain/entity";
import type { TokenProvider } from "./TokenProvider";

export class FakeTokenProvider implements TokenProvider {
	generatedFor?: User;

	async generateAccessToken(user: User): Promise<string> {
		return `fake-access-token:${user.id.value}`;
	}

	async generateRefreshToken(user: User): Promise<string> {
		return `fake-refresh-token:${user.id.value}`;
	}

	async verifyAccessToken(token: string): Promise<UniqueID> {
		return this.parseToken(token, "fake-access-token:");
	}

	async verifyRefreshToken(token: string): Promise<UniqueID> {
		return this.parseToken(token, "fake-refresh-token:");
	}

	private parseToken(token: string, prefix: string): UniqueID {
		console.log({ token, prefix });

		const value = Number(token.slice(prefix.length - 1));

		console.log({ value });

		return new UniqueID(value);
	}
}
