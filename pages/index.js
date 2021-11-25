
import Head from 'next/head'
import About from "../components/About";
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
            <ThemeProvider attribute="class" enableSystem={false}>
             <Navigation />
             {page}
             <Footer />
             </ThemeProvider>
  )
}