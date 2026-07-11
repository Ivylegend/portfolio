"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const projectTypes = ["Web App", "Mobile App", "AI / Agents", "Marketplace", "Fintech", "Website"];

type ContactFormProps = {
  variant?: "compact" | "full";
  source?: string;
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ variant = "full", source = "Website contact form" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const isFull = variant === "full";
  const isSending = status === "sending";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedTypes = formData.getAll("projectTypes").map(String);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      projectTypes: selectedTypes,
      source,
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent. Please try again.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Message sent. I will reply as soon as I can.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Message could not be sent. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl surface-card p-7 md:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5">
        <div className={isFull ? "grid gap-5 sm:grid-cols-2" : "grid gap-5"}>
          <Field label="Your name" id={`${variant}-name`} name="name" placeholder="Ada Lovelace" required />
          <Field label="Email" id={`${variant}-email`} name="email" type="email" placeholder="you@company.com" required />
        </div>

        <div className={isFull ? "grid gap-5 sm:grid-cols-2" : "grid gap-5"}>
          <Field label="Company" id={`${variant}-company`} name="company" placeholder="Optional" />
          {isFull && <Field label="Budget (USD)" id="budget" name="budget" placeholder="e.g. $10k - $40k" />}
        </div>

        {isFull && (
          <div>
            <div className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Project type</div>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <label key={type} className="cursor-pointer">
                  <input type="checkbox" name="projectTypes" value={type} className="peer sr-only" />
                  <span className="inline-flex items-center rounded-full hairline px-3 py-1.5 text-xs text-muted-foreground transition-colors peer-checked:bg-foreground peer-checked:text-background hover:text-foreground">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div>
          <label htmlFor={`${variant}-message`} className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Project</label>
          <textarea
            id={`${variant}-message`}
            name="message"
            rows={isFull ? 6 : 5}
            required
            minLength={10}
            placeholder={isFull ? "What are you building? Where are you stuck? What does success look like?" : "What are you building?"}
            className="w-full resize-none rounded-2xl hairline bg-surface px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Send message"} <ArrowRight className="h-4 w-4" aria-hidden />
        </button>

        {feedback && (
          <p className={`text-sm ${status === "success" ? "text-foreground" : "text-destructive"}`} role="status">
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-full hairline bg-surface px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
