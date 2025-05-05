"use client";
import { useState } from "react";

export const usePathname = () => {
  const [path, setPath] = useState("");

  if (typeof window !== "undefined") {
    setPath(window.location.pathname);
  }

  return path;
};
