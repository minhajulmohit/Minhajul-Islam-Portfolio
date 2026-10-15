import Navigation from "@/components/navsection/navigation";
import Hero from "@/components/herosection/hero";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Footer from "@/components/footersection/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative isolate min-h-screen overflow-clip px-4 pb-16 pt-4 sm:px-8">
        <Hero />
        <div className="mt-12 space-y-2 sm:mt-20">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
