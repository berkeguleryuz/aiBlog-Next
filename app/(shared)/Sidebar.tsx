import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "@/public/assets/ad-2.png";
import AboutProfile from "@/public/assets/bg.png";
import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          alt="advert-2"
          placeholder="blur"
          src={Ad2}
          width={500}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Link href="mailto:berkeguleryuz@hotmail.com">
          <Image
            alt="about-profile"
            placeholder="blur"
            src={AboutProfile}
            style={{ width: "500px", height: "250px", objectFit: "cover" }}
          />
        </Link> 
      </div>
      <a href="mailto:berkeguleryuz@hotmail.com">
        <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
          Berke Güleryüz
        </h4>
        <p className="text-wh-500 text-center text-sm">
          I&apos;m turning your ideas into innovative web projects.
        </p>
      </a>
    </section>
  );
};

export default Sidebar;
