import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { validateScore } from "./Score.schema";

export class Score extends ValueObject<number> {
	constructor(value: number) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateScore(this.value);
	}
}
