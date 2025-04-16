import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="flex lg:hidden">
          <MenuIcon className="stroke-black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 md:px-8">
        <div className="flex flex-col gap-2 py-20">
          <Link className="font-medium py-4 text-black" to={"/"}>
            Home
          </Link>
          <div className="bg-primary h-0.5 w-full" />
          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger>About us</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <Button variant={"link"} size={"sm"}>
                  Why VizSchool?
                </Button>
                <Button variant={"link"} size={"sm"}>
                  Instructors
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link className="font-medium text-black py-4" to={"/"}>
            Courses
          </Link>
          <Link className="font-medium text-black py-4" to={"/"}>
            Reviews
          </Link>
          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger>Programmes</AccordionTrigger>
              <AccordionContent>
                <Button className="w-full" variant={"link"} size={"sm"}>
                  VizSchool CAMPUS
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button size={"sm"} variant={"secondary"}>
            Login
          </Button>
          <Button size={"sm"}>Sign up</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
