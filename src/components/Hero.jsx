let Hero = () => {
  return (
    <>
      <div className="bg-slate-900 px-6 pt-16 md:pt-20 lg:pt-28 pb-28 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <div className="md:flex ">
          <div className="flex justify-center md:hidden">
            <img
              className="w-[260px]"
              src="/src/img/hero/my-photo.png"
              alt="Kris"
            />
          </div>
          <div className="pt-16 md:pt-0 lg:pt-10">
            <h2 className="font-bold text-3xl text-white py-2 flex lg:text-5xl">
              Hi, I am Kris<i className="animate-waving-hand">👋</i>
            </h2>
            <p className="text-lg text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              velit officia quo sequi laboriosam beatae dolores. Voluptates
              ullam ut ad. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nobis, nisi?
            </p>

            <div className="flex py-4 items-center">
              <svg
                className="fill-green-500 mr-2 animate-pulse"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>

              <p className="text-lg text-slate-300 pb-1">
                Yogyakarta, Indonesia
              </p>
            </div>
            <div className="flex">
              <a href="https://github.com/kristiyanlaoli/">
                <svg
                  className="fill-slate-400 hover:fill-orange-500"
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" />
                </svg>
              </a>
              <a href="https://www.instagram.com/kristiyanlaoli/">
                <svg
                  className="fill-slate-400  hover:fill-pink-600 ml-3"
                  width="31"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 202.66A53.34 53.34 0 1 0 277.36 256 53.38 53.38 0 0 0 224 202.66zm124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1 1 82-82 81.9 81.9 0 0 1-82 82zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14 19.1 19.1 0 0 1-19.09 19.18zM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="justify-center hidden md:flex md:justify-end sm:min-w-[300px] sm:h-[300px] lg:min-w-[350px] lg:h-[350px] ">
            <img className="pt-2" src="/src/img/hero/my-photo.png" alt="Kris" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
