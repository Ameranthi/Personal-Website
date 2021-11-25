//https://www.youtube.com/watch?v=LyEc2fGCR90
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'

export default function Layout({children}){
    return(
        <div>
             <ThemeProvider attribute="class" enableSystem={false}>
             <Navigation />
             {children}
             <Footer />
             </ThemeProvider>
        </div> 
    )
}
