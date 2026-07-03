export abstract class Entity<T> {
	constructor(
		protected readonly _id: number,
		protected readonly data: T,
	) {}

	public get id(): number {
		return this._id;
	}

	public equals(other: Entity<T>): boolean {
		return this._id === other._id;
	}
}
