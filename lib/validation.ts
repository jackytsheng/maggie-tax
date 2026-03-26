import { z } from "zod";

export const CONTACT_MESSAGE_MAX_LENGTH = 2000;

const optionalPhone = z
  .string()
  .trim()
  .max(60)
  .refine((value) => value === "" || /^\+?\d+$/.test(value), {
    message: "Phone number must contain only digits and an optional leading plus sign."
  });

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  phone: optionalPhone,
  service: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(CONTACT_MESSAGE_MAX_LENGTH),
  company: z.string().trim().max(120).optional().default("")
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
