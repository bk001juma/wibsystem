"use client";

import { Footerlinkdata, Sociallinkdata } from "@/lib/data/pageData";
import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-body-bg relative pt-10">
      <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/2 blur-390"></div>
      <div className="container relative z-10 pb-16">
        <div className="grid grid-cols-1 gap-y-10 md:gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* CEO Section */}
          <div className="lg:col-span-6 sm:col-span-2 flex flex-col items-center text-center">
            <p className="text-white text-xl font-semibold mb-4">CEO</p>
            <div className="w-48 h-48 rounded-xl overflow-hidden mb-2 bg-white/10 flex items-center justify-center">
              <Image
                src={getImagePath("/images/team/ceo.jpeg")}
                alt="CEO Lameck Seth Lameck"
                width={192}  // slightly larger to ensure coverage
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-white/80 text-lg font-medium">Lameck Seth Lameck</p>
          </div>

          {/* Manager Section */}
          <div className="lg:col-span-2 sm:col-span-2 flex flex-col items-center text-center">
            <p className="text-white text-xl font-semibold mb-4">Manager</p>
            <div className="w-48 h-48 rounded-xl overflow-hidden mb-2 bg-white/10 flex items-center justify-center">
              <Image
                src={getImagePath("/images/team/manager.jpeg")}
                alt="Manager Baraka Mashimbe"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-white/80 text-lg font-medium">Baraka Mashimbe</p>
          </div>

          {/* Contact Info (unchanged) */}
          <div className="lg:col-span-4 sm:col-span-2">
            <p className="text-white text-xl font-medium mb-9">Contact Us</p>
            <Link
              href="tel:+255680522062"
              className="text-white/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit"
            >
              <Image
                src={getImagePath("/images/footer/number.svg")}
                alt="number-icon"
                width={20}
                height={20}
              />
              +255 680 522 062
            </Link>
            <Link
              href="mailto:wibinfo01@gmail.com"
              className="text-white/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit"
            >
              <Image
                src={getImagePath("/images/footer/email.svg")}
                alt="email-icon"
                width={20}
                height={20}
              />
              info@wib.co.tz
            </Link>
            <div className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={getImagePath("/images/footer/address.svg")}
                alt="address-icon"
                width={20}
                height={20}
              />
              Dar es Salaam, Tanzania
            </div>
          </div>

        </div>
      </div>

      <div className="py-8 px-4 border-t border-t-lightblue">
        <p className="text-center text-white">
          ©2025 WIB LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
