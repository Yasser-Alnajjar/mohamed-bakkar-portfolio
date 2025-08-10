import {
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Contact,
} from "@components";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Home Section */}
      <section id="home" className="pt-24 pb-16 lg:pt-32">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </main>
  );
}
