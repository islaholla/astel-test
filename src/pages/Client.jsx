import Billing from "../components/Billing";
import Navbar from "../components/Navbar";

const Client = () => {

  return (
    <div >
      <Navbar />
      <div className="partner pt-[2rem]">
        <Billing title="Our Product" subtitle="" />

      </div>
    </div>
  )
};

export default Client;
