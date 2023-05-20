import { CircularText } from "./Icons"
import Link from "next/link"

const TechStacks = () => {
    return (
        <div className='fixed left-0 bottom-4 flex items-center justify-center overflow-hidden md:right-3 md:left-auto md:-top-5 md:bottom-auto md:absolute'>

            <div className='w-[140px] h-[140px] flex items-center justify-center relative md:w-24'>

                <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

                <Link href='' className='flex items-center justify-center absolute z-10
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
                 border border-solid border-dark w-[60px] h-[60px] rounded-full
                 font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark 
                 dark:hover:text-light dark:hover:border-light md:w-10 md:h-10 md:text-[12px]'
                >
                    Web
                </Link>
            </div>
        </div>
    )
}

export default TechStacks


