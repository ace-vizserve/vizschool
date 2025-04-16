import { popularArticlesData } from "@/assets/data";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRight, Clock3Icon } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

function PopularArticles() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isSliderStart, setIsSliderStart] = useState<boolean>(true);
  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center gap-12">
        <div className="text-center">
          <h1 className="text-center text-balance text-3xl lg:text-4xl font-bold select-none">Popular Articles</h1>
        </div>
        <div className="relative flex justify-center items-center container">
          <Swiper
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
            grabCursor
            modules={[A11y, Navigation]}
            draggable="false">
            {popularArticlesData.map(({ description, duration, image, title }, i) => (
              <SwiperSlide key={i}>
                <Card key={i} className="shadow-none overflow-hidden rounded-2xl pt-0 px-0">
                  <CardHeader className="p-0">
                    <img src={image} className="rounded-tr-2xl rounded-tl-2xl aspect-video object-cover w-full" />
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-primary line-clamp-2 text-xl md:text-2xl font-bold">{title}</h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground line-clamp-2 text-balance -tracking-tighter">
                        {description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button size={"sm"} className="w-max">
                        Read more <ChevronRight className="size-2" />
                      </Button>
                      <div className="flex items-center gap-1">
                        <Clock3Icon className="size-4 stroke-muted-foreground" />
                        <span className="font-medium text-xs text-muted-foreground">{duration} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="-left-4 absolute z-20">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className={cn("cursor-pointer bg-primary p-2 rounded-full", {
                "bg-secondary cursor-not-allowed": isSliderStart,
              })}>
              <ArrowLeftIcon className="size-8 md:size-10 stroke-white stroke-3" />
            </div>
          </div>
          <div className="-right-4 absolute z-20">
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className={cn("cursor-pointer bg-primary p-2 rounded-full", {
                "bg-secondary cursor-not-allowed": isSliderEnd,
              })}>
              <ArrowRightIcon className="size-8 md:size-10 stroke-white stroke-3" />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default PopularArticles;
