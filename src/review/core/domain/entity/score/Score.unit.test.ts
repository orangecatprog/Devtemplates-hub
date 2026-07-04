import { describe, expect, it } from "vitest";
import { Score } from "./Score";

describe("Score", () => {
	it("should create with a valid score", () => {
		const score = new Score(10);
		expect(score.value).toBe(10);
	});
	it("should throw for a score less than 0", () => {
		expect(() => new Score(-1)).toThrow("Score cannot be less than 0.");
	});
	it("should throw for a score greater than 5", () => {
		expect(() => new Score(6)).toThrow("Score cannot be greater than 5.");
	});
});
