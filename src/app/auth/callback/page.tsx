"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [tokens, setTokens] = useState<{
    client_id: string;
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (code) {
      fetch("/api/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.access_token) {
            setTokens(data);
          } else {
            setError("Failed to fetch tokens.");
          }
        })
        .catch(() => setError("Error while exchanging token."));
    }
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Authentication Result</h1>
      {tokens ? (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100 text-stone-950">
          <p>
            <strong>Client ID:</strong> {tokens.client_id}
          </p>
          <p>
            <strong>Access Token:</strong>
          </p>
          <textarea
            readOnly
            className="w-full p-2 border rounded-md"
            value={tokens.access_token}
            rows={4}
          />
          <p className="mt-2">
            <strong>Refresh Token:</strong>
          </p>
          <textarea
            readOnly
            className="w-full p-2 border rounded-md"
            value={tokens.refresh_token}
            rows={4}
          />
          <p className="mt-2">
            <strong>Expires In:</strong> {tokens.expires_in} seconds
          </p>
          <p className="mt-2">
            <strong>Token Type:</strong> {tokens.token_type}
          </p>
        </div>
      ) : error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <p className="mt-4">Processing authentication...</p>
      )}
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CallbackContent />
    </Suspense>
  );
}
