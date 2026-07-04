import { ValueObject } from "@/shared/core/domain/base/valueObject/ValueObject";
import { validateSlug } from "./Slug.schema";

export class Slug extends ValueObject<string> {
	constructor(value: string) {
		super(value);
		this.validate();
	}

	validate(): void {
		validateSlug(super.value);
	}
}
