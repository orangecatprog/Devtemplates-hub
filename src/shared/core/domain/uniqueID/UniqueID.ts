export class UniqueID {
	constructor(public readonly value: number) {
		this.verifyData();
	}

	private verifyData(): void {
		if (this.value < 1) {
			throw new Error("UniqueID must be greater than 0");
		}
	}
}
