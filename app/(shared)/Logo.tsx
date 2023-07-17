import React from "react";
import Image from "next/image";
import LogoImg from "@/public/assets/ailogo.png";


type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="/" rel="noreferrer">
        <Image
        className="hover:opacity-50"
          src={LogoImg}
          alt="twitter"
          width={60}
          height={20}
        />
      </a>
    </div>
  );
};

export default Logo;
