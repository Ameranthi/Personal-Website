import React from 'react'
import Image from 'next/image'

export default function AppleCaseStudy(){
    return (
    <div classname="container px-4 mx-auto">
        <div className="mt-12 text-gray-800 dark:text-white ">
            
            <div class=" mx-40 lg-flex">
                <h1>Apple Voice Control Accessibility Case Study</h1> 
                <h4 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white"> Apple Voice Control and Custom Commands </h4>
                <p> This case study was originally created in 2020 and was edited in 2023 after noticing some bandaid fixes. This case study is still relevant as the main problems are still occuring as well as the same heuristic violations are still applicable. Accessibility is imperative and makes using your iPhone simpler for people with limited mobility as well as able bodied persons. To use your device with voice commands without the internet dependent “Siri” you can enable "Voice Control". However, if you are already depending on voice control having customized gestures can be essential when even unlocking your device without face ID. Unfortunately, many design heuristics are skimped over in the Accessibility settings. It is already quite difficult traversing accessibility functions as there are accessibility settings that use technical terms and not typical everyday normative termssuch as: "Switch Control" and "TTY", both which are terms most often used in the Programming/Tech community.</p> <br>
                </br>
                <p> we make the assumption that apple users are not all programming and tech savvy community memebers as their targetted audience and markets are diverse but are not specific to this.</p>

                {/* image example */}

                

                <h4 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Accessibility Function: Voice Control</h4>

                
<video width="320" height="240" muted autoplay controls>
  <source src="https://juliao.vercel.app/customcommands.MP4" type="video/mp4"/>

  Your browser does not support the video tag.
</video>

                <p> Immediately we can start to point out issues with the ease of accessibility in the design as it's skiping over vital design heuristics.
                    
                    The accessibility “Voice Control” “custom gesture” control only allows up to 5 touches to log (in 2020) before it won’t log anymore. This was tested again in 2023 it now goes up to 10 unique touches. However the design hueristic violation is not fixed with more touches being added. It never told you it maxed out at 5 touches as well as it currently doesn't announce to the user it ends at 10 (in 2023). This relies on the user to recall how many times it has touched the interface which can be hard for older ages or those with neurological conditions.
                    <br></br>
                    When speaking to friends and family with iPhones I also found that most don't know the capabilities of Voice Control. Due to the limited public general use knowledge settings often go under used. It doesn’t allow people to learn about the accessibility settings easily unless finding out about it through trendy TikToks or the Apple Knowledge Bank, which makes it rely on "recall" rather than "recognition". Accessibility with voice control can be crucial for users with Cerebral Palsy and/or issues with motor function, such as my moms little sister in the Big Sister Little Sister program in Canada. 
                </p>

                <h4 class="text-gray-800 text-2xl font-semibold flex justify-center py-5 dark:text-white">Design Heuristic Violations </h4>
                <p>So let's talk about three main heuristics that have been broken and possible fixes!</p>
                
                <h6 class="text-gray-800 text-2xl font-semibold flex justify-left py-5 dark:text-white">1 Visibility of System Status: </h6>
                There is no way to tell which gesture came first and relies on recall rather than recognition. There is also no way for the user to know if they are creating the gesture in the right area of the screen! 
                
                <p>Possible fixes:</p>
                <ol>
                    <li> Touch counter </li>
                    <li> in 2020 it was not colored and now they are (easier to distinguish which came first), However, after the gesture finishes playing it all returns to the same yellow colour making it hard to see each gesture</li>
                    <li>A Screen Underlay</li>
                    <p> This would be used to ensure the user is creating touches/gestures in the correct area of the screen that they want to create a custom gesture for. Currently there are "hacks" posted online where people will use tape, lipgloss or lipstick to mark the areas where they need. However, this shouldn't be something people have to use to be able to set up a custom gesture for accessibility. </p>
                    <li> ability to move the gesture play back slider</li>

                </ol>


            <h6 class="text-gray-800 text-2xl font-semibold flex justify-left py-5 dark:text-white">2 Error Prevention:</h6>
                You can make a mistake in creating your gestures and will have to do it all over again to correct
                it.
                <br/> 
                <p>Possible fixes:</p>
                <ul>
                    <li>an undo button!</li>
                    <li>Delete gesture button!</li>

                </ul>
                    

              <h6 class="text-gray-800 text-2xl font-semibold flex justify-left py-5 dark:text-white">3 Flexibility and Efficiency:</h6>
              <p> ease of use doesn’t exist here, and help and documentation is not easily accessible –
                you would have to know about the knowledge bank to be able to use it, I learned from Tom at
                the Apple Store. circa 2020. </p>

                <p> The process of creating a customized gesture for accessibility is also ridiculously long and weird
                    to reach this area a screenshot of each action is show in sequence. Yes screenshots to emphasize how many darn steps there are, as seen below:</p>
               
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
                    gestures to use is five(2020) or now 10 in 2023, numbers on the gestures themselves to be able to identify them or have them colour coordinated, allow for
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


