import { footerLinks, footerLinks2, socialMediaLinks, talkToUsLinks } from "@/assets/data";
import logo from "@/assets/vizschool-logo.png";
import { GlobeLockIcon, HandshakeIcon, MapIcon, TicketSlashIcon } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#343434]">
      <MaxWidthWrapper className="space-y-10 sm:space-y-14 md:space-y-14 lg:space-y-20 py-16">
        <div className="w-full flex flex-wrap lg:flex-nowrap">
          <div className="w-full flex flex-wrap">
            <div className="w-1/2 space-y-4">
              <p className="text-white font-bold text-lg">{footerLinks[0].title}</p>
              <div className="space-y-2">
                {footerLinks[0].items.map((item, i) => (
                  <p key={i} className="text-white text-xs md:text-sm">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-1/2 space-y-7">
              <div className="space-y-4 w-full md:w-44">
                <p className="text-white font-bold text-lg">{footerLinks2[0].title}</p>
                <div className="w-full flex justify-between">
                  <div className="space-y-2">
                    {footerLinks2[0].items.slice(0, 3).map((item, i) => (
                      <p key={i} className="text-white text-xs md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {footerLinks2[0].items.slice(3).map((item, i) => (
                      <p key={i} className="text-white text-xs md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4 w-full md:w-52">
                <p className="text-white font-bold text-lg">{footerLinks2[1].title}</p>
                <div className="w-full flex justify-between">
                  <div className="space-y-2">
                    {footerLinks2[1].items.slice(0, 2).map((item, i) => (
                      <p key={i} className="text-white text-xs md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {footerLinks2[1].items.slice(2).map((item, i) => (
                      <p key={i} className="text-white text-xs md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 lg:py-0 grow flex flex-wrap flex-col justify-center lg:justify-start w-full md:w-1/2 space-y-4">
            <p className="text-center lg:text-right text-white text-2xl font-bold">Subscribe to Our Newsletter!</p>
            <div className="flex items-center relative">
              <Input placeholder="Your email address" className="bg-white text-sm py-6 w-full" />
              <div className="right-4 z-10 absolute">
                <Button size={"sm"}>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mx-auto lg:mx-0 p-4 rounded-full size-max bg-white">
            <img className="object-cover size-16 md:size-24" src={logo} alt="logo" />
          </div>
          <div className="flex flex-col items-center lg:items-start w-full md:mx-0 space-y-4 lg:w-52">
            <p className="text-white font-bold text-lg text-center md:text-start">Follow us</p>
            <div className="flex items-center gap-4">
              {socialMediaLinks.map((link) => (
                <img key={link.icon} className="size-6" src={link.icon} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-white font-bold text-lg">Talk to us</p>
            <div className="flex flex-col justify-center gap-4">
              {talkToUsLinks.map((item) => (
                <div key={item.details} className="flex items-center gap-2">
                  <item.icon className="stroke-white size-4" />
                  <span className="text-white text-xs text-balance -tracking-tighter">{item.details}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="h-0.5 w-full bg-white" />
      <MaxWidthWrapper>
        <div className="py-10 flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center w-full">
          <span className="text-white text-xs -tracking-tighter">
            Copyright © {new Date().getFullYear()} VizSchool. All rights reserved.
          </span>
          <div className="w-full md:w-max grid grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="w-full flex items-center md:justify-center gap-2">
              <HandshakeIcon className="stroke-primary" />
              <span className="text-xs text-primary">Terms&nbsp;and&nbsp;conditions</span>
            </div>
            <div className="w-full flex items-center justify-end md:justify-center gap-2">
              <TicketSlashIcon className="stroke-primary" />
              <span className="text-xs text-primary">Refund Policy</span>
            </div>
            <div className="w-full flex items-center justify-start xl:justify-center gap-2">
              <GlobeLockIcon className="stroke-primary" />
              <span className="text-xs text-primary">Privacy Policy</span>
            </div>
            <div className="w-full flex items-center justify-end md:justify-center gap-2">
              <MapIcon className="stroke-primary" />
              <span className="text-xs text-primary">Sitemap</span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
