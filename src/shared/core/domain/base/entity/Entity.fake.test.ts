import { Entity } from "./Entity";

interface FakeEntityData {
	name: string;
}

export class FakeEntity extends Entity<FakeEntityData> {
	constructor(id: number, data: FakeEntityData) {
		super(id, data);
	}
}
