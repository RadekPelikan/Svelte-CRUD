import type { UUID } from "crypto";
import type { UpsertFormProps } from "./Props";

export interface IModelService<T> {
    Get(id: UUID): Promise<T>;
    GetAll(): Promise<T[]>;
    getPaged(page: number): Promise<T[]> ;
	getMaxPages(): Promise<number>;
    GetCreateForm(): UpsertFormProps;
    GetUpdateForm(id: UUID): Promise<UpsertFormProps>;
}
