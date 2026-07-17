import type { NextRequest } from "next/server";

export async function POST(_req: NextRequest) {
  // Stub implementation.
  // In ImageKit, token generation should happen server-side using IMAGEKIT_PRIVATE_KEY.
  // This file exists to match the backend architecture spec.
  // Return shape should be compatible with your ImageKit upload widget usage.

  return Response.json(
    {
      error: "ImageKit auth not configured yet",
    },
    { status: 501 }
  );
}


