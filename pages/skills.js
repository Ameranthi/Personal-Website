import React from 'react'
import Head from 'next/head'
import { SkillCards } from '../components/SkillCards'
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'

export default function Skills() {
  return (
    <div>
    <Head>
      <title> Professional Development </title>
    </Head> 
    
<div> 
    <SkillCards />
    </div>
    </div>

    );
}

Skills.getLayout = function getLayout(page) {
  return (
            <ThemeProvider attribute="class" enableSystem={false}>
             <Navigation />
             {page}
             <Footer />
             </ThemeProvider>
  )
}
