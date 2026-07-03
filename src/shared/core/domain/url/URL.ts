import { ValueObject } from "../base/valueObject/ValueObject";
import { URLSchema } from "./URL.schema";

export class URL extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		URLSchema.parse(super.value);
	}
}
