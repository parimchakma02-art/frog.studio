import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import Footer from "../component/Footer";

const About = () => {
  const serviceRefs = useRef([]);

  const services = [
    "Website Design and Development",
    "Crafting Unique Branding Identities",
    "Creating Seamless Motion Design",
    "Designing Social Media Feeds",
    "Photography",
    "Videography",
    "Company Profile",
    "Enhancing Digital Experience",
  ];

  useEffect(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      const number = el.querySelector(".service-number");
      const text = el.querySelector(".service-text");

      const enter = () => {
        gsap.to(el, {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(number, {
          x: 10,
          opacity: 0,
          duration: 0.3,
        });

        gsap.to(text, {
          x: 20,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(el, {
          backgroundColor: "transparent",
          color: "#ffffff",
          duration: 0.3,
        });

        gsap.to(number, {
          x: 0,
          opacity: 1,
          duration: 0.3,
        });

        gsap.to(text, {
          x: 0,
          duration: 0.4,
        });
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  return (
    <section className="w-full h-auto bg-[#161616] text-white px-6 flex flex-col">
      {/* ABOUT TOP */}
      <div className="w-[64%] h-[68vh] flex flex-col justify-center space-y-14 mt-12">
        <h1 className="text-[#A2A2A2] text-[18px] font-medium">About</h1>

        <p className="text-[#A2A2A2] text-[48px] leading-[1.2]">
          We are Disco Frog, an independent design studio that leverages fresh
          ideas and innovation to build standout brands for our clients
        </p>
      </div>

      {/* MIDDLE CARDS */}
      <div className="w-full h-screen flex gap-2 flex-col">
        <div className="w-full h-1/2 flex gap-4">
          <div className="h-full w-[50%]">
            <div className="h-full w-[60%] flex flex-col space-y-4">
              <h1 className="text-[40px]">Want to work with us?</h1>

              <p className="text-[18px] text-[#bababad7]">
                Ready to take the next step? Whether you're just exploring ideas
                or you're ready to get started, you can schedule an intro call
                to discuss your project in detail.
              </p>

              <button className="bg-[#FDD26E] text-black w-40 h-12 text-[18px] flex items-center px-4 gap-3 rounded-full justify-between">
                Book A Call <GoArrowUpRight />
              </button>
            </div>
          </div>

          <div className="h-full w-[25%] bg-[#454545] flex flex-col justify-between p-6 rounded-[12px]">
            <h1>Our Vision</h1>
            <p className="text-[22px] font-medium">
              Create Meaningful Impact And Compelling Experiences With Our
              Clients.
            </p>
          </div>

          <div className="h-full w-[25%] bg-[#454545] flex flex-col justify-between p-6 rounded-[12px]">
            <h1>Our Mission</h1>
            <p className="text-[22px] font-medium">
              Craft Digital Solutions That Blend Tech And Design Empowering
              Brands To Succeed.
            </p>
          </div>
        </div>

        <div className="w-full h-1/2 gap-3 flex">
          <div className="w-[50%] h-full rounded-[14px] flex flex-col justify-between bg-[#454545] p-6">
            <h1>Our Expertise</h1>
            <p className="text-[22px] font-medium">
              Delivering Top Notch And Unique Design Websites And Apps.
            </p>
          </div>

          <div className="w-[50%] h-full rounded-[14px] flex flex-col justify-between bg-[#454545] p-6">
            <h1>Approach</h1>
            <p className="text-[22px] font-medium">
              Everything In House Working End To End To Ensure We Meet The
              Highest Standards.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="w-full h-screen mt-14">
        <div className="text-[50px] font-medium capitalize w-full flex items-center mb-10">
          all the services you need <br /> -under one roof
        </div>

        <div className="w-full h-full flex gap-8">
          {/* LEFT SIDE */}
          <div className="w-1/2">
            {services.slice(0, 4).map((item, i) => (
              <div
                key={i}
                ref={(el) => (serviceRefs.current[i] = el)}
                className="service-item cursor-pointer text-[30px] border-b border-[#595959] w-full h-18 flex gap-4 items-center px-2"
              >
                <span className="service-number text-[#8d8d8d]">
                  {`0${i + 1}`}
                </span>
                <span className="service-text">{item}</span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2">
            {services.slice(4).map((item, i) => (
              <div
                key={i + 4}
                ref={(el) => (serviceRefs.current[i + 4] = el)}
                className="service-item cursor-pointer text-[30px] border-b border-[#595959] w-full h-18 flex gap-4 items-center px-2"
              >
                <span className="service-number text-[#8d8d8d]">
                  {`0${i + 5}`}
                </span>
                <span className="service-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
