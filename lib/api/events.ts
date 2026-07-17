import type { UpcomingEvent, PastEvent } from "@/data/clubData";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;


async function appsScriptFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  if (!APPS_SCRIPT_URL) {
    throw new Error("Missing NEXT_PUBLIC_APPS_SCRIPT_URL");
  }

  const url = `${APPS_SCRIPT_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Apps Script request failed: ${res.status} ${text}`);
  }

  return (await res.json()) as T;
}

export async function getUpcomingEvents(): Promise<UpcomingEvent[]> {
  return appsScriptFetch<UpcomingEvent[]>("events?type=upcoming", { method: "GET" });
}

export async function getPastEvents(): Promise<PastEvent[]> {
  return appsScriptFetch<PastEvent[]>("events?type=past", { method: "GET" });
}

