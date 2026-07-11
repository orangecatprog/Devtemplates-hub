import { ValueObject } from "@/shared/core/domain/valueObjects/base";
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
