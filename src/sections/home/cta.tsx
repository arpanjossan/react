export const Cta = () => {
  return (
    <section className=" bg-orange-600 ">
      <div className=" flex flex-col md:flex-row  justify-between py-20
       px-14 ">
        <h1 className="text-4xl font-semibold text-white leading-10 max-w-xl ">Simplify how your team works today .</h1>

        <div className="mt-6 md:mt-0  hover:scale-110 transition transform delay-75  ease-out">
          <a className="px-6 py-3 bg-white rounded-full hover:bg-black transition-color  hover:text-white text-black hover ">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};
