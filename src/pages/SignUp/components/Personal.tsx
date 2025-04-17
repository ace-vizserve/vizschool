import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/assets/vizschool-logo.png";

export function Personal({
  className,
  onNext,
  onBack,
  ...props
}: React.ComponentProps<"div"> & { onNext: () => void; onBack: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation here if necessary
    onNext();
  };

  return (
    <div className={cn("flex flex-col gap-6 items-center justify-center min-h-screen px-4", className)} {...props}>
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p className="text-balance text-muted-foreground">
                  Start your journey with us
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select name="role" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="nickname">Nickname</Label>
                <Input
                  id="nickname"
                  type="text"
                  placeholder="Enter your nickname"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="flex justify-between gap-4">
                <Button
                  type="button"
                  onClick={onBack}
                  className="w-30 bg-orange-500 hover:bg-orange-400"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-30 bg-orange-500 hover:bg-orange-400"
                >
                  Next
                </Button>
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
