import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EmailInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[465px] items-stretch gap-5 overflow-hidden justify-between pl-8 pr-2.5 py-2.5 rounded-[50px] bg-[rgba(13,13,13,1)]"
    >
      <Input
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-none bg-transparent text-[rgba(204,204,204,1)] text-base font-normal"
      />
      <Button
        type="submit"
        className="bg-[rgba(208,255,0,1)] shadow-[0px_20px_35px_rgba(221,255,0,0.2)] text-[15px] text-[rgba(13,13,13,1)] font-medium px-[29px] py-5 rounded-[40px] hover:bg-[rgba(188,230,0,1)]"
      >
        Get notified
      </Button>
    </form>
  );
};
