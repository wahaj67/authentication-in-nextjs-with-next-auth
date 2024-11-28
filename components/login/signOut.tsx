"use client";
import { signOut } from "next-auth/react"; 

export default function SignOut() {
  return (
    <div>
      <h1>Sign Out</h1>
      <button
        onClick={() => signOut()}  // Correct function name
        className="bg-black px-4 py-2 rounded-md text-white"
      >
        Sign Out
      </button>
    </div>
  );
}
