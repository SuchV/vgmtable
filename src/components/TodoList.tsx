"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TodoTask } from "@prisma/client"
import { Trash2 } from "lucide-react"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title should be at least 2 characters long",
  }).max(40, {
    message: "Title should be at most 40 characters long",
  }),
});

interface TodoListProps {
  todos: TodoTask[];
}

export default function TodoList({
  todos,
}: TodoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id.localeCompare(a.id);
    }
    return a.completed ? 1 : -1
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-between">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>My tasklist 1</FormLabel>
                <FormControl className="rounded-none rounded-l-lg">
                  <Input placeholder="..." {...field} />
                </FormControl>
                <FormDescription>
                  You can add your tasks above
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="rounded-none rounded-r-lg">Add</Button>
        </form>
      </Form>
      <div className="space-y-2">
        {todosSorted.map(todo => (
          <div key={todo.id} className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
              <input
                type="checkbox"
                checked={todo.completed}
                className="scale-125"
              />
              <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
              </span>
            </label>
            <button
              className="p-2 ">
              <Trash2 size={20} className="text-gray-500" />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}