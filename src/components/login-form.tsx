import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"
import { IoLogoApple } from "react-icons/io"
import Logo from "@/assets/vizschool-logo.png"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
                <div className="flex justify-center md:hidden mt-6">
                    <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
                </div>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">Login to your VizSchool account</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
                <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-400 cursor-pointer">
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
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
                Don&apos;t have an account?{" "}
                <a href="#" className="hover:underline underline-offset-4 hover:text-orange-500">
                  Sign up
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
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
