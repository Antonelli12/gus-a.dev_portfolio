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
  "rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#729CAE]/70 focus:bg-black/35";

const linkButtonClassName =
  "rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 transition hover:border-[#729CAE]/50 hover:bg-[#729CAE]/10 hover:text-white";

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

  const style =
    state === "success"
      ? "border-[#729CAE]/50 bg-[#729CAE]/10 text-white shadow-[0_0_24px_rgba(114,156,174,0.16)]"
      : "border-red-400/40 bg-red-500/10 text-red-100";

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

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const form = event.target;

    if (!(form instanceof HTMLFormElement)) {
      setSubmissionState("error");
      return;
    }

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
      className="scroll-mt-16 min-h-screen px-6 py-28 text-white sm:px-10 lg:px-16"
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
          onSubmit={(event) => void handleSubmit(event.nativeEvent as SubmitEvent)}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-5">
            <SubmissionMessage
              state={submissionState}
              isVisible={isMessageVisible}
            />

            <label className="grid gap-2">
              <span
                className={`${headingFont.className} text-lg text-white sm:text-xl`}
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
                className={`${headingFont.className} text-lg text-white sm:text-xl`}
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
                className={`${headingFont.className} text-lg text-white sm:text-xl`}
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
              className={`${headingFont.className} mt-2 w-fit rounded-full border border-[#729CAE]/60 bg-[#729CAE]/10 px-6 py-3 text-lg text-white transition hover:bg-[#729CAE]/20 hover:shadow-[0_0_24px_rgba(114,156,174,0.25)] disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {submissionState === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}