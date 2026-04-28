"use client";

import { useEffect, useMemo, useState } from "react";
import { headingFont, highlightFont } from "@/app/fonts";

const GREETING = "Hello There!";
const PREFIX = "I am ";
const NAME = "Gus";

const PHRASES = [
  [", a ", ["Frontend", true], " ", ["Developer", true]],
  [", a ", ["Product", true], " ", ["Designer", true]],
  [", designing thoughtful ", ["digital", true], " ", ["experiences", true]],
  [", building ", ["user", true], " ", ["centric", true], " ", "interfaces"]
] as const;

const SPEED = {
  type: 112,
  delete: 60,
  holdGreeting: 650,
  pauseAfterGreeting: 180,
  holdIntro: 320,
  holdPhrase: 1900,
};

type Phase =
  | "typingGreeting"
  | "holdingGreeting"
  | "deletingGreeting"
  | "typingPrefix"
  | "typingName"
  | "holdingIntro"
  | "typingPhrase"
  | "holdingPhrase"
  | "deletingPhrase";

type Part = string | readonly [string, true];

const textStyle = {
  fontSize: "clamp(2.7rem, 5vw, 5.8rem)",
  lineHeight: 1.08,
  letterSpacing: "0.02em",
} as const;

function flatten(parts: readonly Part[]) {
  return parts.map((part) => (typeof part === "string" ? part : part[0])).join("");
}

function sliceParts(parts: readonly Part[], count: number): Part[] {
  let remaining = count;
  const result: Part[] = [];

  for (const part of parts) {
    if (remaining <= 0) break;

    const text = typeof part === "string" ? part : part[0];

    if (remaining >= text.length) {
      result.push(part);
      remaining -= text.length;
      continue;
    }

    result.push(
      typeof part === "string"
        ? text.slice(0, remaining)
        : [text.slice(0, remaining), true]
    );
    break;
  }

  return result;
}

function renderParts(parts: readonly Part[]) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <span
        key={i}
        className={highlightFont.className}
        style={{ color: "var(--accent)", fontSize: "0.74em", lineHeight: 1 }}
      >
        {part[0]}
      </span>
    )
  );
}

export function TypedGreeting() {
  const [phase, setPhase] = useState<Phase>("typingGreeting");
  const [greeting, setGreeting] = useState("");
  const [prefix, setPrefix] = useState("");
  const [name, setName] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseCount, setPhraseCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const phrase = PHRASES[phraseIndex];
  const phraseText = useMemo(() => flatten(phrase), [phrase]);
  const visiblePhrase = useMemo(() => sliceParts(phrase, phraseCount), [phrase, phraseCount]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);

    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setGreeting("");
      setPrefix(PREFIX);
      setName(NAME);
      setPhraseCount(phraseText.length);
      setPhase("holdingPhrase");
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "typingGreeting":
        timeout =
          greeting.length < GREETING.length
            ? setTimeout(() => setGreeting(GREETING.slice(0, greeting.length + 1)), SPEED.type)
            : setTimeout(() => setPhase("holdingGreeting"), 0);
        break;

      case "holdingGreeting":
        timeout = setTimeout(() => setPhase("deletingGreeting"), SPEED.holdGreeting);
        break;

      case "deletingGreeting":
        timeout =
          greeting.length > 0
            ? setTimeout(() => setGreeting(GREETING.slice(0, greeting.length - 1)), SPEED.delete)
            : setTimeout(() => setPhase("typingPrefix"), SPEED.pauseAfterGreeting);
        break;

      case "typingPrefix":
        timeout =
          prefix.length < PREFIX.length
            ? setTimeout(() => setPrefix(PREFIX.slice(0, prefix.length + 1)), SPEED.type)
            : setTimeout(() => setPhase("typingName"), 0);
        break;

      case "typingName":
        timeout =
          name.length < NAME.length
            ? setTimeout(() => setName(NAME.slice(0, name.length + 1)), SPEED.type)
            : setTimeout(() => setPhase("holdingIntro"), 0);
        break;

      case "holdingIntro":
        timeout = setTimeout(() => setPhase("typingPhrase"), SPEED.holdIntro);
        break;

      case "typingPhrase":
        timeout =
          phraseCount < phraseText.length
            ? setTimeout(() => setPhraseCount((n) => n + 1), SPEED.type)
            : setTimeout(() => setPhase("holdingPhrase"), 0);
        break;

      case "holdingPhrase":
        timeout = setTimeout(() => setPhase("deletingPhrase"), SPEED.holdPhrase);
        break;

      case "deletingPhrase":
        timeout =
          phraseCount > 0
            ? setTimeout(() => setPhraseCount((n) => n - 1), SPEED.delete)
            : setTimeout(() => {
                setPhraseIndex((n) => (n + 1) % PHRASES.length);
                setPhase("typingPhrase");
              }, 0);
        break;
    }

    return () => clearTimeout(timeout);
  }, [phase, greeting, prefix, name, phraseCount, phraseText, reducedMotion]);

 const showCaret =
  !reducedMotion &&
  (phase === "typingGreeting" ||
    phase === "typingPrefix" ||
    phase === "typingName" ||
    phase === "typingPhrase");

  return (
    <div className="flex flex-col items-center text-center text-theme">
      <div className="w-[min(88vw,980px)] min-h-[1.3em]">
        <p className={headingFont.className} style={textStyle}>
          {greeting}
          {showCaret && phase === "typingGreeting" && (
            <span className="ml-1 inline-block animate-pulse text-theme-muted">|</span>
          )}
        </p>
      </div>

      <div className="w-[min(88vw,980px)] min-h-[2.6em]">
        <h1
          className={headingFont.className}
          style={{ ...textStyle, whiteSpace: "normal", wordBreak: "normal" }}
        >
          <span>{prefix}</span>
          <span
            className={highlightFont.className}
            style={{ color: "var(--accent)", fontSize: "0.74em", lineHeight: 1 }}
          >
            {name}
          </span>
          <span>{renderParts(visiblePhrase)}</span>
          {showCaret && phase !== "typingGreeting" && (
            <span className="ml-1 inline-block animate-pulse text-theme-muted">|</span>
          )}
        </h1>
      </div>
    </div>
  );
}