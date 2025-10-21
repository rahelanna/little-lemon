import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Specials from "../components/specials/Specials";

const Home = () => {
  return (
    <main role="main" aria-label="Homepage main content">
      <Hero />
      <Specials />
      <About />
    </main>
  );
};

export default Home;
