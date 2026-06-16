"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  speed = 45,
  startDelay = 0,
  className = "",
  showCursor = true,
  as: Tag = "span",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      setChars(0);
      interval = setInterval(() => {
        setChars((prev) => {
          if (prev >= text.length) {
            if (interval) clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <Tag className={className}>
      {text.slice(0, chars)}
      {showCursor && <span className="cursor-blink">_</span>}
    </Tag>
  );
}
