import TodoItem from "./TodoItem";
import { db } from "@/lib/db";
import { TodoTask } from '@prisma/client'

interface TodoListProps {
    todos: TodoTask[];
    onCompletedChange: (id: string, completed: boolean) => void;
    // onDelete: (id: string) => void;
}

export default function TodoList({
    todos,
    onCompletedChange,
    // onDelete,
}: TodoListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id.localeCompare(a.id);
        }
        return a.completed ? 1 : -1
    })
    return (
        <>
            <div className="space-y-2">
                {todosSorted.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onCompletedChange={onCompletedChange}
                        // onDelete={onDelete}
                    />
                ))}
            </div>
            {todos.length === 0 && (
                <p className="text-center text-sm text-gray-500"> This todos feels lonely, add something here</p>
            )}
        </>
    );
}