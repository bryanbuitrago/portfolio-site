import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='flex items-center justify-between lg:flex-col py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Built With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                    by&nbsp; <Link href='https://github.com' className='underline underline-offset-2'>Bryan B.</Link>
                </div>
                <Link href='https://github.com' className='underline underline-offset-2'>Contact</Link>

            </Layout>
        </footer>
    )
}

export default Footer
