import { ValueObject } from "@/shared/core/domain/valueObjects/base/ValueObject";
import { validatePasswordHash } from "./PasswordHash.schema";

export class PasswordHash extends ValueObject<string> {
	constructor(value: string) {
		const v_value = validatePasswordHash(value);
		super(v_value);
	}
}
