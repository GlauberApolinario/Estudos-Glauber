import { connection } from "..";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    limit_date: string,
    creator_id: string
){
    await connection('tbl_todo_list_tasks')
    .insert({
        id,
        title,
        description,
        limit_date,
        creator_id
    })
}