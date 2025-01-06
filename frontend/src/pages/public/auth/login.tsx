import * as React from "react";

import { AuthLayout } from "@/layout/auth";
import { LoginForm } from "@/components/templates/login-form";

export const LoginPage: React.FC = () => (
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
);
