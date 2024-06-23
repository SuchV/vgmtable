import TodoList from "@/components/TodoList/TodoList";
import { db } from "@/lib/db";

export default async function Page() {
    const todos = await db.todoTask.findMany({
        where: {},
    });
    return (
        <div className="py-10 h-screen space-y-5">
            <h1 className="font-bold text-center text-white text-5xl ">Tasklist</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5 overflow-y-auto">
                <TodoList
                    todos={todos} 
                />
            </div>
        </div>
    );
};