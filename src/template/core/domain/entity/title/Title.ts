import { ValueObject } from "@/shared/core/domain/valueObjects/base/ValueObject";
import { validateTitle } from "./Title.schema";

export class Title extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateTitle(super.value);
	}
}
