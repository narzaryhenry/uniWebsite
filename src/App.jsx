import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Program />
      </div>
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="Testimonials" title="What Students Say" />
      <Testimonials />
      <Title subTitle="Contact Us" title="Get In touch With Us" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
