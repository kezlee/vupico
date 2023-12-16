import Image from "next/image";
import Background from "../../public/home/bg.png";
const Home = () => {
  return (
    <>
      <section className="bg-[--primary] mt-20">
        <div className="container h-[calc(75vh-80px)] flex pt-[15vh]">
          <h1 className="text-5xl leading-loose">
            <span className="text-[--secondary]">S</span>ustainability{" "}
            <span className="text-[--secondary]">D</span>ata in One{" "}
            <span className="text-[--secondary]">P</span>latform
            <br />
            <b>Accelerate. Track. Innovate.</b>
          </h1>
        </div>
        <Image src={Background} className="absolute top-[80px]" alt="Laptop" />
      </section>
      <section className="h-[25vh]">
        <div className="container pt-6">
          <div className="w-1/2 offset-md-6 ml-[50%]">
            <p className="text-[--primary] text-2xl">
              Drive innovation and fast-track your journey to carbon neutrality
              and beyond. Kickstart your sustainable transformation with SDP
              now!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
