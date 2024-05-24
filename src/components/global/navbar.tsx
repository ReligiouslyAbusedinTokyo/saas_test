import React from 'react'
import Image from 'next/image'
type Props = {}

const Navbar =async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg 
    z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        <aside className="flex items-center gap-[2px]">
            <p className="text-2xl font-bold">Cha</p>
            <Image
                src="/fuzzieLogo.png"
                width={15}
                height={15}
                alt="fuzzie logo"
                className="shadow-sm"
             />
              <p className="text-2xl font-bold">ma</p>
        </aside>
    </header>
  )
}

export default Navbar