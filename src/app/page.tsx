import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import AppFeatures from "@/components/sections/appFeature";
import AppInterface from "@/components/sections/appInterface";
import Usage from "@/components/sections/usage";
import Team from "@/components/sections/team";
import HappyCustomer from "@/components/sections/happyCustomer";
import BlogSection from "@/components/sections/blogSection";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <section id="home">
      <main className="min-h-screen flex flex-col">
        <Hero />
        <About />
        <AppFeatures />
        <AppInterface />
        <Usage />
        <Team />
        <HappyCustomer />
        <BlogSection />
        <Footer />
      </main>
    </section>
  );
}
