import { ValueObject } from "@shared/core/domain/base/valueObject/ValueObject";
import { UsernameSchema } from "./Username.schema";

export class Username extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		UsernameSchema.parse(super.value);
	}
}
