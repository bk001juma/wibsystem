import Image from "next/image";
import { getImagePath } from "@/lib/utils/imagePath";

const Table = () => {
  return (
    <section id="vision-mission-section" className="scroll-mt-20 py-20 bg-darkmode">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="mb-3 text-4xl font-bold text-white">Our Vision & Mission</h2>
          <p className="text-lightpurple max-w-2xl mx-auto md:text-lg font-normal md:leading-8">
            Learn about our guiding principles and what drives WIB LTD forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {/* Vision Card */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-white/90">
              To be the leading company in fashion and entertainment business.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-10 text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-white/90">
              To use our publicity to sell our products, leveraging our own artists and brand ambassadors to connect with our audience.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Image */}
      <Image
        src={getImagePath("/images/table/Untitled.svg")}
        alt="decorative-background"
        width={2460}
        height={102}
        className="mt-20"
      />
    </section>
  );
};

export default Table;
