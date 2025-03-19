"use client";

import { useRouter } from "next/navigation";

export default function OneDriveAuth() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  const handleLogin = () => {
    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_mode=query&scope=offline_access Files.ReadWrite`;

    window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">OneDrive Authentication</h1>
      <button
        onClick={handleLogin}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Login with OneDrive
      </button>
    </div>
  );
}
