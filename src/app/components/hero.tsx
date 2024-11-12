"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (

    <section className="text-gray-600 body-font bg-indigo-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
            I am a
            <br className="hidden lg:inline-block text-blue-600" />
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer', 'TypeScript, JavaScript, CSS Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='w-[100px] h-[2px] bg-blue-700'></div>
          <p className="mb-8 leading-relaxed">
            Hey, I am Hiba Abdul Khaliq an aspiring web developer. I'm a driven and passionate web developer who has immersed myself in learning TypeScript, JavaScript, and CSS. My journey in web development has been hands-on, building a diverse portfolio that showcases a variety of projects. From creating a simple calculator and word counter to developing a console-based to-do list, currency converter, ATM, and even an adventure game and much more, I’m continuously pushing my skills to new heights.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[20rem]"
            alt="hero"
            width={700}
            height={500}
            src="/hero.png"
          />
        </div>
      </div>
    </section>


  )
}

export default Hero