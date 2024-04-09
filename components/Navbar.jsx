"use client"

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: "false" , callbackUrl: '/' });
  };

  return (
    <nav className="flex justify-between items-center bg-purple-700 px-8 py-3">
      <Link className="text-white font-bold text-xl" href={"/"}>
        Task Management
      </Link>
      {session ? (
        <>
          <Link className="bg-white p-2" href={"/seeTasks"}>
            See Tasks
          </Link>
          <Link className="bg-white p-2" href={"/addTopic"}>
            Add Tasks
          </Link>
          <button onClick={handleLogout} className="bg-white p-2">
            Logout
          </button>
        </>
      ) : (
        <Link className="bg-white p-2" href={"/login"}>
          Login
        </Link>
      )}
    </nav>
  );
}
