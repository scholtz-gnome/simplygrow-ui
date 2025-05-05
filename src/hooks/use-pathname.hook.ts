"use client";
import { useEffect, useState } from "react";

export const usePathname = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      if (typeof window !== "undefined") {
        setPath(window.location.pathname);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handleLocationChange);
      window.addEventListener("pushstate", handleLocationChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", handleLocationChange);
        window.removeEventListener("pushstate", handleLocationChange);
      }
    };
  }, []);

  return path;
};
