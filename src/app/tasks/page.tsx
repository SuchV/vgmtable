"use client";
import AddTodoForm from "@/components/AddTodoForm";
import useTodos from "@/hooks/useTodos";
import TodoList from "@/components/TodoList";
import TodoSummary from "@/components/TodoSummary";
import Image from "next/image";

export default function Page() {
    const {
        todos,
        addTodo,
        setTodoCompleted,
        deleteTodo,
        deleteAllCompletedTodos,
    } = useTodos();

    return (
        <div className="py-10 h-screen space-y-5">
            <h1 className="font-bold text-3xk text-center text-white text-xl ">Tasklist</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5 overflow-y-auto">
                <AddTodoForm
                    onSubmit={addTodo}
                />
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                    onDelete={deleteTodo}
                />
            </div>
            <TodoSummary
                todos={todos}
                deleteAllCompleted={deleteAllCompletedTodos}
            />
        </div>
    );
};