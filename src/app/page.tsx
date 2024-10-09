import Image from "next/image";
import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Link from "next/link";
import Project from "@/components/Project";

export default function Home() {
  return (
    // Main page div
    <div className="main bg-gradient-to-tr from-black to-slate-950 overflow-hidden">
      {/* HOME PAGE */}
      <div
        id="home"
        className="flex flex-col justify-center items-center  bg-gradient-to-tr  from-black from-75% to-yellow-700 h-screen w-screen xs:gap-10 lg:gap-16 "
      >
        <Navbar />

        {/* HOME PAGE-LEFT */}
        <div className="LeftSide flex  items-center">
          {/* NAME */}
          <div className="uppercase text-transparent bg-gradient-to-r from-yellow-600 to-white/25 bg-clip-text text-justify as:font-extrabold xs:text-lg md:text-4xl lg:text-5xl tt:9xl">
            Ali Moosa Bangash.
          </div>

          {/* PICTURE */}
          <div className="">
            <Image
              src="/pfpM.png"
              width={450}
              height={0}
              alt="Picture of the author"
              className="xs:w-28 md:w-40 lg:w-28"
            />
          </div>
          <Links />
        </div>

        {/* HOME PAGE-DOWN */}
        <div
          id="Down"
          className="flex flex-col mx-4 rounded-md bg-opacity-10 p-4 lg:ml-5 lg:mr-10"
        >
          {/* Heading */}
          <h1 className="text-slate-300 uppercase font-extrabold md:text-4xl lg:text-5xl tt:text-6xl">
            I am a&#44;{" "}
            <span className="bg-black text-yellow-700 font-light mr-2">
              computer Science
            </span>
            Student
          </h1>

          {/* DETAILS */}
          <p className="text-white/55  font-semibold text-justify xs:text-sm xs:font-thin md:font-bold md:text-sm lg:py-2 lg:px-16 lg:text-lg tt:text-2xl">
            with a deep curiosity for technology and its potential to shape our
            world. The dynamic nature of computer science&#44; coupled with its
            ability to shape the world around us&#44; has fueled my desire to
            become a skilled and creative programmer
          </p>

          {/* BUTTON */}
          <Link href="#About">
            <button className="bg-black text-white rounded-xl my-3 p-3 xs:text-sm lg:text-xl xl:text-4xl">
              see more
            </button>
          </Link>
        </div>
      </div>

      <About />
      <Project />
      <Connect />
    </div>
  );
}
