export function validateUniqueID(value: number): number {
	if (value < 1) {
		throw new Error("UniqueID must be greater than 0");
	}
	return value;
}
