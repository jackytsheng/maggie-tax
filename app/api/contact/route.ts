import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload) {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: "Validation failed.", errors: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  // Placeholder for a future email provider integration such as Resend or Formspree.
  return NextResponse.json({
    ok: true,
    message: "Enquiry received."
  });
}
