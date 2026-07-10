export interface Repository<T> {
	getById(id: number): Promise<T>;
	getAll(): Promise<T[]>;
	create(entity: T): Promise<T>;
	update(entity: T): Promise<T>;
	delete(entity: T): Promise<T>;
}
