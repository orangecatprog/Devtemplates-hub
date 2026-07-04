import { Role } from "./Role";

export function validateRole(value: unknown): asserts value is Role {
	if (!Object.values(Role).includes(value as Role)) {
		throw new Error("Invalid role");
	}
}
