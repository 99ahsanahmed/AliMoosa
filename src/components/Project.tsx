import Image from "next/image";
const Project = () => {
  return (
    //MAIN PAGE
    <div
      id="project"
      className="bg-gradient-to-tl from-black from-75% to-yellow-950 h-screen flex flex-wrap flex-col items-center justify-center relative "
    >
      {/* PROJECTS HEADING */}
      <div className="Heading flex flex-col items-center xs:text-3xl md:text-6xl lg:text-5xl xl:text-9xl">
        <h1 className="text-white uppercase mb-3 ">projects</h1>
        <div className="border-b border-slate-500/30 w-40"></div>
      </div>

      {/* IMAGE */}
      <section className="flex flex-col justify-center items-center mt-5 text-white/55 text-2xl ">
        <h1>Coming soon!</h1>
      </section>

      {/* ABOUT FOOTER */}
      <footer className="flex absolute bottom-0 my-4 text-white/20 xs:text-3xl xs:gap-2 md:text-4xl tt:text-5xl tt:gap-10">
        <Image src="/python.png" width={40} height={0} alt="Machine Learning" />
        <Image src="/c-.png" width={40} height={0} alt="Machine Learning" />
        <Image src="/coding.png" width={40} height={0} alt="Machine Learning" />
        <Image
          src="/icons8-c.svg"
          width={40}
          height={0}
          alt="Machine Learning"
        />
        <Image
          src="/icons8-jupyter.svg"
          width={40}
          height={0}
          alt="Machine Learning"
        />
        <Image
          src="/illustration.png"
          width={40}
          height={0}
          alt="Machine Learning"
        />
        <Image src="/office.png" width={40} height={0} alt="Machine Learning" />
      </footer>
    </div>
  );
};

export default Project;
