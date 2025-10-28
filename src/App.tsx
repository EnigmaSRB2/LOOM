import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Studios } from "./components/Studios";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <Features />
      <Studios />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
