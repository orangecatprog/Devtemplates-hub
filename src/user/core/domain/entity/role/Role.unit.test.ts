import { describe, expect, it } from "vitest";
import { Role } from "./Role";
import { RoleSchema } from "./Role.schema";

describe("Role", () => {
	it("canManageUsers", () => {
		const role = new Role(RoleSchema.ADMIN);
		expect(role.canManageUsers()).toBe(true);

		const role2 = new Role(RoleSchema.MODERATOR);
		expect(role2.canManageUsers()).toBe(false);

		const role3 = new Role(RoleSchema.USER);
		expect(role3.canManageUsers()).toBe(false);
	});

	it("canManageEntities", () => {
		const role = new Role(RoleSchema.ADMIN);
		expect(role.canManageEntities()).toBe(true);

		const role2 = new Role(RoleSchema.MODERATOR);
		expect(role2.canManageEntities()).toBe(true);

		const role3 = new Role(RoleSchema.USER);
		expect(role3.canManageEntities()).toBe(false);
	});

	it("canManageTemplates", () => {
		const role = new Role(RoleSchema.ADMIN);
		expect(role.canManageTemplates()).toBe(true);

		const role2 = new Role(RoleSchema.MODERATOR);
		expect(role2.canManageTemplates()).toBe(true);

		const role3 = new Role(RoleSchema.USER);
		expect(role3.canManageTemplates()).toBe(true);
	});
});
