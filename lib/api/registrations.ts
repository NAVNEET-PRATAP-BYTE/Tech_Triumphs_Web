export type RegistrationPayload = {
  ticket_id?: string;
  event_id: string;
  full_name: string;
  roll_number: string;
  admission_id: string;
  branch: string;
  section: string;
  year: string;
  email: string;
  phone: string;
  turnstile_token: string;
};

type RegistrationResponse = {
  ticket_id: string;
  status: "ok";
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

export async function submitRegistration(
  payload: RegistrationPayload
): Promise<RegistrationResponse> {
  return appsScriptFetch<RegistrationResponse>("registrations", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

