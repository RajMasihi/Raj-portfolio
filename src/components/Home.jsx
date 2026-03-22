import { useEffect, Suspense, lazy } from "react";
import rajpic from "../assets/images/raj_figma2.png";
import Typed from "typed.js";
import Social from "./Social";

const Home = () => {
  // const typedRef = useRef(null);
  // useEffect(() => {
  //   const options = {
  //     strings: ["Full", "stack", "developer"],
  //     typeSpeed: 30,
  //     backSpeed: 30,
  //     loop: true,
  //   };
  //   const typed = new Typed(typedRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="row home" id="home">
        <div className="col-lg-12 p-lg-5 d-flex justify-content-around">
          <div className="text_image text-lg-center  p-lg-5">
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-mirror="false"
            >
              Hello, I'm
            </p>
            <h1
              className="home_name"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-mirror="true"
            >
              Raj Masihi
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-mirror="false"
            >
              Full stack developer
            </h2>
            <div
              className="d-flex justify-content-around mx-lg-1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <Social />
            </div>
          </div>

          <div
            className="img_divh"
            data-aos="zoom-out-left"
            data-aos-duration="2000"
            data-aos-mirror="true"
          >
            <img
              src={rajpic}
              alt="image not found"
              className=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
