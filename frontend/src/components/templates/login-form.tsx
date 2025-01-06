import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const LoginForm: React.FC<React.ComponentPropsWithoutRef<"form">> = ({
  className,
  ...props
}) => (
  <form className={cn("flex flex-col gap-6", className)} {...props}>
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-medium">Login to your account</h1>
      <p className="text-balance text-sm text-muted-foreground">
        Enter your email below to login
      </p>
    </div>
    <div className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" placeholder="joedoe" required />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
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
);
