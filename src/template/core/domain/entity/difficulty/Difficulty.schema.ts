import { Difficulty } from "./Difficulty";

export function validateDifficulty(
	value: unknown,
): asserts value is Difficulty {
	if (!Object.values(Difficulty).includes(value as Difficulty)) {
		throw new Error("Invalid difficulty");
	}
}
