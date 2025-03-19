import { NextResponse } from "next/server";
import axios from "axios";
import querystring from "querystring";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { error: "Authorization code is missing" },
        { status: 400 }
      );
    }

    const tokenUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/token`;

    const params = querystring.stringify({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const { data } = await axios.post(tokenUrl, params, { headers });

    return NextResponse.json({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
    });
  } catch (error) {
    console.error("Token exchange failed", error);
    return NextResponse.json(
      { error: "Token exchange failed" },
      { status: 500 }
    );
  }
}
