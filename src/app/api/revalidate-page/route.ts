import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const pagePath = req.nextUrl.searchParams.get("path");

  if (!pagePath) {
    return Response.json(
      {
        revalidated: false,
        message: "Path not provided",
      },
      { status: 400 },
    );
  }

  revalidatePath(pagePath);

  return Response.json({ revalidated: true, pagePath });
}

export const dynamic = "force-dynamic";
