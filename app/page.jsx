import Image from "next/image"
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/user'


export default function Home() {
  return (
    <>
    <main>
      <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2">
        <div className="lg:col-span-4 lg:row-span-2 m-3">
          <a className="block h-full">
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-sky-400 dark:bg-sky-600 relative rounded-3xl">
            <Image src="/White-Sneakers-PNG-Clipart.png" height={500} width={500} alt="Sneakers" className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"/>
            <div className="absolute left-0 top-0 w-3/4 text-black dark:text-white">
              <h3 className="inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black text-3xl rounded-br-3xl">Sneakers</h3>
              <p className="w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white rounded-br-3xl">$70.00</p>
            </div>
            </div>
          </a>
        </div>
        <div className="lg:col-span-2 lg:row-span-1 m-3">
          <a className="block h-full">
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gray-900 dark:bg-gray-900 relative rounded-3xl">
              <div className="absolute left-0 top-0 w-3/4 text-black dark:text-white">
                <h3 className="inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black text-3xl rounded-br-3xl">Something</h3>
                <p className="w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white rounded-br-3xl">$15.00</p>
              </div>
            </div>
          </a>
        </div>
        <div className="lg:col-span-2 lg:row-span-1 m-3">
          <a className="block h-full">
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gray-900 dark:bg-gray-900 relative rounded-3xl">
              <div className="absolute left-0 top-0 w-3/4 text-black dark:text-white">
                <h3 className="inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black text-3xl rounded-br-3xl">Another thing</h3>
                <p className="w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white rounded-br-3xl">$23.00</p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <div className="relative w-full overflow-hidden bg-black dark:bg-white rounded-3xl">
        <div className="flex animate-[wiggle_1s_ease-in-out_infinite]">
          <a className="m-3">1</a>
          <a className="m-3">2</a>
          <a className="m-3">3</a>
          <a className="m-3">4</a>
          <a className="m-3">5</a>
          <a className="m-3">6</a>
        </div>
      </div>
    </main>
    </>
  )
}
