import Header from "../components/header";

const Hero = () => {
  return (
    <section className="w-full" id="hero">
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[var(--background-color)] text-gray-100 px-4">
        <h2 className="text-gray-200 text-3xl mb-4">Hi, I am Wendel Rom</h2>
        <h1 className="text-4xl sm:text-6xl mb-4">Software Developer</h1>

        <p className="text-sm sm:text-lg text-gray-400">
          {`{ TypeScript, React, Node.js, Express, PostgreSQL, TailwindCss... }`}
        </p>

        <p className="max-w-lg text-sm sm:text-base text-gray-300 my-8">
          Specializing in React & Node.js I leverage cutting-edge technologies
          to bring web projects to life.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            See my dev work
          </a>

          <div className="flex items-center">
            <a
              href="/cv.pdf"
              download
              className="border-b border-cyan-400 text-cyan-400 hover:text-cyan-300 transition py-1.5"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
