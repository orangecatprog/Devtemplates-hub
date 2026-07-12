import type { UseCase } from "@/shared/core/application/use-cases/base";
import type { UserRepository } from "../../contracts/repository";
import type { TokenProvider } from "../contracts/tokenProvider";
import type { InputRefreshTokenDTO, OutputRefreshTokenDTO } from "./dtos";

export class RefreshTokenUseCase implements UseCase<
	InputRefreshTokenDTO,
	OutputRefreshTokenDTO
> {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly tokenProvider: TokenProvider,
	) {}

	async execute(input: InputRefreshTokenDTO): Promise<OutputRefreshTokenDTO> {
		const userId = await this.tokenProvider.verifyRefreshToken(
			input.refreshToken,
		);

		if (!userId.value) {
			throw new Error("Invalid refresh token");
		}

		const user = await this.userRepository.getById(userId.value);
		const accessToken = await this.tokenProvider.generateAccessToken(user);
		const refreshToken =
			await this.tokenProvider.generateRefreshToken(user);
		return {
			accessToken,
			refreshToken,
		};
	}
}
