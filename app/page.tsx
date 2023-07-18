import Navbar from "./components/navbar"
import { prisma } from "@/db"

function getUsers(){
  return prisma.user.findMany()
}


export default async function Home() {
  const users = await getUsers()

  return (
    <>
    <main>
    </main>
    </>
  )
}
