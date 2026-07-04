import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { validateDescription } from "./Description.schema";

export class Description extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateDescription(super.value);
	}
}
