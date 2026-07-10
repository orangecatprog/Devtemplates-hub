import { ValueObject } from "@/shared/core/domain/valueObjects/base/ValueObject";
import { validateName } from "./Name.schema";

export class Name extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateName(super.value);
	}
}
