import type { UniqueID } from "../../valueObjects/uniqueID/UniqueID";

export interface IdGenerator {
	generate(): UniqueID;
}
