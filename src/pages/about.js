import Head from "next/head"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import ProfilePic from '../../public/images/profile/developer-pic-2.jpeg'
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useInView, useSpring, useMotionValue } from "framer-motion"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

const about = () => {
    const AnimatedNumbers = ({ value }) => {
        const ref = useRef(null)

        const motionValue = useMotionValue(0)
        const springValue = useSpring(motionValue, { duration: 3000 })
        const isInView = useInView(ref, { once: true })

        useEffect(() => {
            if (isInView) {
                motionValue.set(value)
            }
        }, [isInView, value, motionValue])

        useEffect(() => {
            springValue.on('change', (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0)
                }
            }, [springValue, value])
        })

        return <span ref={ref}></span>
    }
    return (
        <>
            <Head>
                <title>About Page </title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                I&apos;m Bryan, web and mobile developer driven by a fervor for crafting stunning, practical, 
                                and user-centric digital journeys. Armed with 6 years of industry expertise, I&apos;m perpetually 
                                seeking fresh, inventive avenues to materialize client&apos;s visions, surmount their challenges, 
                                and forge intuitive, delightful user interactions.
                            </p>
                            <p className='my-4 font-medium'>
                                Be it a website, mobile application, or any digital creation, I infuse each 
                                project with a dedication to impeccable design and user-oriented strategies
                            </p>
                            <p className='font-medium'>
                                The art of coding extends beyond syntax; it&apos;ms a medium through which imagination 
                                comes to life, as ideas evolve into tangible reality through the strokes of logic and innovation.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                         bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image
                                src={ProfilePic}
                                alt='ProfilePic'
                                className='w-full h-auto rounded-2xl'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={6} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                            {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={50} />+

                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div> */}
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
