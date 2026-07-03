import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { PasswordSchema } from "./Password.schema";

export class Password extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		PasswordSchema.parse(super.value);
	}
}
