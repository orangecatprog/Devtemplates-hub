import { ValueObject } from "../base/ValueObject";
import { validateUniqueID } from "./UniqueID.schema";

export class UniqueID extends ValueObject<number> {
	constructor(value: number) {
		const v_value = validateUniqueID(value);
		super(v_value);
	}
}
