import { ITodoType } from "../../shared/components/todos-card/todos-card.component";

export interface ITodo{
    id?: Number;
    title:string;
    descripcion:string;
    status:ITodoType;
    created_at?:string;
    updated_at?:string;
}