import Link from "next/link"
import React from "react"
import { HamburgerMenu } from "./HamburgerMenu";
import ThemeSwitch from "./ThemeSwitch"


const Navigation = () => {
    const [isOpen, setisOpen] = React.useState(false);

    function handleClick() {
        setisOpen(!isOpen);
      }

    return (
        
       
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-right hover:text justify-between">

                <Link href="/">
                    <a
                    
                        className={"font-medium tracking-wider transition-colors text-gray-900 uppercase hover:text-sky-500 dark:text-white"}
                    >
                        Julia Olmstead
                    </a>

                    
                </Link>

                <div class="flex items-center">
                    <div className="md:flex lg:flex space-x-4 font-medium uppercase text-gray-800 hidden sm:block dark:text-white" >
                <Link className="tranistion-colors hover:text-sky-500" href="/Projects">
                    <a className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 justify-right 
                    dark:text-white">
                       Work
                    </a>
                </Link> 
                <Link href="/skills">
                    <a className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 justify-right dark:text-white">
                       Skills
                    </a>
                </Link> 
                <Link href="/experience">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 justify-right dark:text-white"}
                    >
                       Experience
                    </a>
                </Link> 

                
                </div>
                {/* mobile Friendly Components of Nav Bar */}
                <ThemeSwitch />
                <HamburgerMenu />
        </div>
        </div>
        </div>
    )
}

export default Navigation;
