import { describe, expect, it } from "vitest";
import { Score } from "./Score";

describe("Score", () => {
	it("should create with a valid score", () => {
		const score = new Score(3);
		expect(score.value).toBe(3);
	});
	describe("Less than 0", () => {
		it("should create with a score with exactly 0", () => {
			const score = new Score(0);
			expect(score.value).toBe(0);
		});
		it("should throw for a score with less than 0", () => {
			expect(() => new Score(-1)).toThrow("Score cannot be less than 0.");
		});
	});
	describe("More than 5", () => {
		it("should create with a score with exactly 5", () => {
			const score = new Score(5);
			expect(score.value).toBe(5);
		});
		it("should throw for a score greater than 5", () => {
			expect(() => new Score(6)).toThrow(
				"Score cannot be greater than 5.",
			);
		});
	});
});
