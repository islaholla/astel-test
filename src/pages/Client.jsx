import Billing from "../components/Billing";
import Navbar from "../components/Navbar";

const Client = () => {

  return (
    <div >
      <Navbar />
      <div className="partner pt-[2rem]">
        <Billing title="Our Product" subtitle="Discover details Information about our product  by simply clicking on the logo" />

      </div>
    </div>
  )
};

export default Client;
