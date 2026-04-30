import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Incorrect email"),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "Must contain a capital letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
