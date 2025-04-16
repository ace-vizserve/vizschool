import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ActionBox = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-16 md:py-24">
        <Card className="bg-gradient-to-tr to-[#007AFF] from-red-300 w-full">
          <CardContent className="flex flex-col md:flex-row justify-between items-center p-6 lg:py-8 lg:px-16 gap-4">
            <div className="w-full !space-y-2">
              <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl select-none">Become an Instructor!</p>
              <p className="text-sm md:text-base -tracking-tighter text-white font-medium text-balance">
                Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children
                rejoiced. Yet uncommonly his ten who diminution astonished.
              </p>
            </div>

            <Button className="w-full md:w-max" size={"lg"}>
              Start Teaching Today
            </Button>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};

export default ActionBox;
