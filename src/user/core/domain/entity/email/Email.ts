import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { validateEmail } from "./Email.schema";

export class Email extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateEmail(super.value);
	}
}
