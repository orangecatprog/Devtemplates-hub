import { ValueObject } from "./ValueObject";

export class FakeValueObject extends ValueObject<string> {
	constructor(value: string) {
		super(value);
	}
}
