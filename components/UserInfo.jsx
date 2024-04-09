"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function UserInfo() {
  const { data: session } = useSession();
  const isAdmin = session?.admin?.email === "admin@gmail.com"; // Assuming `email` is the admin's email
  
  return (
    <div>
      {isAdmin ? (
        <Link href={"/seeTasks"}></Link>
      ) : (
        <Link href={"/addTopic"}></Link>
      )}
    </div>
  );
}
