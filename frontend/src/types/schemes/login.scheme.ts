import { z } from "zod";

export const formLoginSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3)
    .max(20),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6)
    .max(20),
});
