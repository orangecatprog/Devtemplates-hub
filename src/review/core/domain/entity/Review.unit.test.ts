import { describe, expect, it } from "vitest";
import { validReviewData } from "./Review.helper.test";
import { Review } from "./Review";
import { Score } from "./score/Score";
import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";

describe("Review", () => {
	it("should create a review with valid data", () => {
		const review = new Review(new UniqueID(1), validReviewData());
		expect(review).toBeDefined();
	});
	describe("Score", () => {
		it("should expose score correctly", () => {
			const review = new Review(new UniqueID(1), validReviewData());
			expect(review.score.value).toBe(validReviewData().score.value);
		});
		it("should change score", () => {
			const review = new Review(new UniqueID(1), validReviewData());

			review.changeScore(new Score(2));

			expect(review.score.value).toBe(2);
		});
	});
	describe("User ID", () => {
		it("should expose user id correctly", () => {
			const review = new Review(new UniqueID(1), validReviewData());
			expect(review.userId.value).toBe(validReviewData().userId.value);
		});
	});
	describe("Template ID", () => {
		it("should expose template id correctly", () => {
			const review = new Review(new UniqueID(1), validReviewData());
			expect(review.templateId.value).toBe(
				validReviewData().templateId.value,
			);
		});
	});
});
