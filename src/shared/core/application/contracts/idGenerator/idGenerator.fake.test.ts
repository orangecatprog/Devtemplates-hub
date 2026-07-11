import { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID/UniqueID";
import type { IdGenerator } from "./idGenerator";

export class FakeIdGenerator implements IdGenerator {
	private id: number = 1;

	generate(): UniqueID {
		return new UniqueID(this.id++);
	}
}
