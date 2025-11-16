import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResume } from "@/hooks/use-resume";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function SummaryForm() {
  const { summary, setSummary } = useResume();

  const form = useForm({
    defaultValues: { summary },
    resolver: zodResolver(z.object({ summary: z.string().optional() })),
  });

  function onSubmit(values: { summary?: string }) {
    console.log(values);
    setSummary(values.summary);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Write about your career" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit"> Save</Button>
      </form>
    </Form>
  );
}
