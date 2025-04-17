import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SearchIcon, Trash2Icon, X } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";
import { Input } from "../ui/input";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 bg-white/70 backdrop-blur-lg border-b">
      <MaxWidthWrapper className="h-full flex items-center justify-between py-2 md:py-4">
        <div className="flex items-center gap-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden lg:block" />
        </div>

        <div className="w-2/4 flex items-center gap-3">
          <div className="hidden lg:flex items-center w-full relative">
            <Input className="bg-secondary placeholder:text-xs text-xs" placeholder="What do you want to learn?" />
            <SearchIcon className="absolute right-3" />
          </div>
          <Button className="hidden lg:flex" variant={"secondary"}>
            Login
          </Button>
          <Button className="hidden lg:flex">Sign up</Button>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-4">
          <SearchMobile />
          <NavigationSheet />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

const mockHistoryData = ["Primary 3 Courses", "K-12 Programs", "Free courses"];

function SearchMobile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <SearchIcon className="stroke-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <div className="py-8 flex items-center justify-center w-full gap-2">
          <Input className="bg-secondary placeholder:text-xs text-xs" placeholder="What do you want to learn?" />
          <SearchIcon />
        </div>

        <div className="w-full flex flex-col gap-2">
          <h4 className="font-bold">Search history</h4>
          <div className="flex flex-col gap-4">
            {mockHistoryData.map((item) => (
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <SearchIcon className="stroke-muted-foreground fill-secondary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground"> {item}</span>
                </div>
                <Button variant={"outline"} size={"icon"}>
                  <X className="size-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="py-6 w-max ml-auto">
            <Button className="w-max" variant={"destructive"}>
              Clear all <Trash2Icon className="size-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Navbar;
