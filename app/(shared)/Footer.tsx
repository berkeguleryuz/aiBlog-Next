import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First Area */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Automatic Blog Generator</h4>
          <p className="my-5">Blog for the FUTURE.</p>
          <p>Blog of the Future. All rights reserved.</p>
        </div>
        {/* Second Area */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold mb-5">Links</h4>
          <Link href="https://berkeguleryuz.vercel.app" target="_blank">
            <p className="my-5">Berke Güleryüz</p>
          </Link>
          <Link href="https://github.com/berkeguleryuz" target="_blank">
            <p className="my-5">Github</p>
          </Link>
          <Link href="https://linkedin.com/in/berke-guleryuz/" target="_blank">
            <p className="my-5">Linkedin</p>
          </Link>
        </div>
        {/* Third Area */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            berkeguleryuz@hotmail.com
          </p>
          <p>+90 (554) 678 97 80</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
