import OrbitProfile from "./orbitprofile";

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-12 px-4 sm:mt-20 sm:flex-row sm:justify-between sm:gap-8 py-3">
      <div className="w-full min-w-0 sm:w-1/2 sm:text-left">
        <h1 className="name-shine text-4xl font-bold text-white sm:text-5xl">
          Hi I&apos;am <br />
          Minhajul Islam Mohit
        </h1>
        <p className="text-white font-bold">Full Stack Web Developer.</p>
      </div>
      <div className="flex w-full min-w-0 justify-center sm:w-1/2">
        <OrbitProfile />
      </div>
    </div>
  );
};

export default Hero;
