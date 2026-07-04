import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { validateCategoryDescription } from "./Description.schema";

export class CategoryDescription extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	private validate(): void {
		validateCategoryDescription(super.value);
	}
}
