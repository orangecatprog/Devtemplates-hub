import { ValueObject } from "@/shared/core/domain/valueObjects/base";
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
