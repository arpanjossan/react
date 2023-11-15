import Navbar from "@/components/navbar";
import Image from "next/image";
import Intro from "@public/img/illustration-intro.svg";

const Main = () => {
  return (
    <section id="hero" className="mx-auto max-w-7xl  px-4 md:px-10 ">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row items-center  mx-auto mt-10  ">
        {/* left items  */}
        <div className="flex flex-col  space-y-10 md:w-1/2 ">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            {" "}
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-gray-600 md:text-left ">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a className="px-3 py-1 bg-orange-500 rounded-full hover:bg-orange-500/80 text-white hover:scale-110 transition transform delay-75  ease-out">
              Get Started
            </a>
          </div>
        </div>
        {/* image */}
        <div className="flex-1">
          <Image alt="hero" src={Intro} className="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
