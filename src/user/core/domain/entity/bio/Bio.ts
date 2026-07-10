import { ValueObject } from "@/shared/core/domain/valueObjects/base/ValueObject";
import { validateBio } from "./Bio.schema";

export class Bio extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateBio(super.value);
	}
}
