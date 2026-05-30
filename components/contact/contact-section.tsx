"use client";

import { useEffect, useState } from "react";
import { headingFont, highlightFont } from "@/app/fonts";
import { contactSection, socialLinks } from "@/data/contact";
import {
  sectionEyebrowClassName,
  sectionSummaryClassName,
  sectionTitleClassName,
  sectionTitleHighlightStyle,
} from "@/lib/typography";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "ui-field rounded-xl px-4 py-3 outline-none transition";

const iconLinkClassName =
  "ui-button inline-flex size-11 items-center justify-center rounded-full text-xl transition";

const cvButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-dashed border-[var(--accent)] px-5 py-3 text-sm text-theme-accent shadow-[0_0_20px_rgba(114,156,174,0.16)] transition hover:bg-[var(--button-bg-hover)] hover:text-theme sm:px-6";

function SubmissionMessage({
  state,
}: {
  state: SubmissionState;
}) {
  if (state !== "success" && state !== "error") {
    return null;
  }

  const message =
    state === "success"
      ? "Message sent! I will be in touch soon."
      : "Something went wrong while sending your message. Please try again or contact me through LinkedIn.";

  const style = state === "success" ? "ui-status-success" : "ui-status-error";

  return (
    <div className={`rounded-xl border px-4 py-3 text-sm ${style}`}>
      {message}
    </div>
  );
}

export function ContactSection() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  useEffect(() => {
    if (submissionState !== "success" && submissionState !== "error") {
      return;
    }

    const clearTimeoutId = window.setTimeout(() => {
      setSubmissionState("idle");
    }, 3500);

    return () => {
      window.clearTimeout(clearTimeoutId);
    };
  }, [submissionState]);

  async function handleSubmit(form: HTMLFormElement) {
    const formData = new FormData(form);

    setSubmissionState("submitting");

    try {
      const response = await fetch(contactSection.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setSubmissionState("error");
        return;
      }

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 min-h-screen px-6 py-28 text-theme sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-14">
        <header className="max-w-3xl">
          <p className={sectionEyebrowClassName}>{contactSection.eyebrow}</p>

          <h2 className={`${headingFont.className} ${sectionTitleClassName}`}>
            Let&apos;s
            <br />
            <span
              className={highlightFont.className}
              style={sectionTitleHighlightStyle}
            >
              Connect.
            </span>
          </h2>

          <p className={sectionSummaryClassName}>{contactSection.intro}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className={iconLinkClassName}
              >
                <i aria-hidden="true" className={link.icon} />
              </a>
            ))}

            <a
              className={`${headingFont.className} ${cvButtonClassName}`}
              href={contactSection.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Gustavo Antonelli CV"
            >
              Download CV
            </a>
          </div>
        </header>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void handleSubmit(event.currentTarget);
          }}
          className="ui-card rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <SubmissionMessage state={submissionState} />

            <label className="grid gap-2">
              <span
                className={`${headingFont.className} text-lg text-theme sm:text-xl`}
              >
                Name
              </span>
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                className={fieldClassName}
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span
                className={`${headingFont.className} text-lg text-theme sm:text-xl`}
              >
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className={fieldClassName}
                placeholder="your.email@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span
                className={`${headingFont.className} text-lg text-theme sm:text-xl`}
              >
                Message
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className={`${fieldClassName} resize-y`}
                placeholder="Tell me what you would like to discuss..."
              />
            </label>

            <input
              type="hidden"
              name="_subject"
              value="New portfolio contact form submission"
            />

            <div className="mt-2 flex justify-center">
              <button
                type="submit"
                disabled={submissionState === "submitting"}
                className={`${headingFont.className} ui-button w-fit rounded-full px-6 py-3 text-lg transition hover:shadow-[0_0_24px_rgba(114,156,174,0.25)] disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {submissionState === "submitting" ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
