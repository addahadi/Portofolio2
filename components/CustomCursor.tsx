"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only active on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
      style={{ willChange: "transform" }}
    >
      <div
        className="rounded-full bg-accent transition-all duration-150 ease-out"
        style={{
          width: hovered ? 30 : 12,
          height: hovered ? 30 : 12,
          marginLeft: hovered ? -9 : 0,
          marginTop: hovered ? -9 : 0,
          opacity: 0.85,
        }}
      />
    </div>
  );
}
