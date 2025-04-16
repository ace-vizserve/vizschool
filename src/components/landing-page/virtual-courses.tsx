import { freeCoursesData, ourProgramsData, specialCoursesData } from "@/assets/data";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import VirtualCoursesLoader from "./virtual-courses-loader";

function VirtualCourses() {
  const [isPending, startTransition] = useTransition();
  const [course, setCourse] = useState<string>("our-programs");

  function setCurrentTab(name: string) {
    startTransition(() => {
      setCourse(name);
    });
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center gap-12">
        <Badge className="text-[0.65rem] md:text-xs py-2 px-4 uppercase font-bold">our virtual courses</Badge>
        <div className="flex flex-col items-center w-full space-y-4">
          <h1 className="text-center text-balance text-3xl md:text-4xl font-bold leading-normal">
            Everything you need to learn, all in one place!
          </h1>
          <p className="text-sm text-center -tracking-tighter text-muted-foreground md:text-base lg:text-lg text-balance">
            From essential skills to engaging subjects, our LMS supports young learners in their educational journey.
          </p>
        </div>

        {isPending ? (
          <VirtualCoursesLoader />
        ) : (
          <Tabs onValueChange={(value) => setCurrentTab(value)} value={course} className="gap-6 lg:gap-8 w-full">
            <TabsList className="bg-white flex-wrap gap-2 lg:gap-7 w-full xl:w-2/4">
              {/* Mobile Tabs */}
              <TabsTrigger
                className={buttonVariants({
                  size: "sm",
                  variant: course == "our-programs" ? "default" : "secondary",
                  className: "flex md:hidden",
                })}
                value="our-programs">
                Our programs
              </TabsTrigger>
              <TabsTrigger
                className={buttonVariants({
                  size: "sm",
                  variant: course == "special-courses" ? "default" : "secondary",
                  className: "flex md:hidden",
                })}
                value="special-courses">
                Special courses
              </TabsTrigger>
              <TabsTrigger
                className={buttonVariants({
                  size: "sm",
                  variant: course == "free-courses" ? "default" : "secondary",
                  className: "flex md:hidden",
                })}
                value="free-courses">
                Free courses
              </TabsTrigger>
              {/* Desktop Tabs */}
              <TabsTrigger
                className={buttonVariants({
                  size: "lg",
                  variant: course == "our-programs" ? "default" : "secondary",
                  className: "hidden md:flex cursor-pointer",
                })}
                value="our-programs">
                Our programs
              </TabsTrigger>
              <TabsTrigger
                value="special-courses"
                className={buttonVariants({
                  size: "lg",
                  className: "hidden md:flex cursor-pointer",
                  variant: course == "special-courses" ? "default" : "secondary",
                })}>
                Special courses
              </TabsTrigger>
              <TabsTrigger
                value="free-courses"
                className={buttonVariants({
                  size: "lg",
                  className: "hidden md:flex cursor-pointer",
                  variant: course == "free-courses" ? "default" : "secondary",
                })}>
                Free courses
              </TabsTrigger>
            </TabsList>

            <div className="block sm:hidden h-1 w-full" />
            <TabsContent className="w-full" value="our-programs">
              <OurPrograms />
            </TabsContent>
            <TabsContent className="w-full" value="special-courses">
              <SpecialCourses />
            </TabsContent>
            <TabsContent className="w-full" value="free-courses">
              <FreeCourses />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </MaxWidthWrapper>
  );
}

export function OurPrograms() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true);
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      <Swiper
        modules={[A11y]}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setIsSliderStart(false);
            setIsSliderEnd(true);
          } else if (swiper.isBeginning) {
            setIsSliderStart(true);
          } else {
            setIsSliderStart(false);
            setIsSliderEnd(false);
          }
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        grabCursor>
        {ourProgramsData.map(({ courseTitle, image, instructor }) => (
          <SwiperSlide key={courseTitle}>
            <Card className="rounded-2xl relative h-80 p-0 overflow-hidden">
              <img loading="lazy" src={image} className="object-cover h-full w-full" />
              <div className="flex flex-col gap-2 p-4 absolute bottom-0 w-full bg-linear-to-b from-0% to-black">
                <p className="font-bold text-lg m-0 text-white">{courseTitle}</p>
                <p className="font-medium text-sm m-0 text-white">{instructor}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex gap-8 justify-between items-center">
        <Button variant={"secondary"} size={"lg"}>
          View more
        </Button>
        <svg width="857" height="4" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex items-center gap-4">
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full", {
                "bg-secondary cursor-not-allowed pointer-events-none": isSliderStart,
              }),
            })}
            onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeftIcon className="size-6 stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full", {
                "bg-secondary cursor-not-allowed pointer-events-none": isSliderEnd,
              }),
            })}
            onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRightIcon className="size-6 stroke-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpecialCourses() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true);
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      <Swiper
        modules={[A11y]}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setIsSliderStart(false);
            setIsSliderEnd(true);
          } else if (swiper.isBeginning) {
            setIsSliderStart(true);
          } else {
            setIsSliderStart(false);
            setIsSliderEnd(false);
          }
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        grabCursor>
        {specialCoursesData.map(({ courseTitle, image, instructor }) => (
          <SwiperSlide key={courseTitle}>
            <Card className="rounded-2xl relative h-80 p-0 overflow-hidden">
              <img loading="lazy" src={image} className="object-cover h-full w-full" />
              <div className="flex flex-col gap-2 p-4 absolute bottom-0 w-full bg-linear-to-b from-0% to-black">
                <p className="font-bold text-lg m-0 text-white">{courseTitle}</p>
                <p className="font-medium text-sm m-0 text-white">{instructor}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex gap-8 justify-between items-center">
        <Button variant={"secondary"} size={"lg"}>
          View more
        </Button>
        <svg width="857" height="4" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="flex items-center gap-4">
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full", {
                "bg-secondary cursor-not-allowed pointer-events-none": isSliderStart,
              }),
            })}
            onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeftIcon className="size-6 stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full", {
                "bg-secondary cursor-not-allowed pointer-events-none": isSliderEnd,
              }),
            })}
            onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRightIcon className="size-6 stroke-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FreeCourses() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true);
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      <Swiper
        modules={[A11y]}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setIsSliderStart(false);
            setIsSliderEnd(true);
          } else if (swiper.isBeginning) {
            setIsSliderStart(true);
          } else {
            setIsSliderStart(false);
            setIsSliderEnd(false);
          }
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        grabCursor>
        {freeCoursesData.map(({ courseTitle, image, instructor }) => (
          <SwiperSlide key={courseTitle}>
            <Card className="rounded-2xl relative h-80 p-0 overflow-hidden">
              <img loading="lazy" src={image} className="object-cover h-full w-full" />
              <div className="flex flex-col gap-2 p-4 absolute bottom-0 w-full bg-linear-to-b from-0% to-black">
                <p className="font-bold text-lg m-0 text-white line-clamp-2">{courseTitle}</p>
                <p className="font-medium text-sm m-0 text-white">{instructor}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex gap-8 justify-between items-center">
        <Button variant={"secondary"} size={"lg"}>
          View more
        </Button>
        <svg width="857" height="4" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="flex items-center gap-4">
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full", {
                "bg-secondary cursor-not-allowed pointer-events-none": isSliderStart,
              }),
            })}
            onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeftIcon className="size-6 stroke-3" />
          </div>
          <div
            className={buttonVariants({
              size: "icon",
              className: cn("cursor-pointer bg-primary rounded-full", {
                "bg-secondary cursor-not-allowed pointer-events-none": isSliderEnd,
              }),
            })}
            onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRightIcon className="size-6 stroke-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualCourses;
