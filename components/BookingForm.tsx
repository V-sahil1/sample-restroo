"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { LOCATIONS } from "@/lib/data";
import { Icon, btn } from "@/components/ui";

type Kind = "reserve" | "event" | "contact";

const COPY: Record<Kind, { submit: string; done: string; doneBody: string }> = {
  reserve: {
    submit: "Request Reservation",
    done: "Your table request is in.",
    doneBody:
      "Our concierge will confirm your reservation by email within the hour. We look forward to welcoming you.",
  },
  event: {
    submit: "Send Event Enquiry",
    done: "Your enquiry has been received.",
    doneBody:
      "Our private dining director will be in touch within one business day to begin crafting your evening.",
  },
  contact: {
    submit: "Send Message",
    done: "Thank you for writing to us.",
    doneBody: "A member of our concierge team will reply shortly.",
  },
};

const TIMES = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];

function Field({
  label,
  htmlFor,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-space-xs ${className}`}>
      <label htmlFor={htmlFor} className="text-label-sm uppercase tracking-[0.12em] text-forest">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-body-sm text-[#ba1a1a]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function BookingForm({ kind }: { kind: Kind }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null);
  const today = new Date().toISOString().slice(0, 10);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Record<string, string> = {};

    if (!data.name?.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) next.email = "Please enter a valid email address.";
    if (kind !== "contact") {
      if (!data.date) next.date = "Please choose a date.";
      else if (data.date < today) next.date = "Please choose a date in the future.";
    }
    if (kind === "reserve" && !data.time) next.time = "Please choose a time.";
    if (kind === "contact" && !data.message?.trim()) next.message = "Please write a short message.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(data);
  }

  if (submitted) {
    const copy = COPY[kind];
    return (
      <div className="flex flex-col items-center gap-space-md rounded-xl border border-[rgba(197,160,89,0.45)] bg-forest p-space-xl text-center text-white" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-pill border border-gold/40 bg-forest-mid">
          <Icon name="check" className="text-3xl text-gold-bright" />
        </span>
        <h3 className="font-display text-headline-md">{copy.done}</h3>
        {kind === "reserve" && (
          <p className="text-label-lg uppercase tracking-wider text-gold-light">
            {submitted.guests} guests · {submitted.date} · {submitted.time} ·{" "}
            {LOCATIONS.find((l) => l.id === submitted.location)?.city}
          </p>
        )}
        <p className="max-w-md text-body-md text-mint/90">{copy.doneBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className={`${btn.gold} mt-space-sm px-space-lg py-space-sm`}
        >
          Make Another Request
        </button>
      </div>
    );
  }

  const invalid = (k: string) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${k}-error` } : {};

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-space-lg rounded-xl border border-[rgba(14,42,29,0.08)] bg-white p-space-lg shadow-[0_16px_40px_-12px_rgba(14,42,29,0.12),0_2px_6px_0_rgba(14,42,29,0.04)] sm:grid-cols-2 sm:p-space-xl"
    >
      {kind !== "contact" && (
        <Field label="Location" htmlFor={`${kind}-location`} className="sm:col-span-2">
          <select id={`${kind}-location`} name="location" className="field" defaultValue="london">
            {LOCATIONS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.title}
              </option>
            ))}
          </select>
        </Field>
      )}

      {kind !== "contact" && (
        <>
          <Field label="Date" htmlFor={`${kind}-date`} error={errors.date}>
            <input id={`${kind}-date`} name="date" type="date" min={today} suppressHydrationWarning className="field" {...invalid("date")} />
          </Field>
          {kind === "reserve" ? (
            <Field label="Time" htmlFor={`${kind}-time`} error={errors.time}>
              <select id={`${kind}-time`} name="time" className="field" defaultValue="" {...invalid("time")}>
                <option value="" disabled>
                  Select a time
                </option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          ) : (
            <Field label="Occasion" htmlFor={`${kind}-occasion`}>
              <select id={`${kind}-occasion`} name="occasion" className="field" defaultValue="Celebration">
                {["Celebration", "Corporate Dinner", "Wedding Reception", "Product Launch", "Full Buyout"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
          )}
          <Field label="Guests" htmlFor={`${kind}-guests`} className="sm:col-span-2">
            <select id={`${kind}-guests`} name="guests" className="field" defaultValue={kind === "reserve" ? "2" : "12"}>
              {(kind === "reserve"
                ? ["1", "2", "3", "4", "5", "6", "7", "8"]
                : ["8", "12", "20", "40", "60", "80", "120"]
              ).map((g) => (
                <option key={g} value={g}>
                  {g} {g === "1" ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </Field>
        </>
      )}

      <Field label="Full Name" htmlFor={`${kind}-name`} error={errors.name}>
        <input id={`${kind}-name`} name="name" autoComplete="name" className="field" {...invalid("name")} />
      </Field>
      <Field label="Email" htmlFor={`${kind}-email`} error={errors.email}>
        <input id={`${kind}-email`} name="email" type="email" autoComplete="email" className="field" {...invalid("email")} />
      </Field>
      <Field label="Phone (optional)" htmlFor={`${kind}-phone`} className="sm:col-span-2">
        <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" className="field" />
      </Field>
      <Field
        label={kind === "contact" ? "Message" : "Special Requests"}
        htmlFor={`${kind}-message`}
        error={errors.message}
        className="sm:col-span-2"
      >
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={4}
          className="field resize-y"
          placeholder={kind === "contact" ? "How can we help?" : "Dietary notes (Jain, Halal, Vegan), celebrations, seating preferences…"}
          {...invalid("message")}
        />
      </Field>

      <div className="flex flex-col gap-space-sm sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm text-ink">
          {kind === "reserve" ? "Tables are held for 15 minutes past the reservation time." : "We usually respond within one business day."}
        </p>
        <button type="submit" className={`${btn.forest} px-space-xl py-space-md`}>
          {COPY[kind].submit}
        </button>
      </div>
    </form>
  );
}
