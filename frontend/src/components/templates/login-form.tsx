import * as React from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/app/context";
import { DEFAULT_MESSAGES } from "@/helpers/messages";
import { formLoginSchema } from "@/types/schemes/login.scheme";
import { useLoginUserMutation } from "@/providers/hooks/useLoginUserMutation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export const LoginForm: React.FC = () => {
  const { setUser } = React.useContext(AppContext);
  const { mutateAsync } = useLoginUserMutation({
    onSuccess: (data) => {
      if (data?.id) {
        setUser({ ...data });

        toast.success(DEFAULT_MESSAGES.LOGIN.SUCCESS);
      }
    },
    onError: () => {
      toast.error(DEFAULT_MESSAGES.LOGIN.ERROR);
    },
  });

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formLoginSchema>) => {
    void mutateAsync({
      input: {
        username: data.username,
        password: data.password,
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-medium">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to login
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>

                  <FormControl>
                    <Input required placeholder="joedoe" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <Input
                      required
                      type="password"
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isValid}
          >
            Login
          </Button>
        </div>

        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            contact us
          </a>
        </div>
      </form>
    </Form>
  );
};
