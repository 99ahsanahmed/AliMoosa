import Image from "next/image";
const About = () => {
  return (
    // ABOUT
    <div
      id="About"
      className="bg-gradient-to-bl from-black from-75% to-yellow-950 h-screen flex flex-wrap flex-col items-center justify-center relative"
    >
      {/* ABOUT HEADING */}
      <div className="Heading flex flex-col items-center xs:text-3xl md:text-6xl lg:text-5xl xl:text-9xl">
        <h1 className="text-white uppercase mb-3 ">about me</h1>
        <div className="border-b border-slate-500/30 w-40"></div>
      </div>

      {/* ABOUT DETAILS */}
      <div className="About text-white xs:text-base md:text-xl my-4 xs:mx-6 md:mx-10 md:my-8 lg:text-xl tt:text-4xl tt:mx-32 xl:mx-44 xl:text-5xl">
        <h3 className="">
          I am Ali Moosa currently pursuing a{" "}
          <span className="text-black  bg-white/90 rounded-lg">
            {" "}
            Bachelor&#39;s in Computer Science
          </span>{" "}
          at Dawood University of Engineering and Technology. In addition to my
          studies&#44; I am enrolled in a Certified Data Scientist program at
          NED PITP&#44; where I am honing my expertise in data analysis and
          machine learning. My background also includes proficiency in graphic
          design and Microsoft Office&#44; skills I developed through NS
          Training&#44; which have allowed me to combine creativity with
          technical knowledge.
        </h3>

        {/* RESUME */}
        <div className="flex  bg-yellow-900 transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 duration-500 text-white text-lg w-fit p-1 rounded-xl mt-3">
          <a download href="/cv.pdf" target="blank">
            Download CV
          </a>
        </div>
      </div>

      {/* EDUCATION PICTURES */}
      <div className="Pictures flex flex-wrap items-center gap-5 xs:mt-4 lg:mt-0">
        <div className="gutech">
          <Image
            src="/dawood.png"
            width={200}
            height={0}
            alt="Picture"
            className="xs:w-36 md:w-52 lg:w-40 "
          />
        </div>

        <div className="hikmah">
          <Image
            src="/ned.png"
            width={200}
            height={0}
            alt="Picture"
            className="xs:w-24 md:w-36 lg:w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default About
