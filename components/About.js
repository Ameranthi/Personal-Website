import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import userData from "../consts/data";

const About = () => {
    return (

       
    
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            My name is <bold>Julia Olmstead</bold> and I am a developer and passionate designer with global entreprenurial experience. 
                            My passion for creation led me to my start of programming. I create 2D platformers, apps, and websites (obviously). 
                            Currently I'm learning how to code in Java, JavaScript, Python, and more through various university classes. 
                            In my free time I like to learn C# and react frameworks. 
                            
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>

                
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check out my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Resume
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
        </div>
    )
}

export default About;