"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const AuthFormBtn = ({ type }: { type: "login" | "signup" }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="mt-4 w-full">
      {type === "login" ? "Log In" : "Sign Up"}
    </Button>
  );
};

export default AuthFormBtn;
