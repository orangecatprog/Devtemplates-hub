export abstract class ValueObject<T> {
	constructor(protected readonly _value: T) {}

	public equals(other: ValueObject<T>): boolean {
		return this._value === other._value;
	}

	public get value(): T {
		return this._value;
	}
}
