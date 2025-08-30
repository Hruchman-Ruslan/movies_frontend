"use client";

import { useState, useEffect } from "react";

import { ImageSize } from "@/types/movie";

export function useImageSize(): ImageSize {
  const [size, setSize] = useState<ImageSize>("w500");

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width < 640) setSize("w185");
      else if (width < 1024) setSize("w342");
      else if (width < 1440) setSize("w500");
      else setSize("w780");
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}
