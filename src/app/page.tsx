import Image from 'next/image'
 
const Home = () => {
  return (
    <>
      <div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </>
  );
};

export default Home;