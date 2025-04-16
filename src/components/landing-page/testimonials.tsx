import { ourStatsData, testimonialsData } from "@/assets/data";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OurStatsType, TestimonialsType } from "@/types";
import Lottie from "lottie-react";
import { ArrowLeftIcon, ArrowRightIcon, Loader2Icon } from "lucide-react";
import { motion } from "motion/react";
import { memo, useCallback, useState, useTransition } from "react";

function Testimonials() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<[TestimonialsType][number]>(testimonialsData[0]);

  const setCurrentSlide = useCallback((index: number) => {
    setCurrentSlideIndex(testimonialsData[index]);
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="py-20 md:py-36 lg:py-48 flex flex-col items-center justify-center gap-24">
        <div className="w-full flex flex-col items-center justify-center gap-14">
          <h1 className="sm:w-3/4 text-center text-balance text-3xl lg:text-4xl font-bold leading-normal">
            Students & Parents Love VizSchool!
          </h1>
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center">
            {ourStatsData.map((stat, index) => (
              <StatItem index={index} {...stat} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-14">
          <Badge className="text-[0.65rem] md:text-xs py-2 px-4 uppercase font-bold">testimonials</Badge>
          <h1 className="sm:w-3/4 text-center text-balance text-3xl lg:text-4xl font-bold leading-normal">
            Real Stories, Real Success: What Parents & Students Say!
          </h1>

          <TestimonialSlide
            {...currentSlideIndex}
            currentSlideIndex={testimonialsData.indexOf(currentSlideIndex)}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

type TestimonialSlideProps = TestimonialsType & {
  currentSlideIndex: number;
  setCurrentSlide: (index: number) => void;
};

const TestimonialSlide = memo(function ({
  image,
  name,
  status,
  testimony,
  currentSlideIndex,
  setCurrentSlide,
}: TestimonialSlideProps) {
  const [isPending, startTransition] = useTransition();

  function setSlideIndex(index: number) {
    startTransition(() => {
      setCurrentSlide(index);
    });
  }

  if (isPending) {
    return (
      <div className="w-full h-screen md:h-80 flex items-center justify-center">
        <Loader2Icon className="size-8 stroke-3 stroke-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0">
      <motion.div
        transition={{
          delay: 0.25,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="w-full h-full">
        <img loading="eager" src={image} className="mx-auto aspect-video h-80 border-6 rounded-2xl object-cover" />
      </motion.div>

      <div className="w-full h-full flex flex-col justify-between p-0 lg:p-9 gap-7 md:gap-11">
        <motion.div
          className="space-y-11"
          transition={{
            delay: 0.25,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}>
          <p className="line-clamp-4 italic max-w-prose text-sm md:text-base lg:text-lg text-muted-foreground text-balance -tracking-tighter">
            {testimony}
          </p>
          <div className="space-y-1 md:space-y-2">
            <p className="text-base md:text-lg text-primary font-bold -tracking-tighter">{name}</p>
            <p className="text-xs md:text-sm font-medium -tracking-tighter">{status}</p>
          </div>
        </motion.div>
        <div className="flex items-center gap-4">
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full pointer-events-auto", {
                "bg-secondary cursor-not-allowed pointer-events-none": currentSlideIndex == 0,
              }),
            })}
            onClick={() => setSlideIndex(currentSlideIndex - 1)}>
            <ArrowLeftIcon className="size-6 stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full pointer-events-auto", {
                "bg-secondary cursor-not-allowed pointer-events-none": currentSlideIndex == 5,
              }),
            })}
            onClick={() => setSlideIndex(currentSlideIndex + 1)}>
            <ArrowRightIcon className="size-6 stroke-3" />
          </div>
        </div>
      </div>
    </div>
  );
});

function StatItem({ description, icon, stats, index }: OurStatsType & { index: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 20,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: {
          default: { type: "spring" },
          opacity: { ease: "linear" },
        },
      }}
      transition={{
        delay: 0.0 + index + 0.5,
      }}
      viewport={{ once: true, amount: "all" }}
      className="flex flex-col items-center justify-center">
      <div className="size-24 md:size-32">
        <Lottie animationData={icon} loop={true} />
      </div>
      <div className="space-y-1 flex flex-col items-center justify-center">
        <p className="text-primary text-xl md:text-3xl font-bold">{stats}</p>
        <p className="max-w-3/4 text-xs md:text-sm text-muted-foreground -tracking-tighter font-medium text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Testimonials;
