"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { TodoTask } from "@prisma/client";
import axios from "axios";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title should be at least 2 characters long",
    }).max(40, {
        message: "Title should be at most 40 characters long",
    }),
});


export default function TodoListAdd() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //   title: "",
        // },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await axios.post("/api/tasks", values);
            form.reset();
            router.refresh();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    // Check how dynamic fiels work
    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-between">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="grow">
                            <FormLabel>My tasklist</FormLabel>
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
                <Button
                    type="submit"
                    className="rounded-none rounded-r-lg"
                    disabled={form.formState.isSubmitting || !form.formState.isDirty}
                >Add
                </Button>
            </form>
        </FormProvider>
    )
}