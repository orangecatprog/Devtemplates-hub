import type { UniqueID } from "@/shared/core/domain/valueObjects/uniqueID";
import type { Repository } from "./Repository";

export class FakeRepository<
	T extends { id: UniqueID },
> implements Repository<T> {
	private readonly entities: T[] = [];

	async create(entity: T): Promise<T> {
		this.entities.push(entity);
		return entity;
	}

	async update(entity: T): Promise<T> {
		const index = this.entities.findIndex((e) => e.id === entity.id);

		if (index !== -1) {
			this.entities[index] = entity;
		}

		return entity;
	}

	async delete(entity: T): Promise<void> {
		const index = this.entities.findIndex((e) => e.id === entity.id);

		if (index !== -1) {
			this.entities.splice(index, 1);
		}
	}
	async getById(id: number): Promise<T> {
		const entity = this.entities.find((e) => e.id.value === id);

		if (!entity) {
			throw new Error("Entity not found");
		}

		return entity;
	}

	async getAll(): Promise<T[]> {
		return [...this.entities];
	}
}
