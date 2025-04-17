import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/assets/vizschool-logo.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";

interface VerificationProps extends React.ComponentProps<"div"> {
  onBack: () => void;
}

export function Verification({
  className,
  onBack,
  ...props
}: VerificationProps) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let countdown: NodeJS.Timeout;

    if (minutes === 0 && seconds === 0) {
      setIsResendDisabled(false);
    } else {
      countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const handleResend = () => {
    if (isResendDisabled) return;

    // Reset timer
    setMinutes(1);
    setSeconds(59);
    setIsResendDisabled(true);

    // Trigger resend OTP logic here
    console.log("Resend OTP");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission logic here
    console.log("Submitted OTP:", otp);
    navigate("/login"); // Navigate to the login page after successful OTP verification
  };

  return (
    <div className={cn("flex flex-col gap-6 items-center justify-center min-h-screen px-4", className)} {...props}>
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent  className="grid grid-cols-1 md:grid-cols-2 p-0">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p className="text-balance text-muted-foreground">
                  Start your journey with us
                </p>
              </div>
              <div>
                <p className="text-center text-balance text-black-foreground">
                  We have sent you a verification code to your email address.
                </p>
                <p className="text-center text-balance text-black-foreground">
                  Please enter the code below to verify your account.
                </p>
              </div>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  autoFocus
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup className="gap-x-1 md:gap-x-2">
                    <InputOTPSlot
                      index={0}
                      className="w-12 h-12 md:w-14 md:h-14 text-2xl rounded-md"
                    />
                    <InputOTPSlot
                      index={1}
                       className="w-12 h-12 md:w-14 md:h-14 text-2xl rounded-md"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-12 h-12 md:w-14 md:h-14 text-2xl rounded-md"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup className="gap-x-1 md:gap-x-2">
                    <InputOTPSlot
                      index={3}
                       className="w-12 h-12 md:w-14 md:h-14 text-2xl rounded-md"
                    />
                    <InputOTPSlot
                      index={4}
                       className="w-12 h-12 md:w-14 md:h-14 text-2xl rounded-md"
                    />
                    <InputOTPSlot
                      index={5}
                       className="w-12 h-12 md:w-14 md:h-14 text-2xl rounded-md"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              {/* Countdown Timer */}
              <div className="text-center text-sm text-gray-600">
                {minutes === 0 && seconds === 0 ? (
                  <span>Didn't receive the code?</span>
                ) : (
                  <span>
                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </span>
                )}
              </div>
              <div className="flex justify-center mt-3">
                <p className="text-center text-balance text-black-foreground">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    className={`text-orange-500 hover:underline ${
                      isResendDisabled
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    onClick={handleResend}
                    disabled={isResendDisabled}
                  >
                    Resend
                  </button>
                </p>
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
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
