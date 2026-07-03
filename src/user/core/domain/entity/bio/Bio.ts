import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { BioSchema } from "./Bio.schema";

export class Bio extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		BioSchema.parse(super.value);
	}
}
