import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Project = () => {
  return (
    <div id="Project">
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Here are some of my projects I made using HTML,CSS, Next.js and Tailwind CSS.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
    
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/lets music.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Music Player Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Music Player
            </h1>
            <p className="leading-relaxed">
             Project I created for those who love music!
            </p>
           <Link target="_blank" href = {"https://meek-fairy-1d956b.netlify.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>

          



        </div>

        </div>
          
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/parhai.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Education Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Education Website
            </h1>
            <p className="leading-relaxed">
             Project I created for students!
            </p>
           <Link target="_blank" href = {"https://meek-fairy-1d956b.netlify.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>

          



        </div>

        </div>
 
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/khhan.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Food Website Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Food Website
            </h1>
            <p className="leading-relaxed">
             Project I created for those who love food!
            </p>
           <Link target="_blank" href = {"https://meek-fairy-1d956b.netlify.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project
            </p>
            </Link>
          </div>
</div>
    </div>
  </div>
  </div>
</section>

    </div>
  )
}

export default Project