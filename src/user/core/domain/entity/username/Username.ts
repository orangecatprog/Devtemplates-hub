import { ValueObject } from "@shared/core/domain/base/valueObject/ValueObject";
import { validateUsername } from "./Username.schema";

export class Username extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateUsername(super.value);
	}
}
