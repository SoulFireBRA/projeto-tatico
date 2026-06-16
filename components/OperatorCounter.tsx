"use client";

import { useEffect, useState } from "react";

export default function OperatorCounter({
  target = 1437,
  label = "OPERADORES ATIVOS",
}: {
  target?: number;
  label?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 36;
    const stepTime = 1600 / steps;
    const increment = target / steps;
    let current = 0;

    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex flex-col items-center border border-pt-green/40 bg-black/60 px-6 py-4">
      <span className="text-3xl font-bold tracking-widest text-pt-green text-glow">
        {String(count).padStart(4, "0")}
      </span>
      <span className="mt-1 text-xs tracking-[0.2em] text-pt-green/60">
        {label}
      </span>
    </div>
  );
}
