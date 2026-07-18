type Settings = {
  whatsapp_link?: string;
  linkedin_link?: string;
  instagram_link?: string;
  club_email?: string;
};

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

export async function getSettings(): Promise<Settings> {
  return appsScriptFetch<Settings>("settings", { method: "GET" });
}

