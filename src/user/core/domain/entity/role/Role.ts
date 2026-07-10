import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { RoleSchema } from "./Role.schema";

export class Role extends ValueObject<RoleSchema> {
	canManageUsers(): boolean {
		return this.value === RoleSchema.ADMIN;
	}

	canManageEntities(): boolean {
		return (
			this.value === RoleSchema.ADMIN || this.value === RoleSchema.MODERATOR
		);
	}

	canManageTemplates(): boolean {
		return (
			this.value === RoleSchema.ADMIN ||
			this.value === RoleSchema.MODERATOR ||
			this.value === RoleSchema.USER
		);
	}
}
