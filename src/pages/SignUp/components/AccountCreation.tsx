import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/assets/vizschool-logo.png";

export function AccountCreation({
  className,
  onNext,
  ...props
}: React.ComponentProps<"div"> & { onNext: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form validation logic here
    onNext();
  };

  return (
    <div className={cn("flex flex-col gap-6 items-center justify-center min-h-screen px-4", className)} {...props}>
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center md:hidden mt-6">
                <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
              </div>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p className="text-balance text-muted-foreground">
                  Start your journey with us
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmEmail">Confirm Email *</Label>
                <Input
                  id="confirmEmail"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password *</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input id="confirmPassword" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-400 cursor-pointer">
                Next
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full cursor-pointer hover:bg-orange-100">
                  <IoLogoApple />
                  <span className="sr-only">Login with Apple</span>
                </Button>
                <Button variant="outline" className="w-full cursor-pointer hover:bg-orange-100">
                  <FcGoogle />
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="#" className="hover:underline underline-offset-4 hover:text-orange-500">
                  Login
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden md:block">
            <img
              src={Logo}
              alt="Image"
              className="absolute inset-0 w-80 h-80 object-contain mx-auto my-auto"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
