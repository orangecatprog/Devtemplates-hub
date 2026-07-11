import type { UniqueIDType } from "./UniqueID.type";

export function validateUniqueID(value: UniqueIDType): UniqueIDType {
	if (value < 1) {
		throw new Error("UniqueID must be greater than 0");
	}
	return value;
}
