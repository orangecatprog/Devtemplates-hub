import { ValueObject } from "../base/valueObject/ValueObject";

export class UniqueID extends ValueObject<number> {
	constructor(value: number) {
		super(value);
		this.validate();
	}

	private validate(): void {
		if (this.value < 1) {
			throw new Error("UniqueID must be greater than 0");
		}
	}
}
