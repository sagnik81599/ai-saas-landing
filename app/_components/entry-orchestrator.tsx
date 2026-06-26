"use client";

import { useEffect } from "react";

export function EntryOrchestrator() {
  useEffect(() => {
    const root = document.documentElement;
    const frame = window.requestAnimationFrame(() => {
      root.dataset.pageReady = "true";
    });

    return () => {
      window.cancelAnimationFrame(frame);
      delete root.dataset.pageReady;
    };
  }, []);

  return <div aria-hidden="true" className="entry-sweep" />;
}
