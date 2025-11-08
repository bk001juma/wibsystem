// import { getImagePath } from "@/lib/utils/imagePath";
// import Image from "next/image";

// const Trade = () => {
//   return (
//     <section className="overflow-hidden">
//       <div className="container relative">
//         <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-1/2  blur-390"></div>
//         <div className="grid lg:grid-cols-2 gap-x-5 items-center relative z-10">
//           <div>
//             <Image
//               src={getImagePath("/images/trade/macbook.png")}
//               alt="macBook-image"
//               width={787}
//               height={512}
//             />
//           </div>
//           <div className="flex flex-col gap-7">
//             <h2 className="font-semibold text-center sm:text-start max-w-96 leading-14">
//               Trade Anytime, Anywhere
//             </h2>
//             <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
//               Access your crypto portfolio on the go with our secure,
//               mobile-friendly platform. Whether you're at home or on the move,
//               you can buy, sell, and manage assets 24/7 — no limits, no
//               downtime.
//             </p>
//             <div className="flex justify-between">
//               <Image
//                 src={getImagePath("/images/trade/mac.svg")}
//                 alt="macOS-image"
//                 width={61}
//                 height={105}
//               />
//               <div className="verticalLine"></div>
//               <Image
//                 src={getImagePath("/images/trade/appstore.svg")}
//                 alt="appstore-image"
//                 width={80}
//                 height={105}
//               />
//               <div className="verticalLine"></div>
//               <Image
//                 src={getImagePath("/images/trade/windows.svg")}
//                 alt="windows-image"
//                 width={80}
//                 height={105}
//               />
//               <div className="verticalLine"></div>
//               <Image
//                 src={getImagePath("/images/trade/android.svg")}
//                 alt="android-image"
//                 width={71}
//                 height={105}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Trade;

import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";

const Trade = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative">
        <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-1/2  blur-390"></div>
        <div className="grid lg:grid-cols-2 gap-x-5 items-center relative z-10">
          {/* Showcase Image */}
          <div>
            <Image
              src={getImagePath("/images/trade/macbook.png")}
              alt="fashion showcase"
              width={787}
              height={512}
            />
          </div>

          {/* Description & Highlights */}
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold text-center sm:text-start max-w-96 leading-14">
              WIB LTD 2025 Highlights
            </h2>
            <p className="lg:text-lg font-normal text-lightblue text-center sm:text-start">
              See our plans to grow in fashion and entertainment. From launching
              limited edition clothing to promoting our artists with hit songs
              and performances — WIB LTD is set to make 2025 unforgettable.
            </p>

            {/* Showcase Icons */}
            <div className="flex justify-between">
              <Image
                src={getImagePath("/images/trade/mac.svg")}
                alt="t-shirt icon"
                width={61}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={getImagePath("/images/trade/appstore.svg")}
                alt="pullover icon"
                width={80}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={getImagePath("/images/trade/windows.svg")}
                alt="music icon"
                width={80}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={getImagePath("/images/trade/android.svg")}
                alt="performance icon"
                width={71}
                height={105}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
