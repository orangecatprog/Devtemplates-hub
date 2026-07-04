export function validateScore(value: number): void {
	if (value < 0) {
		throw new Error("Score cannot be less than 0.");
	}
	if (value > 5) {
		throw new Error("Score cannot be greater than 5.");
	}
}
