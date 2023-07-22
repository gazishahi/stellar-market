import Navbar from "./components/navbar"
import { prisma } from "@/prisma/db"

function getUsers(){
  return prisma.user.findMany()
}


export default async function Home() {
  const users = await getUsers()

  return (
    <>
    <main>
      {users.map(user=>(
        <li>{user.email}</li>
      ))}
    </main>
    </>
  )
}