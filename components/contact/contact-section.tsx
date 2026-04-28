"use client";

import { useEffect, useState, type ReactNode } from "react";
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

const linkButtonClassName =
  "ui-button rounded-full px-5 py-2 text-sm transition";

function ContactLinkButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternalLink = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      className={linkButtonClassName}
    >
      {children}
    </a>
  );
}

function SubmissionMessage({
  state,
  isVisible,
}: {
  state: SubmissionState;
  isVisible: boolean;
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
    <div
      className={`rounded-xl border px-4 py-3 text-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${style}`}
    >
      {message}
    </div>
  );
}

export function ContactSection() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (submissionState !== "success" && submissionState !== "error") {
      return;
    }

    setIsMessageVisible(true);

    const fadeTimeoutId = window.setTimeout(() => {
      setIsMessageVisible(false);
    }, 3000);

    const clearTimeoutId = window.setTimeout(() => {
      setSubmissionState("idle");
    }, 3500);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(clearTimeoutId);
    };
  }, [submissionState]);

  async function handleSubmit(form: HTMLFormElement) {
    const formData = new FormData(form);

    setSubmissionState("submitting");
    setIsMessageVisible(false);

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
              connect.
            </span>
          </h2>

          <p className={sectionSummaryClassName}>{contactSection.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ContactLinkButton href={contactSection.cvHref}>
              Download CV
            </ContactLinkButton>

            {socialLinks.map((link) => (
              <ContactLinkButton key={link.href} href={link.href}>
                {link.label}
              </ContactLinkButton>
            ))}
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
            <SubmissionMessage
              state={submissionState}
              isVisible={isMessageVisible}
            />

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

            <button
              type="submit"
              disabled={submissionState === "submitting"}
              className={`${headingFont.className} ui-button mt-2 w-fit rounded-full px-6 py-3 text-lg transition hover:shadow-[0_0_24px_rgba(114,156,174,0.25)] disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {submissionState === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}