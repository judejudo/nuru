import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios"; // You'll need to install axios

export const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({
        type: "error",
        message: "Please enter your email",
      });
      return;
    }

    try {
      setStatus({
        type: "loading",
        message: "Submitting...",
      });

      // Call your API endpoint
      await axios.post('/api/subscribe', {
        subscriberEmail: email,
        notifyEmail: 'contact@nuruforge.com'
      });

      setStatus({
        type: "success",
        message: "Thank you for subscribing!",
      });
      setEmail("");
      
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus({
        type: "error",
        message: "Failed to subscribe. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-[465px]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-stretch gap-5 overflow-hidden justify-between pl-8 pr-2.5 py-2.5 rounded-[50px] bg-[rgba(13,13,13,1)]"
      >
        <Input
          type="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-none bg-transparent text-[rgba(204,204,204,1)] text-base font-normal"
          disabled={status.type === "loading"}
        />
        <Button
          type="submit"
          className="bg-[rgba(208,255,0,1)] shadow-[0px_20px_35px_rgba(221,255,0,0.2)] text-[15px] text-[rgba(13,13,13,1)] font-medium px-[29px] py-5 rounded-[40px] hover:bg-[rgba(188,230,0,1)]"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Submitting..." : "Get notified"}
        </Button>
      </form>
      
      {status.message && (
        <div 
          className={`mt-2 text-sm ${
            status.type === "success" ? "text-green-500" : 
            status.type === "error" ? "text-red-500" : 
            "text-gray-400"
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};