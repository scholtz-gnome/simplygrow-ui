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

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pushstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate", handleLocationChange);
    };
  }, []);

  return path;
};
