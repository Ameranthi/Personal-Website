//https://www.youtube.com/watch?v=LyEc2fGCR90
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function Layout({children}){
    return(
        <>
        <Head>
            <title> Layouts </title>
        </Head>
        {children}
        </>
    )
}
