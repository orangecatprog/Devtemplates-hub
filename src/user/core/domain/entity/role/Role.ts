import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import type { RoleSchema } from "./Role.schema";

export class Role extends ValueObject<RoleSchema> {
	// TODO: Add permissions to the role
}
