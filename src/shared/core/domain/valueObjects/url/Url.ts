import { ValueObject } from "../../base/valueObject/ValueObject";
import { validateUrl } from "./Url.schema";

export class Url extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateUrl(super.value);
	}
}
