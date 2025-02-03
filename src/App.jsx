import Explore from "./landing/Explore";
import Features from "./landing/Features";
import Footer from "./landing/Footer";
import Hero from "./landing/Hero";
import Navbar from "./landing/Navbar";
import Plans from "./landing/Plans";
import Reviews from "./landing/Reviews";
import Solutions from "./landing/Solutions";
import WhyAida from "./landing/WhyAida";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <WhyAida />
      <Features />
      <Solutions />
      <Reviews />
      <Plans />
      <Footer />
    </div>
  );
}

export default App