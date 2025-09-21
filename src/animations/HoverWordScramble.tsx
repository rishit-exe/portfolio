import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

type Props = {
  duration?: number;          // seconds
  speed?: number;             // ScrambleText speed
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const HoverWordScramble: React.FC<Props> = ({
  duration = 0.8,
  speed = 0.6,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapRef.current || !pRef.current) return;
    wrapRef.current.style.height = `${pRef.current.getBoundingClientRect().height}px`;
  }, []);

  useEffect(() => {
    if (!pRef.current || !wrapRef.current) return;

    const split = SplitText.create(pRef.current, {
      type: "words,chars",
      wordsClass: "scr-word inline-block align-baseline",
      charsClass: "scr-ch inline-block align-baseline whitespace-pre leading-[inherit]",
      // @ts-ignore
      reduceWhiteSpace: false,
    });

    // Propagate gradient to wrappers when inside .text-gradient
    (split.words as HTMLElement[]).forEach((w) => {
      if (w.closest(".text-gradient")) {
        w.classList.add("text-gradient");
        // optional: also put on chars if your utility requires it on the element that paints text
        w.querySelectorAll<HTMLElement>(".scr-ch").forEach((c) => c.classList.add("text-gradient"));
      }
    });

    // Cache originals + lock width to avoid reflow
    (split.chars as HTMLElement[]).forEach((el) => {
      el.dataset.original = el.textContent || "";
      const w = el.getBoundingClientRect().width;
      el.style.width = `${w || 0}px`;
      el.style.verticalAlign = "baseline";
    });

    const handleEnter = (e: Event) => {
      const word = e.currentTarget as HTMLElement;
      if (word.dataset.busy === "1") return;
      word.dataset.busy = "1";

      const chars = Array.from(word.querySelectorAll<HTMLElement>(".scr-ch"));
      let done = 0;

      chars.forEach((c) => {
        gsap.to(c, {
          duration,
          ease: "none",
          scrambleText: {
            text: c.dataset.original || "",
            chars: scrambleChars,
            speed,
          },
          onComplete: () => {
            c.textContent = c.dataset.original || "";
            gsap.set(c, { y: 0 });
            if (++done === chars.length) word.dataset.busy = "0";
          },
        });
      });
    };

    const words = split.words as HTMLElement[];
    words.forEach((w) => w.addEventListener("pointerenter", handleEnter));

    const ro = new ResizeObserver(() => {
      if (!wrapRef.current || !pRef.current) return;
      wrapRef.current.style.height = `${pRef.current.getBoundingClientRect().height}px`;
    });
    ro.observe(pRef.current);

    return () => {
      words.forEach((w) => w.removeEventListener("pointerenter", handleEnter));
      ro.disconnect();
      split.revert();
      if (wrapRef.current) wrapRef.current.style.height = "";
    };
  }, [duration, speed, scrambleChars]);

  return (
    <div ref={wrapRef} className={`relative ${className}`} style={style}>
      <p ref={pRef} className="m-0 leading-tight whitespace-pre-wrap">
        {children}
      </p>
    </div>
  );
};

export default HoverWordScramble;
