import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList } from "@/components/ui/tabs";

function VirtualCoursesLoader() {
  return (
    <Tabs className="px-6 md:px-8 gap-6 lg:gap-8 w-full">
      <TabsList className="bg-white justify-start flex-wrap gap-2 lg:gap-7 w-full lg:w-2/4">
        <Skeleton className="w-full h-10" />
      </TabsList>
      <div className="flex items-center justify-center w-full h-80 space-x-0 md:space-x-5">
        <Skeleton className="w-full h-full rounded-2xl" />
        <Skeleton className="hidden md:block w-full h-full rounded-2xl" />
        <Skeleton className="hidden md:block w-full h-full rounded-2xl" />
      </div>

      <div className="w-full flex gap-8 justify-between items-center">
        <Skeleton className="w-full md:w-48 h-10" />
        <svg width="857" height="6" viewBox="0 0 857 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H855" stroke="#E7E7E7" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="flex items-center gap-4">
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
        </div>
      </div>
    </Tabs>
  );
}

export default VirtualCoursesLoader;
