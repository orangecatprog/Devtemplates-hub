import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		exclude: [
			"node_modules",
			"dist",
			"**/*.mock.test.ts",
			"**/*.fake.test.ts",
			"./deprecated/**/*.ts",
		],
		projects: [
			{
				test: {
					name: "unit",
					include: ["**/*.unit.test.ts"],
				},
			},
			{
				test: {
					name: "integration",
					include: ["**/*.integration.test.ts"],
				},
			},
			{
				test: {
					name: "e2e",
					include: ["**/*.e2e.test.ts"],
				},
			},
		],
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
