import { ValueObject } from "@/shared/core/domain/valueObjects/base";
import { validateSlug } from "./Slug.schema";

export class Slug extends ValueObject<string> {
	constructor(value: string) {
		const v_value = validateSlug(value);
		super(v_value);
	}
}
