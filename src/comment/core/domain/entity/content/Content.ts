import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { validateContent } from "./Content.schema";

export class Content extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateContent(this.value);
	}
}
