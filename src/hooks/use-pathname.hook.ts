"use client";
import { useEffect, useState } from "react";

export const usePathname = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);

  return path;
};
