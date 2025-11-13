import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.tsx";
import { phoneNumberPattern } from "@/lib/regex.ts";

export function ContactInfoForm() {
  const formSchema = z.object({
    fullName: z.string().min(1),
    emailAddress: z.email().optional(),
    phoneNumber: z
      .string()
      .regex(phoneNumberPattern, { message: "Invalid phone number" })
      .optional(),
    address: z.string().optional(),
    linkedinUrL: z.url().optional(),
    website: z.url().optional(),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
      linkedinUrL: "",
      website: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="+526641234567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Av. Insurgentes Sur 1000, Colonia Del Valle, Benito Juárez, 03100 Ciudad de México, CDMX, México"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedinUrL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://linkedin.com/in/Paul2G"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="paul2g.dev" {...field} />
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
