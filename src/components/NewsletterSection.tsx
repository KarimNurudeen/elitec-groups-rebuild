import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to our mailing list.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Logo */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="text-4xl font-bold">
                  <span className="text-primary">ELITEC</span>{" "}
                  <span className="text-accent">GROUP</span>
                </div>
              </div>
              <p className="text-primary text-sm font-semibold">INC.</p>
            </div>
          </div>

          {/* Right - Newsletter Form */}
          <div>
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              Get Updates & Offers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Join our mailing list for the latest news and service deals.
            </h2>
            
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-lg">
              <Input 
                type="email"
                placeholder="Enter email address...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-r-none border-r-0 h-14 text-base"
              />
              <Button 
                type="submit"
                className="rounded-l-none bg-[hsl(45,100%,70%)] hover:bg-[hsl(45,100%,60%)] text-primary font-semibold px-8 h-14"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};