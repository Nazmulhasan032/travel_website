import { Parallax } from "react-parallax";

const About = () => {
    return (
        <div className="w-full mt-24 bg-blue-200">
      <Parallax
        blur={{ min: 1, max: 0 }}
        bgImage={"https://i.ibb.co/2gsm03H/ratargul.png"}
        bgImageAlt="About school"
        strength={-200}
      >
        <div className="max-w-screen-xl py-16 md:py-32 px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32 justify-between">
            <div data-aos="zoom-out-right">
              <div className="text-[#efcf4f] font-extrabold">
                <h3 className="text-xl md:text-2xl">Our services</h3>
                <h1 className="text-4xl md:text-5xl text-white">
                  About Our Packages
                </h1>
                <h3 className="mt-6 text-justify md:text-left text-lg md:text-2xl">
                Embark on unforgettable journeys with our tailored travel packages designed for friends and family. From exploring cultural wonders to embracing the beauty of nature, our carefully crafted itineraries ensure every moment is a cherished memory. Join us for hassle-free adventures that turn travel dreams into cherished realities!
                </h3>
              </div>
              <p className="text-white text-justify md:text-left text-base md:text-lg mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elementum sem ligula. Phasellus eleifend vel justo sit amet
                volutpat. Duis vitae maximus ligula, nec mattis libero. Donec
                eget felis odio.
              </p>
            </div>
            <div
              data-aos="zoom-out-left"
              className="rounded-xl w-fit"
              style={{ boxShadow: "30px 30px #efcf4f" }}
            >
              <img
                src="https://i.ibb.co/w6453tC/resort.png"
                className="rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
    );
};

export default About;