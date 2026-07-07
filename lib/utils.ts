import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns true only for real, usable URLs — filters out empty strings and the
 * "REPLACE_ME" placeholders in data/projects.ts, so no broken links ever render.
 */
export function isRealUrl(url?: string): url is string {
  return (
    !!url &&
    url.trim() !== "" &&
    url !== "REPLACE_ME" &&
    !url.startsWith("TODO")
  );
}
