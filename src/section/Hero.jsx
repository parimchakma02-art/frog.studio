import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";

const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];

const Hero = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2;

    gsap.set(marquee, { x: 0 });

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="w-full h-[86vh] bg-gradient-to-r from-[#2D3833] via-[#1E3839] to-[#2D3833] text-white flex items-center">
      <div className="w-full h-[70vh] flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-[48px] font-medium">
          Beautiful Experiences <br /> -Built to Perform
        </h1>

        <p className="text-[#a19d9d] text-[24px]">
          We help businesses build a professional digital identity -from
          <br />
          logos, motion design, and website to company profile and beyond.
        </p>

        <button className="font-medium text-[20px]">Learn More</button>

        {/* ✅ Marquee Wrapper */}
        <div className="w-[56vw] h-40 mt-6 overflow-hidden">
          {/* ✅ Animate THIS track */}
          <div ref={marqueeRef} className="flex gap-2 w-max">
            {[...icons, ...icons].map((icon, index) => (
              <div key={index} className="w-40 h-full ">
                <img
                  src={icon}
                  alt={`icon-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>{/* scroll video screen */}</div>
    </section>
  );
};

export default Hero;
