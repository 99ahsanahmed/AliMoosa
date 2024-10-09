import Link from "next/link";
const Navbar = () => {
  return (
    // NAVBAR
    <div
      id="nav"
      className="top-0 z-50 fixed flex items-center bg-gray/30 backdrop-blur-sm w-screen xs:px-2 "
    >
      {/* LOGO */}
      <h1
        id="logo"
        className="text-yellow-600 uppercase font-mono xs:text-2xl lg:text-4xl xl:text-5xl"
      >
        Ali <br />
        <span className=" text-slate-50 font-extralight xs:text-xl lg:text-4xl xl:text-4xl">
          MOOSA
        </span>
      </h1>

      {/* SCROLL */}
      <ul className="flex gap-4 absolute right-0 text-gray-200  xs:text-sm xs:p-10 lg:gap-12 lg:text-2xl xl:text-3xl">
        <Link href="/">
          <li className="hover:text-yellow-500">Home</li>
        </Link>
        <Link href="#About">
          <li className="hover:text-yellow-500">About</li>
        </Link>
        <Link href="#project">
          <li className="hover:text-yellow-500">Projects</li>
        </Link>
        <Link href="#connect">
          <li className="hover:text-yellow-500">Connect</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
