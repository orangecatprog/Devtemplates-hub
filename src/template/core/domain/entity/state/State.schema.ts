import { State } from "./State";

export function validateState(value: unknown): asserts value is State {
	if (!Object.values(State).includes(value as State)) {
		throw new Error("Invalid state");
	}
}
