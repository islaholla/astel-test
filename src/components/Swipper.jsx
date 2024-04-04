import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { useState } from "react";
import arrowUp from "../assets/arrow-white.svg";

const SwiperHero = ({ slide }) => {
  const [active, setActive] = useState(false);
  const handleFlip = () => {
    setActive(!active);
  };
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          direction: "ttb",
          height: "80vh",
          interval: 2600,
          type: "loop",
        }}
      >
        <SplideSlide>
          <div className="hero-1">
            <div className="teks">
              <h1 className="font-judul">
                Start your unforgettable Digital journey with us
              </h1>
              <p>The best digital for your bisniss begins now</p>
            </div>
            <div className="contact-hero bg-white w-[80%]   sm:w-[70%] h-[353px] sm:h-[123px] mt-[6rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px] ">
              <div  className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="bg-[#FF7757] text-white h-[100%] rounded-r-[20px] flex items-center gap-[2rem] px-[1.2rem]">
                <button className="rounded-r-[20px] font-judul  text-[28px] text-start w-[60%] leading-8">
                  Connect Us
                </button>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            className={`box ${active ? "coinflip" : ""}`}
            onClick={handleFlip}
          >
            <div className="front"> This is Front</div>
            <div className="back">This is Back</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            className={`box ${active ? "coinflip" : ""}`}
            onClick={handleFlip}
          >
            <div className="front"> This is Front</div>
            <div className="back">This is Back</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            className={`box ${active ? "coinflip" : ""}`}
            onClick={handleFlip}
          >
            <div className="front"> This is Front</div>
            <div className="back">This is Back</div>
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default SwiperHero;
