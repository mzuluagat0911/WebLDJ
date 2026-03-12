import { NextResponse } from "next/server";

/**
 * Feed de Instagram vía Graph API.
 * Cuando tengas las credenciales, agrega a .env.local:
 *   INSTAGRAM_ACCESS_TOKEN=tu_token
 *   INSTAGRAM_USER_ID=tu_user_id_instagram_business
 * El feed se mostrará automáticamente en el widget.
 */
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

export type InstagramMediaItem = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnail_url?: string;
};

export async function GET() {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    return NextResponse.json({ media: [] });
  }

  try {
    const url = new URL(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media`
    );
    url.searchParams.set("fields", "id,media_url,permalink,caption,media_type,thumbnail_url");
    url.searchParams.set("access_token", INSTAGRAM_ACCESS_TOKEN);
    url.searchParams.set("limit", "12");

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    const data = (await res.json()) as {
      data?: Array<{
        id: string;
        media_url: string;
        permalink: string;
        caption?: string;
        media_type: string;
        thumbnail_url?: string;
      }>;
      error?: { message: string };
    };

    if (data.error) {
      console.error("Instagram API error:", data.error);
      return NextResponse.json({ media: [] });
    }

    const media: InstagramMediaItem[] = (data.data ?? []).map((item) => ({
      id: item.id,
      media_url: item.media_url,
      permalink: item.permalink,
      caption: item.caption,
      media_type: item.media_type as InstagramMediaItem["media_type"],
      thumbnail_url: item.thumbnail_url,
    }));

    return NextResponse.json({ media });
  } catch (e) {
    console.error("Instagram feed fetch error:", e);
    return NextResponse.json({ media: [] });
  }
}
