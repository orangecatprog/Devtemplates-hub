import { ValueObject } from "../base/ValueObject";
import { validateUniqueID } from "./UniqueID.schema";
import type { UniqueIDType } from "./UniqueID.type";

export class UniqueID extends ValueObject<UniqueIDType> {
	constructor(value: UniqueIDType) {
		const v_value = validateUniqueID(value);
		super(v_value);
	}
}
