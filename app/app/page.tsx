"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  totalTime: z.coerce.number().int().positive(),
  breakTime: z.coerce.number().int().positive(),
  areBreaksProportional: z.coerce.boolean().default(true),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      totalTime: 25,
      breakTime: 5,
      areBreaksProportional: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className={cn("m-16")}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          // className={cn("space-y-8")}
        >
          <section>
            <FormField
              control={form.control}
              name="totalTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How long would you like to jam?</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="25" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="breakTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    how long would you like your breaks to be?
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="25" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="areBreaksProportional"
              render={({ field }) => (
                <FormItem
                  className={cn(
                    "flex flex-row items-start space-x-3 space-y-0"
                  )}
                >
                  <FormControl>
                    <Checkbox
                      defaultChecked={field.value}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Want proportional breaks?</FormLabel>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <section className="py-6">
            <Button type="submit">Submit</Button>
          </section>
        </form>
      </Form>
    </main>
  );
}
