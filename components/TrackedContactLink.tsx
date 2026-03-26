"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface TrackedContactLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  eventName: string;
  eventParameters?: Record<string, string | number | boolean | undefined>;
}

export function TrackedContactLink({
  children,
  className,
  eventName,
  eventParameters,
  ...props
}: TrackedContactLinkProps) {
  return (
    <a
      {...props}
      className={cn("focus-ring", className)}
      onClick={(event) => {
        props.onClick?.(event);
        trackEvent(eventName, eventParameters);
      }}
    >
      {children}
    </a>
  );
}
