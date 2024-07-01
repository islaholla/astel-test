import About from "../components/About";
import Navbar from "../components/Navbar";

const AboutPage = () => {

  return (
    <div >
      <Navbar />
      <div className="about pt-[2rem]">
        <About/>
      </div>
    </div>
  )
};

export default AboutPage;
