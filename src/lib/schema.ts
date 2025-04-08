import { z } from "zod";

// Step 1 Schema
export const step1Schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

// Step 2 Schema
export const step2Schema = z.object({
  street: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z
    .string()
    .min(5, "Zip must be at least 5 digits")
    .regex(/^\d+$/, "Zip must be numeric"),
});

// // Step 3 Base Schema (not refined yet)
// export const step3Schema = z.object({
//   username: z.string().min(4, "Username must be at least 4 characters"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   confirmPassword: z.string(),
// });

// // ✅ Merge base schemas
// const baseFullSchema = step1Schema.merge(step2Schema).merge(step3Schema);

// // ✅ Apply password match refinement AFTER merging
// export const fullSchema = baseFullSchema.refine(
//   (data) => data.password === data.confirmPassword,
//   {
//     path: ["confirmPassword"],
//     message: "Passwords do not match",
//   }
// );

export const step3Schema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password must be at least 6 characters"),
});

// ✅ Merge all schemas first
const baseFullSchema = step1Schema.merge(step2Schema).merge(step3Schema);

// ✅ Apply refinement for password match AFTER merging
export const fullSchema = baseFullSchema.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});




// Optional: Inferred Type
export type FormData = z.infer<typeof fullSchema>;




