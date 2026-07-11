import { ValueObject } from "@/shared/core/domain/valueObjects/base";
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
