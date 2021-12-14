import React from "react";
import userData from "../consts/data";
import Image from 'next/image';

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              desc = {proj.desc}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, desc }) => {
  return (
    <div className="container px-4 mx-auto">
    <a href={link} className="w-full shadow-2xl text-gray-800 block hover:bg-gray-100 ">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover relative">
          <Image
            src={imgUrl}
            layout={'fill'}
            alt="portfolio"
            className="rounded-lg ease-out object-cover"
        
          />
          <h2 className="motion-safe absolute top-28 transform transition duration-2000 w-full h-full border-2 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded-lg tracking-tight font-light text-center text-green-400 mb-1">

                  {desc}
            
          </h2>
        </div>
        <h1 className="absolute top-10 left-8 text-gray-50 font-bold text-xl bg-green-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 bg-green-500 rounded-md px-1 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>


      </div>
    </a>
    </div>
  );
};
