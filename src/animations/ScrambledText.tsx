import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pRef = useRef<HTMLParagraphElement | null>(null);

  // 1) lock container height to the paragraph's natural height
  useLayoutEffect(() => {
    if (!wrapRef.current || !pRef.current) return;
    const h = pRef.current.getBoundingClientRect().height;
    wrapRef.current.style.height = `${h}px`;
  }, []);

  useEffect(() => {
    if (!pRef.current || !wrapRef.current) return;

    // 2) split the ONE visible paragraph (no overlay)
    const split = SplitText.create(pRef.current, {
      type: "chars",
      charsClass:
        "scramble-char inline-block align-baseline whitespace-pre leading-[inherit]",
      // keep spaces
      // @ts-ignore
      reduceWhiteSpace: false,
    });

    // cache original characters
    split.chars.forEach((el) => {
      const c = el as HTMLElement;
      c.dataset.content = c.textContent || "";
      // harden metrics so nothing sits above baseline
      c.style.lineHeight = "inherit";
      c.style.verticalAlign = "baseline";
      c.style.transform = "translate3d(0,0,0)";
      c.style.willChange = "contents";
    });

    let ticking = false;
    const handleMove = (e: PointerEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        split.chars.forEach((el) => {
          const c = el as HTMLElement;
          const { left, top, width, height } = c.getBoundingClientRect();
          const dx = e.clientX - (left + width / 2);
          const dy = e.clientY - (top + height / 2);
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            gsap.to(c, {
              overwrite: true,
              duration: duration * (1 - dist / radius),
              scrambleText: {
                text: c.dataset.content || "",
                chars: scrambleChars,
                speed,
              },
              ease: "none",
              // 3) absolutely ensure we end on the baseline & no transforms left
              onComplete: () => {
                c.style.transform = "none";
                gsap.set(c, { y: 0 });
              },
            });
          }
        });
        ticking = false;
      });
    };

    const el = wrapRef.current;
    el.addEventListener("pointermove", handleMove);

    // re-lock height on resize
    const ro = new ResizeObserver(() => {
      if (!wrapRef.current || !pRef.current) return;
      wrapRef.current.style.height = `${pRef.current.getBoundingClientRect().height}px`;
    });
    ro.observe(pRef.current);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      ro.disconnect();
      split.revert();
      if (wrapRef.current) wrapRef.current.style.height = "";
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={wrapRef} className={`relative ${className}`} style={style}>
      <p
        ref={pRef}
        className="m-0 leading-relaxed whitespace-pre-wrap"
        // optional: disable kerning so browser doesn't try clever positioning
        style={{ fontKerning: "none" }}
      >
        {children}
      </p>
    </div>
  );
};

export default ScrambledText;
