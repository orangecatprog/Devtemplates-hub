import type { UniqueID } from "../../../domain/valueObjects/uniqueID/UniqueID";

export interface IdGenerator {
	generate(): UniqueID;
}
