import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative">
          <div
            className="absolute
                    top-0 
                    w-full  
                    bg-Blue-800 
                    "
          >
            <img
              src="/images/banner.jpg"
              className="w-full h-screen opacity-50"
              alt="Background Image"
            />
          </div>
        </div>
        <div
          className="h-screen
                            w-auto
                            flex 
                            justify-center 
                            items-center 
                            mix-blend-screen 
                            text-center
                            z-0
                            "
        >
          <img
            src="/images/pattern1.png"
            alt="grid pattern"
            className="absolute z-10 top-[80px] left-[60%] opacity-30"
          />

          <img
            src="/images/pattern2.png"
            alt="grid pattern"
            className="absolute z-10 top-[400px] right-[60%] opacity-30"
          />

          <div>
            {/* <div className='absolute border border-orange-700 py-10 px-10  mt-[90px] z-10 text-7xl font-bold'> RIGHT NOW</div> */}
            <p
              className="
                            text-7xl 
                            font-bold"
            >
              THE AGE OF PRIME <br />
              IS HERE <span className="text-orange-400  ">RIGHT NOW</span>
            </p>
            <div className="pt-20">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                maxime possimus. Ut nostrum <br />
                ex explicabo eveniet, nulla, labore eaque dolorum debitis vel
                assumenda atque sunt obcaecati iste. Rem, in odio!
              </p>
            </div>
            <div>
              <button className="font bold py-2 px-4 rounded bg-orange-400 mt-20 hover:bg-blue-900">
                View Offer
              </button>
            </div>
          </div>
        </div>

        {/* start ng best work */}
        <div className="h-screen flex flex-col justify-center items-center bg-zinc-300 ">
          <div
            className="flex 
                                flex-col
                                md:flex-row
                                justify-center
                                items-center
                                mx-5
                                md:mx-[10rem]
                                "
          >
            <img
              src="/images/screenshot.png"
              className="w-[500px]  h-auto rounded-xl mb-5 md:mb-0"
              alt="Header Image"
            />

            <div
              className="flex 
                                flex-col 
                                justify-center
                                items-center
                                ml-0 
                                md:ml-10
                            "
            >
              <div
                className="text-black
                                         font-bold
                                         
                                         "
              >
                <h1
                  className="
                            mt-5
                            text-6xl 
                            font-bold
                            mb-3 
                            md:mb-0"
                >
                  BEST WORK # 1{" "}
                </h1>

                <h2 className="text-4xl mb-3">Tagline # 1</h2>
                <div className="mb-5 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, maxime possimus.
                    <br /> Ut nostrum ex explicabo eveniet, nulla, labore eaque
                    dolorum debitis
                    <br /> vel assumenda atque sunt obcaecati iste. Rem, in
                    odio!
                  </p>
                </div>
                <div>
                  <button className=" py-2 px-4 rounded text-white bg-orange-400 mt-20 ml-[15rem] hover:bg-blue-900">
                    View Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* start ng services */}
        <div>
          <div className="text-gray-600 body-font bg-zinc-300">
            <div className=" px-5 py-24 mx-auto">
              <div className="mb-10">
                <h1 className="sm:text-3xl text-2xl  mb-2 text-gray-900 font-bold">
                  SERVICES
                </h1>
              </div>

              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 mb-4">
                      <img
                        src="/images/serveicon1.png"
                        alt="Icon 1 "
                        className="w-10 h-10"
                      />
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      SERVICE 1
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 mb-4">
                      <img
                        src="/images/serveicon5.png"
                        alt="Icon 2"
                        className="w-10 h-10"
                      />
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      SERVICE 2
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 mb-4">
                      <img src="/images/serveicon6.png" alt="Icon 3" />
                    </div>

                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      SERVICE 3
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10  mb-4">
                      <img
                        src="/images/serveicon1.png"
                        alt="Icon 4 "
                        className="w-10 h-10"
                      />
                    </div>

                    <h2 className="text-lg text-gray-900 font-medium mb-2">
                      SERVICE 4
                    </h2>
                    <p className="leading-relaxed text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div
                      className="w-10
                                    h-10 
                                     mb-4"
                    >
                      <img
                        src="/images/serveicon5.png"
                        alt="Icon 5"
                        className="w-10 h-10"
                      />
                    </div>

                    <h2
                      className="text-lg 
                                  text-gray-900 
                                  font-medium 
                                  mb-2"
                    >
                      SERVICE 5
                    </h2>
                    <p
                      className="leading-relaxed 
                                  text-base"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div
                    className="border 
                                border-gray-200 
                                  p-6 
                                  rounded-lg"
                  >
                    {/* div for the border */}
                    <div
                      className="w-10 
                                    h-10 
                                    mb-4"
                    >
                      <img src="/images/serveicon6.png" alt="Icon 6" />
                    </div>
                    <h2
                      className="text-lg 
                                text-gray-900 
                                  font-medium 
                                  mb-2"
                    >
                      SERVICE 6
                    </h2>
                    <p
                      className="leading-relaxed 
                                  text-base"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non exercitationem officia necessitatibus veritatis
                      tempore, facere id delectus iure blanditiis beatae, sequi
                      error ducimus molestiae aspernatur? Quae dignissimos autem
                      magni modi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className=" px-5 py-24 bg-sky-950 mx-auto h-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-bold mb-4 ">
                Reach To Us!
              </h1>
              <p className=" mx-auto leading-relaxed font-medium text-base">
                Sub Tagline!
              </p>
            </div>

            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-black p-10">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 "
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                    Button
                  </button>
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">PRIMATEITFIRM@gmail.com</a>
                  <p className="leading-normal my-5">PRIME APES</p>

                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img
                        src="/images/fblogo.png"
                        alt="fb logo"
                        className="w-5 h-5"
                      />
                    </a>

                    <a className="ml-4 text-gray-500">
                      <img
                        src="/images/emaillogo.png"
                        alt="email logo"
                        className="w-5 h-5"
                      />
                    </a>

                    <a className="ml-4 text-gray-500">
                      <img
                        src="/images/github.png"
                        alt="github logo"
                        className="w-5 h-5"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div className="items-center justify-center flex">
                <span
                  className="text-sm
                       text-gray-500 
                       sm:text-center
                     dark:text-gray-400 "
                >
                  {" "}
                  © All Rights Reserved 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
