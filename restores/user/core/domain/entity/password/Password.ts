import { ValueObject } from "@/shared/core/domain/valueObjects/base";
import { validatePassword } from "./Password.schema";

export class Password extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validatePassword(super.value);
	}
}
