import React from "react";

const Feature = () => {
  return (
    <section className="max-w-7xl mx-auto pt-8 px-4  md:px-0">
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 px-4 md:px-10 ">
        {/* left items */}
        <div className="md:w-1/2 space-y-10 pr-8">
          <h1 className="text-4xl font-bold text-center md:text-left  md:text-5xl">
            What's different about Mange?
          </h1>
          <p className="text-center text-gray-600 md:text-left ">
            Manage provides all functionality your team needs, wihtout the
            complexity. Our software is tailor made for medern digital product
            teams.
          </p>
        </div>
        {/* right items */}
        <div className="flex flex-col md:w-1/2 space-y-8  ">
          {[1, 2, 3].map((data, idx) => (
            <div
              className="flex flex-col md:flex-row space-x-6 space-y-4 md:space-y-0  hover:bg-gradient-to-r from-gray-400 to-slate-200 px-4 py-2 rounded-lg hover:scale-105 transition transform delay-50  ease-in"
              key={idx}
            >
              {/* heading */}
              <div className=" rounded-full bg-orange-100 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 bg-orange-400 rounded-full md:py-1">
                    0{data}
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Texting the purpose
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden text-lg font-bold mb-3 md:block">
                  {" "}
                  Texting the purpose
                </h3>
                <p className="text-gray-600  ">
                  Manage provides all functionality your team needs, wihtout the
                  complexity. Our software is tailor made for medern digital
                  product teams.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
