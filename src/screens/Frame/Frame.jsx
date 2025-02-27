import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

export const Frame = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="relative overflow-hidden bg-[url(https://c.animaapp.com/7FhxPQt5/img/frame-5.png)] bg-cover bg-[50%_50%] w-[1000px] h-[700px]">
        {/* Background and portrait section */}
        <div className="relative w-full h-full">
          <div className="absolute w-[725px] h-[725px] top-0 left-0">
            <div className="relative w-[655px] h-[700px] top-6 left-[70px]">
              <div className="absolute w-[454px] h-[454px] top-[129px] left-[65px] rounded-[227px] shadow-[inset_0px_4px_4px_2px_#00000040,0px_0px_100px_2px_#00000040] [background:linear-gradient(180deg,rgb(213,216,223)_0%,rgb(153,153,153)_100%)]" />
              <img
                className="absolute w-[655px] h-[700px] top-0 left-0 object-cover"
                alt="Student portrait"
                src="https://c.animaapp.com/7FhxPQt5/img/ai-generated-portrait-of-student-background-free-png-1.png"
              />
            </div>
          </div>

          {/* Login card */}
          <Card className="absolute w-[397px] h-[486px] top-[133px] left-[558px] bg-[#d9d9d9] rounded-[58px] shadow-[4px_4px_5px_2px_#fffcfc42] border-none overflow-hidden">
            <CardContent className="p-0 relative h-full">
              {/* Title and subtitle */}
              <h1 className="absolute top-[63px] left-1/2 -translate-x-1/2 font-['Jacques_Francois'] font-normal text-black text-4xl text-center tracking-[0] leading-[normal] underline whitespace-nowrap">
                Log In
              </h1>
              <p className="absolute top-[97px] left-1/2 -translate-x-1/2 font-['Jacques_Francois'] font-normal text-black text-base tracking-[0] leading-[normal]">
                Login to your Account
              </p>

              {/* Form inputs */}
              <div className="absolute w-[281px] top-[169px] left-1/2 -translate-x-1/2 space-y-4">
                <div className="relative">
                  <Input
                    className="w-full h-9 bg-[#d9d9d9] rounded-[10px] border-black focus:ring-black focus:border-black"
                    placeholder="Email-Id"
                  />
                </div>

                <div className="relative">
                  <Input
                    className="w-full h-9 bg-[#d9d9d9] rounded-[10px] border-black focus:ring-black focus:border-black"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Remember me checkbox */}
              <div className="absolute flex items-center gap-2 top-[278px] left-[63px]">
                <Checkbox
                  id="remember"
                  className="w-4 h-4 bg-white border-black data-[state=checked]:bg-[#223f6e] data-[state=checked]:border-[#223f6e]"
                />
                <label
                  htmlFor="remember"
                  className="font-['Jacques_Francois'] font-normal text-black text-sm tracking-[0] leading-[normal] select-none"
                >
                  Remember Me
                </label>
              </div>

              {/* Login button */}
              <Button 
                className="absolute w-[281px] h-[39px] top-[326px] left-1/2 -translate-x-1/2 bg-[#223f6e] hover:bg-[#223f6e]/90 rounded-[20px] font-['Jacques_Francois'] font-normal text-white text-2xl transition-colors duration-200"
                type="submit"
              >
                Log In
              </Button>

              {/* Links */}
              <div className="absolute w-full flex justify-between px-[63px] top-[395px]">
                <a
                  href="#"
                  className="font-['Jacques_Francois'] font-normal text-black text-sm tracking-[0] leading-[normal] hover:underline transition-all duration-200"
                >
                  Create an Account
                </a>
                <a
                  href="#"
                  className="font-['Jacques_Francois'] font-normal text-black text-sm tracking-[0] leading-[normal] hover:underline transition-all duration-200"
                >
                  Forget Password?
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Close button */}
          <Button
            variant="ghost"
            className="absolute w-[30px] h-[30px] top-[58px] right-[35px] p-0"
          >
            <XIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
