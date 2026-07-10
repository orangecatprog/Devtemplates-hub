import { ValueObject } from "@/shared/core/domain/valueObjects/base/ValueObject";
import { validateCategoryDescription } from "./Description.schema";

export class CategoryDescription extends ValueObject<string> {
	constructor(value: string) {
		const v_value = validateCategoryDescription(value);
		super(v_value);
	}
}
