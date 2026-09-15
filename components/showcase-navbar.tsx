import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/Talentra.png"
import { RainbowButton } from "./ui/rainbow-button";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
      overflow-hidden
      p-10
      

    rounded-[6px]
    top-5
    sticky
    md:mx-auto

    transform 
    z-50
    xl:w-4/5 
   2xl:w-[68%]

   
    bg-white 
    flex 
    items-center
    justify-between py-6
    px-4
    md:px-8
    mx-6
    
    "
    >
      <Link href="/">
      <Image
        src={logo}
        alt="Relives Logo"
        width={1000}
        height={1000}
        className="w-28"
      />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg ">
          {/* <Link
            href="/showcase"
            className="
          hover:text-blue-500
          "
          >
            Candidate
          </Link> */}
             <Link href="/" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-500">
        Process
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Guarentees
          </Link>
  
        </div>
      </div>


      <div className="flex items-center gap-x-4">
      <a href="tel:5193191562" className="hidden xl:flex">
              <button className="px-45 py-2   rounded-md flex items-center gap-x-3 ">
          📞 +1 (484) 304-0730
              </button>
            </a>


      <Link
      href={"/meeting"}
      >
      <RainbowButton className="">Book?</RainbowButton>
      </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
