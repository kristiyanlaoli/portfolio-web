let About = () => {
  return (
    <>
      <div className=" bg-slate-850 px-6 pt-24 -mt-1 pb-24 sm:mx-8 sm:px-16 md:mx-16 lg:mx-20 xl:mx-24 xl:px-20">
        <div className="relative bg-loved rounded-lg h-[40px] w-[130px] mx-auto mb-8">
          <div className="absolute bottom-2 right-2 h-[43px] w-[134px] border-4 border-slate-600 dark:border-slate-900 rounded-lg bg-slate-300 dark:bg-slate-600">
            <h2 className=" font-bold text-2xl text-center dark:text-loved">
              About Me
            </h2>
          </div>
        </div>

        <img
          className="shadow-lg shadow-black  lg:float-left lg:max-h-[250px] mb-4 mt-2 lg:mr-8"
          src="/img/about/fotoku.jpg"
          alt="Kristiyan Laoli"
        />

        <p className="text-xl text-slate-600 dark:text-slate-300 ">
          Awalnya, saya belajar fisika di Universitas Gadjah Mada, namun
          sepanjang perjalanan kuliah, saya menemukan gairah baru dalam dunia
          komputasi. Terpesona oleh machine learning, tesis saya terfokus pada
          meramalkan energi ikat inti atom. Setelah kelulusan, saya beralih ke
          jalur pengembangan web, khususnya sebagai front-end developer. Dengan
          keahlian dalam JavaScript, HTML, dan CSS, saya menggali potensi
          kreatif dan teknis untuk menciptakan pengalaman web yang menarik.
        </p>
      </div>
    </>
  );
};

export default About;
