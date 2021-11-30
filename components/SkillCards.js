import React from 'react'

export const SkillCards = () => {
    return (
// /* Grid starts here */
<div className="bg-[#F1F1F1] dark:bg-black">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 py-2 flex justify-center">


   {/* start of first column */}
<div class="max-w-md py-9 px-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg my-20">
  <div class="flex justify-center ">
<div className="border-gray-200 dark:border-gray-900 ">
      <h4 class="text-gray-800 text-4xl font-semibold flex justify-center py-5 dark:text-white">
        Design
      </h4>
      <h5 class="text-gray-800 text-1xl font-semibold py-3 dark:text-white"> Design Skills </h5> 
      <ul class="grid grid-cols-1 md:grid-cols-2 px-2"> 
      
       <li> UI design </li>
      <li> UX design </li>
      <li> AR Filter Design </li>
       <li> Illustrations </li>
      <li> Storyboarding </li>
      <li> 2D Game Assets </li>
       <li> Wireframing </li>
      <li> Mobile App Design </li>
      <li> Web App Design </li>
       <li> Website Design </li>
      <li> 3D design </li>
        </ul>

        <h5 class="text-gray-800 text-1xl font-semibold py-3 dark:text-white">  Design Tools </h5>
        <ul class="grid grid-cols-1 md:grid-cols-2 px-2">  
      <li> Photoshop </li>
      <li> Illustrator</li> 
      <li> Clip Studio Paint </li> 
      <li>InDesign </li> 
      <li> Adobe Acrobat </li>
       <li> Adobe XD </li>
        <li>Blender</li>
         <li>Adobe Sketch</li>
          <li>Figma</li>
           <li>Procreate </li>
           </ul>
      </div>
      </div>
      </div>


{/* start of second column */}
      <div class="max-w-md py-9 px-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg my-20">
     <div class="flex justify-center ">
      <div className="border-gray-500">

    <h4 class="text-gray-800 text-4xl font-semibold flex justify-center py-5 dark:text-white">
        Technical 
      </h4>
      <h5 class="text-gray-800 text-1xl font-semibold py-3 dark:text-white"> Programming </h5> 
      <ul class="grid grid-cols-1 md:grid-cols-2 px-2">
        <li>Java</li>
        <li>Python</li> 
        <li>PHP</li>
        <li>Javascript</li> 
        <li>Swift</li>
        <li>Kotlin </li>
        <li>C#</li>
        <li>HTML5</li> 
        <li>CSS</li>
        </ul>

<h5 class="text-gray-800 text1xl font-semibold py-3 dark:text-white"> Databases </h5>
<ul class="grid grid-cols-1 md:grid-cols-2 px-2">
<li> MYSQL </li>
   <li> SQL </li>
    <li>  MariaDB </li>
     <li> HanaDB </li>
  </ul>


<h5 class="text-gray-800 text1xl font-semibold py-3 dark:text-white"> Tools </h5> 

<ul class="grid grid-cols-1 md:grid-cols-2  py-0 px-2">

<li> Unity </li>
  <li> IntelliJ </li>
    <li> Git </li>
      <li> PyCharm </li> 
      <li> PHPStorm </li>
      <li> VirtualBox </li> 
      <li> NMap </li> 
      <li> Wireshark </li>

 <li>  Android Studio </li>
 <li> Microsoft Office </li>
 <li>  Linux </li>
 <li> SAP: Frun, Hana </li>
 </ul>
<h5 class="text-gray-800 text1xl font-semibold py-3 dark:text-white"> APIs </h5>
<ul class="grid grid-cols-1 md:grid-cols-2 px-2">

<li> jQuery </li> <li> JUnit </li> </ul>

<h5 class="text-gray-800 text1xl font-semibold py-3 dark:text-white"> Frameworks </h5> 
<ul class="grid grid-cols-1 md:grid-cols-2 px-2">

<li> React </li> <li> Next.js </li>
</ul>
    
</div>
</div>
</div>


{/* Start of third column */}
<div class="max-w-md py-9 px-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg my-20">
<div class="flex justify-center ">
<div className="border-gray-500">
    
<h4 class="text-gray-800 text-4xl font-semibold flex justify-center py-5 dark:text-white">
   Non Technical Skills
</h4>
    
<h5 class="text-gray-800 text1xl font-semibold py-3 dark:text-white"> Leadership </h5> 
      <ul class="grid grid-cols-1 md:grid-cols-2 px-2 py-0 dark:text-white"> 
        <li> Computer Science Society Treasurer as well as training the new Manager for the CSS Desk </li>
      </ul>

        <h5 class="text-gray-800 text1xl font-semibold py-3 dark:text-white">  Mentor </h5>
        <p>  </p>
        <h6 > Mentor Stats </h6>


    </div>
      </div>
      </div>


 
</div>
</div>

        
    )
}




export default SkillCards;
