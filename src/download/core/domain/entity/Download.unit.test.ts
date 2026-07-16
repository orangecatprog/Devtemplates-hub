import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import { describe, expect, it } from "vitest";
import { Download } from "./Download";
import { validDownloadData } from "./Download.helper.test";

describe("Download", () => {
	it("should create a download with valid data", () => {
		const download = new Download(new UniqueID(1), validDownloadData());
		expect(download).toBeDefined();
	});
	describe("Date", () => {
		it("should expose date correctly", () => {
			const data = validDownloadData();
			const download = new Download(new UniqueID(1), data);
			expect(download.date.getTime()).toBe(data.date.getTime());
		});
	});
	describe("User ID", () => {
		it("should expose user id correctly", () => {
			const download = new Download(new UniqueID(1), validDownloadData());
			expect(download.userId.value).toBe(
				validDownloadData().userId.value,
			);
		});
	});
	describe("Template ID", () => {
		it("should expose template id correctly", () => {
			const download = new Download(new UniqueID(1), validDownloadData());
			expect(download.templateId.value).toBe(
				validDownloadData().templateId.value,
			);
		});
	});
});
