import { ValueObject } from "@/shared/core/domain/valueObjects/base/ValueObject";
import { validateTemplateDescription } from "./Description.schema";

export class TemplateDescription extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateTemplateDescription(super.value);
	}
}
