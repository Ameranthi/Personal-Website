import React from 'react'
import Image from 'next/image'

export default function AppleCaseStudy(){
    return (
    <div classname="container px-4 mx-auto">
        <div className="mt-12 text-gray-800 dark:text-white ">
            
            <div class=" mx-40 lg-flex">
                <h4 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Accessibility Intro </h4>
                <p> Accessibility is imperative and makes using your iPhone simpler for people with limited mobility as
                    well as able bodied persons. To use your device with voice commands without the internet dependent
                    “Siri”
                    you have to enable Voice Control. However, if you are already depending on voice control having
                    customized
                    gestures can be essential when even unlocking your device. Apple already makes traversing your
                    accessibility
                    functions painful by using technical terms and not typical everyday normative terms.</p>

                <h4 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Accessibility Function: Voice Control</h4>

                <p>The accessibility “Voice Control” “custom gesture” control only allows up to 5 touches to log
                    before it won’t log anymore. It doesn’t tell you it maxes out at 5 touches as well as doesn’t
                    allow people to learn about the accessibility settings easily unless finding out about it through
                    trendy TikToks or the Apple Knowledge Bank, which makes it rely on recall rather than recognition.
                    Accessibility is crucial for users with Cerebral Palsy and issues with motor function.
                </p>

                <h4 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Design Heuristic Violations </h4>
                <p>The Apple Accessibility settings shows lack of thought towards the following heuristics:</p>
                
                <h5 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Visibility of System Status: </h5>
                there is no way to tell which gesture came first and relies on recall rather than recognition.
                Consistency and standards – they don’t use the same jargon as the rest of their settings - making it
                difficult and cluttered to get around.

            <h5 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Error Prevention:</h5>
                You can make a mistake in creating your gestures and will have to do it all over again to correct
                it.

              <h5 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Flexibility and Efficiency:</h5>
              <p>
                of use doesn’t exist here, and help and documentation is not easily accessible –
                you would have to know about the knowledge bank to be able to use it, I learned from Tom at
                the Apple Store. </p>

                <p> The process of creating a customized gesture for accessibility is also ridiculously long and weird
                    to figure out, as seen below:</p>
               
                <Image 
                src='/a1.png' 
                width="650" 
                height="400" 
                alt="going through accessibility steps 1-3"
                />

                <Image
                 src='/a2.png' 
                 width="800" 
                 height="750" 
                 alt="going through accessibility steps 4-10"
                 />

                <Image
                 src='/a3.png' 
                 width="800" 
                 height="750" 
                 alt="accessibility steps 11-14"
                 />

            <h4>Redesign Ideas</h4>
                <Image 
                src='/ideadumpsketch.jpg' width="500" height="700" alt="Idea Dump Sketch"/>

                <h5 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Accessibility Custom Commands</h5>
                <p> A proper accessibility flow that is not confusing and redundant. This would require user experience
                    testing to better understand the accessibility community and their needs, it is currently obvious
                    that they are not being met as able-bodied people find it confusing. This would require new
                    workflows, less technical jargon, better organization within accessibility settings/folders (for
                    lack of confusion and increase of efficiency). </p>
                    <p>
                    It is recommended to have users know their status and not rely on recall. Having numbers of used
                    gestures inside the custom gestures set up so you can see your status, show that the maximum
                    gestures to use is five, numbers on the gestures themselves to be able to identify them, allow for
                    error correction by an “ edit” button and be able to move the gestures around- this would be for
                    efficiency and advanced users. Keep the timeline at the bottom of the custom gestures creation page
                    so people can see the play back. Allow for low opacity backgrounds of the home screen or apps to
                    appear in the background of the “custom gesture” background on the creation page so the gestures can
                    be made accurately instead of guessing where you will need the gestures to go.</p>
            </div>
        </div>
        </div>
  
    )
}


