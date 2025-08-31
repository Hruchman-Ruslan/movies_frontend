"use client";

import { useState, useEffect } from "react";
import { PosterSize, BackdropSize } from "@/types/movie";

export function useImageSize() {
  const [posterSize, setPosterSize] = useState<PosterSize>("w500");
  const [backdropSize, setBackdropSize] = useState<BackdropSize>("w1280");

  useEffect(() => {
    function updateSizes() {
      const width = window.innerWidth;

      if (width < 640) setPosterSize("w185");
      else if (width < 1024) setPosterSize("w342");
      else if (width < 1440) setPosterSize("w500");
      else setPosterSize("w780");

      if (width < 640) setBackdropSize("w300");
      else if (width < 1024) setBackdropSize("w780");
      else setBackdropSize("w1280");
    }

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  return { posterSize, backdropSize };
}
