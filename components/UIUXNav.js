import Link from "next/link"
import React from "react"
import ThemeSwitch from "./ThemeSwitch"


const UIUXNav = () => {
    return (
        <div className="container px-4 mx-auto lg:max-w-4xl flex items-center">
            <div className="lg:px-4 lg:mt-12 ">
            <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text:center" a href = "/">
                    Health App
                </h1>
                    </a>
                    </Link>
                
                    <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                
                <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white" a href = "/Apple"> 
                Apple Case Study
                  </h1>
                  </a>
                    </Link>
                </div>
                </div>
    )
}

export default UIUXNav;
