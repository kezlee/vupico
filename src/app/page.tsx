import Image from "next/image";
import Background from "../../public/home/bg.png";
import BackgroundSM from "../../public/home/bg-xs.png";
import HomeBanner from "./components/HomeBanner";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import SdpModule from "./components/SdpModule";
import ContentHeader from "./components/ContentHeader";
import { HomeBanners, sdpModules } from "./constant";

config.autoAddCss = false;

const Home = () => {
  return (
    <>
      <section className="bg-[--primary] mt-20 overflow-hidden">
        <div className="container mx-auto h-[calc(75vh-80px)] pt-[15vh] px-6 lg:px-0">
          <h1 className="text-[26px] leading-loose lg:text-[48px] text-center lg:text-left">
            <span className="text-[--secondary]">S</span>ustainability{" "}
            <span className="text-[--secondary]">D</span>ata in One{" "}
            <span className="text-[--secondary]">P</span>latform
            <br />
            <b>Accelerate. Track. Innovate.</b>
          </h1>
        </div>
        <Image src={Background} className="hidden lg:block absolute bottom-0" alt="Laptop" />
        <Image src={BackgroundSM} className="lg:hidden bottom-0" alt="Laptop" />
      </section>
      <section className="lg:h-[25vh] relative z-1">
        <div className="container mx-auto md:pt-6 px-6 pt-20 lg:px-0">
          <div className="lg:w-1/2 lg:ml-[50%]">
            <p className="text-[--primary] text-[16px] md:text-xl lg:text-2xl font-medium text-center lg:text-left">
              Drive innovation and fast-track your journey to carbon neutrality
              and beyond. Kickstart your sustainable transformation with SDP
              now!
            </p>
          </div>
        </div>
      </section>
      <section className="my-20 px-6">
        {HomeBanners.map((banner) => <HomeBanner key={banner.altTxt} imgUrl={banner.imgUrl} altTxt={banner.altTxt} />)}
      </section>
      <section className="container mx-auto px-6 text-[--primary]">
        <ContentHeader title="SDP Modules" />
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          {sdpModules.map((module, index) => <SdpModule key={index} content={module.content} icon={module.icon} />)}
        </div>
      </section>
    </>
  );
};

export default Home;
