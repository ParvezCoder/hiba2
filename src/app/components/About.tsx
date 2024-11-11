import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <div id='About'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require("../../../public/Employee of the month-pana.png")}
        width={500}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
      My current enrollment in a generative AI course is a testament to my commitment to staying ahead in the field, as I’m sharpening my skills to craft innovative and impactful web applications.
      . I'm a driven and passionate web developer who has immersed myself in learning TypeScript, JavaScript, and CSS. My journey in web development has been hands-on, building a diverse portfolio that showcases a variety of projects. 
      </p>
      <div className="flex justify-center">
      <a href = {"/public/Hiba.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV

          
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About