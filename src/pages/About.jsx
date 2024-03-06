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
          Pada awalnya, saya adalah seorang mahasiswa fisika di Universitas
          Gadjah Mada. Namun, seiring berjalannya waktu, saya menemukan cinta
          baru dalam dunia yang tak terbatas dari komputasi. Saya terpesona oleh
          keajaiban machine learning, dan tesis saya menjadi refleksi dari minat
          ini, dengan fokus pada memprediksi energi ikat inti atom - sebuah
          tantangan yang membutuhkan pemahaman mendalam tentang fisika dan
          komputasi.
          <br />
          <br />
          Setelah meraih gelar saya, saya memutuskan untuk mengambil langkah
          berani dan beralih ke jalur yang berbeda - pengembangan web. Sebagai
          fullstack developer, saya memiliki kesempatan untuk menciptakan dan
          membangun dunia digital sendiri. Untuk mempersiapkan diri dalam
          perjalanan baru ini, saya mengikuti bootcamp di Codemasters.id, tempat
          saya mempelajari berbagai teknologi yang menjadi tulang punggung
          pengembangan web modern.
          <br />
          <br />
          Dari JavaScript, HTML, dan CSS, hingga React.js, Express.js, MySQL,
          Prisma ORM, dan banyak lagi, saya memperoleh pengetahuan dan
          keterampilan yang diperlukan untuk menjadi fullstack developer yang
          sukses. Dengan keahlian ini, saya mampu menggali potensi kreatif dan
          teknis saya, menciptakan situs web yang menarik dan berfungsi dengan
          baik.
          <br />
          <br />
          Perjalanan saya dari fisika ke pengembangan web mungkin tidak
          konvensional, tetapi ini adalah perjalanan yang telah membentuk saya
          menjadi profesional yang saya jadikan hari ini. Saya bersemangat untuk
          melanjutkan belajar dan tumbuh dalam bidang ini, dan saya tidak sabar
          untuk melihat apa yang akan datang selanjutnya.
        </p>
      </div>
    </>
  );
};

export default About;
