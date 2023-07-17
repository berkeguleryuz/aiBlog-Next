import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Ad1 from "@/public/assets/ad-1.jpg";
import Logo from './Logo';
import TextGradientComponent from './Animated';


type Props = {}

const Nav = (props: Props) => {
  return (
    <header className='mb-5'>
      <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'><Logo /></div>
        <div className='flex justify-between items-center gap-10 '>
          <Link href='/' className='hover:text-wh-100 font-bold'>Home</Link>
        </div>
        <div>
        <TextGradientComponent/>
        </div>
      </nav>
      <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='font-bold text-3xl md:text-5xl'>Automatic Blog Generator</h1>
          <p className='text-sm mt-3'>
            Blog dedicated towards AI and gereneration and job automation
          </p>
        </div>
        <div className='basis-full relative w-auto h-32 bg-wh-500'>
        <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={Ad1}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className='border-1 mx-10'/>
    </header>
  )
}

export default Nav