import Header from "../components/header";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Services from "../sections/services";
import Skills from "../sections/skills";

const Page = () => {
  return (
    <div className="bg-[var(--background-color)] text-gray-100">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
