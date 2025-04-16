"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { LucideIcon, SchoolIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { about } from "./config";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-0 space-x-0 text-sm">
      <NavigationMenuItem>
        <Button variant="ghost" asChild>
          <Link to="#">Courses</Link>
        </Button>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Button variant="ghost" asChild>
          <Link to="#">Reviews</Link>
        </Button>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={navigationMenuTriggerStyle({
            className: "bg-transparent",
          })}>
          Programme
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-[400px] p-4 md:w-[500px]">
            <ListItem title={"VizSchool CAMPUS"} icon={SchoolIcon} to="#">
              Explore our virtual campus—an engaging, student-friendly space designed to support learning, creativity,
              and collaboration.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={navigationMenuTriggerStyle({
            className: "bg-transparent",
          })}>
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {about.map((menuItem) => (
              <ListItem key={menuItem.title} title={menuItem.title} icon={menuItem.icon} to="#">
                {menuItem.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <props.icon className="mb-4 h-6 w-6 stroke-primary" />
          <div className="text-sm font-semibold leading-none text-primary">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
