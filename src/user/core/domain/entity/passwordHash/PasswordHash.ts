import { ValueObject } from "@/shared/core/domain/valueObjects/base";
import { validatePasswordHash } from "./PasswordHash.schema";

export class PasswordHash extends ValueObject<string> {
	constructor(value: string) {
		const v_value = validatePasswordHash(value);
		super(v_value);
	}
}
