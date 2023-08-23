import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TechStacks from '@/components/TechStacks'
import TransitionEffect from '@/components/TransitionEffect'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='ml-12 flex items-center w-full justify-between lg:flex-col-reverse md:ml-auto'>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Bringing Ideas To Life With Code and Design'
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl' />
              <p
                className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects, showcasing my expertise in React.js, Next.js, Node.js, Express.js, & Django and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/dummy.pdf'
                  target={'_blank'}
                  download={true}
                  className='
                  flex items-center bg-dark text-light p-2.5 px-14 rounded-lg 
                  text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark dark:hover:bg dark:hover:bg-dark 
                  dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base
                  '
                >
                  CV <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href='mailto:abcd@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
              </div>
            </div>
            <div className='w-1/2 md:w-full md:mb-4 md:mr-[115px]'>
              <Image src={profilePic}
                alt='CyberCoder'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                50vw' />
            </div>
          </div>
        </Layout>
        <TechStacks />
      </main>
    </>
  )
}
