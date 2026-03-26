import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .max(60)
  .optional()
  .or(z.literal(""));

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  phone: optionalText,
  service: z.string().trim().min(1).max(120),
  message: z.string().trim().min(20).max(2000),
  company: z.string().trim().max(120).optional().default("")
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
