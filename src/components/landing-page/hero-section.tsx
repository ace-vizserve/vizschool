import heroImg from "@/assets/landing-page/hero-img.png";
import kidStudying from "@/assets/landing-page/kid-studying.json";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="flex flex-col overflow-visible p-0 gap-24 md:gap-16">
      <MaxWidthWrapper className="container">
        <motion.div
          initial={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              default: { type: "spring" },
              opacity: { ease: "linear" },
            },
          }}
          className="h-screen max-h-[650px] w-full flex flex-col-reverse xl:flex-row justify-center items-center">
          <div className="w-full h-full relative flex items-center justify-center">
            <svg
              className="w-full h-full absolute aspect-square"
              viewBox="0 0 685 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1751_3435)">
                <path
                  d="M586.262 199.207C626.212 279.179 640.471 366.808 620.084 454.146C599.645 541.908 544.153 629.33 465.454 662.417C386.754 695.505 284.54 673.361 199.366 619.324C114.14 565.71 45.5968 479.731 47.5173 398.339C49.0308 316.898 121.364 240.518 194.615 170.262C267.458 99.9566 340.76 36.1504 410.817 40.6893C480.416 45.6029 546.363 118.813 586.262 199.207Z"
                  fill="#007AFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1751_3435">
                  <rect width="612" height="646" fill="white" transform="translate(76.9531) rotate(6.84147)" />
                </clipPath>
              </defs>
            </svg>

            <img src={heroImg} alt="element-image" className="absolute z-10 object-cover h-auto max-w-full" />
          </div>
          <div className="h-full w-full flex flex-col items-center xl:items-start justify-center space-y-6">
            <h1 className="w-full text-center xl:text-start text-balance text-3xl md:text-4xl lg:text-5xl font-bold">
              Limitless learning at your fingertips
            </h1>
            <p className="max-w-prose text-sm text-center xl:text-start -tracking-tighter text-muted-foreground md:text-base text-balance">
              Enhance your knowledge with interactive courses, virtual classrooms, and exclusive learning experiences.
            </p>
            <div className="grid grid-cols-2 w-max gap-4">
              <Button className="flex md:hidden" variant={"secondary"}>
                Explore Courses
              </Button>
              <Button className="flex md:hidden">Enroll Now</Button>
              <Button className="hidden md:flex" variant={"secondary"} size={"lg"}>
                Explore Courses
              </Button>
              <Button className="hidden md:flex" size={"lg"}>
                Enroll Now
              </Button>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="container">
        <motion.div
          initial={{
            opacity: 0,
            translateY: 100,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              default: { type: "spring" },
              opacity: { ease: "linear" },
            },
          }}
          viewport={{ once: true, margin: "-80% 0px" }}
          className="h-screen max-h-[650px] w-full flex flex-col xl:flex-row justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center xl:items-start space-y-6">
            <h1 className="w-full text-center xl:text-start text-balance text-3xl md:text-4xl lg:text-5xl font-bold">
              Drive success with our smart&nbsp;solutions
            </h1>
            <p className="max-w-prose text-sm text-center xl:text-start -tracking-tighter text-muted-foreground md:text-base text-balance">
              VizSchool enhances learning through virtual classrooms, interactive lessons, personalized courses, and
              completion certificates.
            </p>

            <Button className="w-max mx-auto flex md:hidden">Learn more</Button>
            <Button className="w-max hidden md:flex" size={"lg"}>
              Learn more
            </Button>
          </div>

          <div className="h-full w-full relative flex items-center justify-center">
            <svg
              className="w-full h-full xl:h-3/4 absolute aspect-square"
              viewBox="0 0 520 523"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.715957 309.947C2.79183 231.478 27.9493 157.715 79.8466 98.5206C131.958 39.0197 211.105 -5.70612 285.791 1.25346C360.477 8.21307 430.567 67.6782 474.269 144.788C518.185 221.59 535.794 316.55 500.67 378.784C465.842 441.225 378.202 470.427 292.381 494.507C206.856 518.794 123.661 537.858 71.2245 505.339C19.2979 472.719 -1.57432 388.723 0.715957 309.947Z"
                fill="#007AFF"
              />
            </svg>

            <Lottie className="w-full h-full xl:h-3/4 absolute aspect-square" animationData={kidStudying} loop={true} />
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
