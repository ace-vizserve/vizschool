import image1 from "@/assets/landing-page/classes-tutors-1.jpg";
import image2 from "@/assets/landing-page/classes-tutors-2.jpg";
import image3 from "@/assets/landing-page/classes-tutors-3.jpg";
import { motion } from "motion/react";
import { memo, useEffect, useRef } from "react";
import { ResponsiveContainer, StackedCarousel } from "react-stacked-center-carousel";

const intervalTime = 3000;

function ClassesTutors() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<StackedCarousel | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.goNext();
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-8 container mx-auto pb-20 md:py-20 xl:py-0">
      <div
        ref={containerRef}
        className="h-screen max-h-[650px] w-full flex flex-col-reverse xl:flex-row items-center justify-center">
        <div className="h-full w-full flex items-center justify-center relative">
          <motion.svg
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                scale: { type: "spring" },
                opacity: { ease: "linear" },
              },
            }}
            viewport={{ once: true }}
            className="w-full h-full max-h-96 absolute aspect-square"
            viewBox="0 0 391 377"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M270.439 365.502C216.823 381.965 161.652 381.305 110.861 358.728C59.8171 336.071 13.2317 291.245 2.59782 237.727C-8.03609 184.209 17.8648 121.904 61.1498 73.9216C104.183 25.8602 164.931 -8.0523 214.335 2.16803C263.819 12.1359 301.628 66.4101 335.59 120.588C369.632 174.513 399.655 228.009 388.39 271.89C376.953 315.439 324.307 349.119 270.439 365.502Z"
              fill="#007AFF"
            />
          </motion.svg>
          <motion.div
            initial={{
              opacity: 0,
              translateX: -100,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: {
                opacity: { ease: "linear" },
                translateX: { type: "spring" },
              },
            }}
            viewport={{ once: true, margin: "-80% 0px" }}
            className="w-full h-full flex justify-center items-center">
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 3;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                if (parentWidth <= 600) currentVisibleSlide = 1;
                return (
                  <StackedCarousel
                    swipeSpeed={0.5}
                    ref={carouselRef}
                    slideComponent={CarouselItem}
                    slideWidth={parentWidth < 600 ? parentWidth - 60 : 340}
                    carouselWidth={parentWidth}
                    data={[image1, image2, image3]}
                    currentVisibleSlide={currentVisibleSlide}
                    maxVisibleSlide={5}
                    disableSwipe
                  />
                );
              }}
            />
          </motion.div>
        </div>
        <div className="w-full h-full space-y-6 flex flex-col xl:items-start items-center xl:justify-center justify-end">
          <h1 className="w-full text-center xl:text-start text-balance text-3xl lg:text-5xl font-bold">
            Classes & tutors for every age
          </h1>
          <p className="max-w-prose text-sm text-center lg:text-start -tracking-tighter text-muted-foreground md:text-base text-balance">
            VizSchool LMS offers fun, expert-led courses for all ages. Live classes and 1-on-1 support help students
            learn and grow their way.
          </p>
        </div>
      </div>
    </div>
  );
}

type Props = {
  data: string[];
  dataIndex: number;
};

const CarouselItem = memo(function ({ data, dataIndex }: Props) {
  const cover = data[dataIndex];

  return (
    <div className="rounded-2xl border-4 overflow-hidden">
      <img src={cover} className="object-cover h-64 w-full" />
    </div>
  );
});

export default ClassesTutors;
