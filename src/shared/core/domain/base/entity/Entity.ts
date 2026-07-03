import type { UniqueID } from "../../uniqueID/UniqueID";

export abstract class Entity<T> {
	constructor(
		protected readonly _id: UniqueID,
		protected readonly data: T,
	) {}

	public get id(): UniqueID {
		return this._id;
	}

	public equals(other: Entity<T>): boolean {
		return this._id === other._id;
	}
}
