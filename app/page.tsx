'use client'
import Navbar from "./components/navbar"
import { prisma } from "@/prisma/db"
import { useUser } from "@auth0/nextjs-auth0/client"

function getUsers(){
  return prisma.user.findMany()
}

export default async function Home() {
  //const users = await getUsers()
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
      </div>
    )
  );
}