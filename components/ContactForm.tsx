"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import type { ContactFormFieldErrors } from "@/content/i18n/schema";
import { business } from "@/content/business";
import type { Locale } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_MESSAGE_MAX_LENGTH, contactFormSchema, type ContactFormValues } from "@/lib/validation";

interface ContactFormProps {
  locale: Locale;
  copy: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    honeypotLabel: string;
    serviceOptions: string[];
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    privacyNotice: string;
    fieldErrors: ContactFormFieldErrors;
  };
}

type FormStatus = "idle" | "success" | "error";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "d14ac511-8881-4fc7-aa54-4043f0454dc4";

function getFieldError(fieldErrors: ContactFormFieldErrors, field: keyof ContactFormFieldErrors) {
  return fieldErrors[field];
}

export function ContactForm({ locale, copy }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      company: ""
    }
  });
  const messageValue = watch("message") ?? "";

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone ?? "");
      formData.append("service", values.service);
      formData.append("message", values.message);
      formData.append("company", values.company ?? "");
      formData.append("from_name", business.name); 
      formData.append("subject", `${business.name} enquiry: ${values.service} - ${values.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Request failed");
      }

      trackEvent("contact_form_submit", {
        locale,
        service: values.service
      });

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  });

  return (
    <form
      className="section-card space-y-6 px-5 py-6 sm:px-8 sm:py-8"
      id="contact-form"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="name">
            {copy.nameLabel}
          </label>
          <input
            {...register("name")}
            className="focus-ring min-h-12 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-soft)]"
            id="name"
            placeholder={copy.namePlaceholder}
            type="text"
          />
          {errors.name ? (
            <p className="text-sm text-[var(--alert)]">{getFieldError(copy.fieldErrors, "name")}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="email">
            {copy.emailLabel}
          </label>
          <input
            {...register("email")}
            className="focus-ring min-h-12 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-soft)]"
            id="email"
            placeholder={copy.emailPlaceholder}
            type="email"
          />
          {errors.email ? (
            <p className="text-sm text-[var(--alert)]">{getFieldError(copy.fieldErrors, "email")}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="phone">
            {copy.phoneLabel}
          </label>
          <input
            {...register("phone")}
            className="focus-ring min-h-12 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-soft)]"
            id="phone"
            placeholder={copy.phonePlaceholder}
            type="tel"
          />
          {errors.phone ? (
            <p className="text-sm text-[var(--alert)]">{getFieldError(copy.fieldErrors, "phone")}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="service">
            {copy.serviceLabel}
          </label>
          <select
            {...register("service")}
            className="focus-ring min-h-12 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)]"
            id="service"
          >
            <option value="">{copy.servicePlaceholder}</option>
            {copy.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="text-sm text-[var(--alert)]">{getFieldError(copy.fieldErrors, "service")}</p>
          ) : null}
        </div>
      </div>

      <div className="sr-only">
        <label htmlFor="company">{copy.honeypotLabel}</label>
        <input {...register("company")} autoComplete="off" id="company" tabIndex={-1} type="text" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--foreground)]" htmlFor="message">
          {copy.messageLabel}
        </label>
        <textarea
          {...register("message")}
          className="focus-ring min-h-40 w-full rounded-[1.6rem] border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-soft)]"
          id="message"
          maxLength={CONTACT_MESSAGE_MAX_LENGTH}
          placeholder={copy.messagePlaceholder}
        />
        <div className="flex items-start justify-between gap-4">
          {errors.message ? (
            <p className="text-sm text-[var(--alert)]">{getFieldError(copy.fieldErrors, "message")}</p>
          ) : (
            <span />
          )}
          <p className="shrink-0 text-sm text-[var(--muted)]">
            {messageValue.length}/{CONTACT_MESSAGE_MAX_LENGTH}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">{copy.privacyNotice}</p>
        <button
          className="primary-button focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-deep)] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? copy.submittingLabel : copy.submitLabel}
        </button>
      </div>

      <div aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="rounded-2xl bg-[var(--surface-sage)] px-4 py-3 text-[var(--primary-deep)]">
            <span className="font-semibold">{copy.successTitle}</span> {copy.successBody}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-[var(--foreground)]">
            <span className="font-semibold">{copy.errorTitle}</span> {copy.errorBody}
          </p>
        ) : null}
      </div>
    </form>
  );
}
