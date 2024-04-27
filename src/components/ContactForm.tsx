"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { raleway } from "./Fonts";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Password must be at least 2 characters",
  }),
  messagetext: z.string().min(5, {
    message: "Your message must at least be 5 characters",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      messagetext: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "w-[600px] bg-background/60 py-14 text-foreground rounded-2xl mt-12 flex flex-col items-center",
          raleway.className,
        )}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-1 text-lg text-white">Name:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-[500px] px-5 py-4 text-white border-background/0 h-[50px] text-lg rounded-xl bg-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className="ml-1 text-lg text-white">E-Mail:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-[500px] px-5 py-4 text-white border-background/0 h-[50px] text-lg rounded-xl bg-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messagetext"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className="ml-1 text-lg text-white">
                Message:
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="w-[500px] px-5 py-4 text-white border-background/0 h-[50px] text-lg rounded-xl bg-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={cn(
            "bg-background/20 mt-10 w-[180px] h-[50px] text-lg border-foreground rounded-xl hover:scale-105 active:scale-90 transition hover:bg-foreground",
            raleway.className,
          )}
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
