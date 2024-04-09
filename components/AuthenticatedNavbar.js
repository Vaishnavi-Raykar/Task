// AuthenticatedNavbar.js
import { useSession } from "next-auth/react";
import Navbar from "./Navbar";

export default function AuthenticatedNavbar() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  
  return <Navbar session={session} />;
}
