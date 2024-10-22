import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import arrowUp from "../assets/arrow-white.svg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const SwiperHero = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan form
  const [activeSlide, setActiveSlide] = useState(0); // State untuk melacak slide aktif

  const slideData = [
    {
      id: 1,
      title: "Your Partner in IT Excellent",
      description: 'Contact us to discover how we can partner together for your IT excellence!',
      showForm: true, // Menampilkan form hanya pada slide pertama
    },
    {
      id: 2,
      title: "Together We Develop The Future",
      description: "Pioneer and innovator in the Information Technology business",
      showForm: false, // Tidak menampilkan form pada slide ini
    },
    {
      id: 3,
      title: "Astel offers decades of experience",
      description: "Help your organization to stay on top of the market trends and strengthening",
      showForm: false, // Tidak menampilkan form pada slide ini
    },
    {
      id: 4,
      title: "Technology and Telecommunication solutions",
      description: "We provide a complete range of technology and telecommunication solutions",
      showForm: false, // Tidak menampilkan form pada slide ini
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_u7p333a", "template_87qzy6n", form.current, {
        publicKey: "mPsQ83Cw6-bBVZYSt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            icon: "success",
            title: "Email Sent!",
            text: "Your message has been sent successfully.",
          });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const textVatian = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-[#000]">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          start: 0,
          autoplay: false,
          speed: 800,
          direction: "ttb",
          height: "100vh",
          interval: 2600,
          type: "loop",
          drag: window.innerWidth > 768, // Mengizinkan drag hanya di layar lebih besar dari 768px

        }}
        onMoved={(splide, newIndex) => setActiveSlide(newIndex)} // Callback untuk melacak slide aktif
      >
        {slideData.map((item, index) => (
          <SplideSlide key={item.id}>
            <div className="hero-1 ">
              <motion.div
                className="teks"
                variants={textVatian}
                initial="initial"
                animate="animate"
              >
                <motion.h1 className="font-judul" variants={textVatian}>
                  {item.title}
                </motion.h1>
                <p>{item.description}</p>
                {index === 0 && !showForm && ( // Jika slide pertama dan form tidak ditampilkan
                <button
                  onClick={() => setShowForm(true)} // Menampilkan form saat tombol diklik
                  className="bg-[#FF7757] text-white mt-[2rem] p-2 rounded"
                >
                 Get in Touch
                </button>
              )}
              </motion.div>
           
              {index === 0 && showForm && ( // Menampilkan form jika tombol diklik
               
               <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-hero bg-white w-[80%] 2xl:w-[70%] h-[353px] xl:h-[123px] sm:h-[103px] mt-[4rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px]"
                >
                  <div className="input">
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email</label>
                    <div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your email ..."
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="phone">Phone</label>
                    <div>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone ..."
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="name">Company</label>
                    <div>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Enter your company ..."
                      />
                    </div>
                  </div>
                  <div className="bg-[#FF7757] text-white h-[100%] rounded-r-[20px] flex items-center gap-[2rem] px-[1.2rem]">
                  <button className="rounded-r-[20px] font-judul text-[21px] 2xl:text-[28px] lg:text-[21px]  text-start w-[60%] leading-8">
                      Connect Us
                    </button>
                    <img
                      src={arrowUp}
                      alt="arrow-up"
                      className="w-[23px] h-[23px] object-contain"
                    />
                  </div>
                </form>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SwiperHero;
