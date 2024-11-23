import React from "react";

import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "./rainbow-button";
import { BorderBeam } from "./border-beam";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function LetsMakeThingsHappenSection() {

  
  const difftost = () =>{
    toast.success('Hoor Rayyy..', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    }


  return (
   <>
    <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      {/* <BorderBeam/> */}
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
          Let&apos;s make things happen
        </p>

        <p className="my-10 text-xl">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/meeting"
          onClick={difftost}
        >
          <RainbowButton>  Book a Call</RainbowButton>
        <ToastContainer/>
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
   </>
  );
}

export default LetsMakeThingsHappenSection;
