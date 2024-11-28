"use client";
import { signIn } from "next-auth/react";  // Correct import for signIn

export default function Login() {
  return (
    <div className="space-x-4">
      <h1>Sign In</h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded-md text-white"
        onClick={() => signIn("github")}  // Pass the provider name
      >
        Sign In with GitHub
      </button>
      <button
        className="bg-blue-500 px-4 py-2 rounded-md text-white"
        onClick={() => signIn("google")}  // Pass the provider name
      >
        Sign In with Google
      </button>
    </div>
  );
}
