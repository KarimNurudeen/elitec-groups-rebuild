import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    subject: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", email: "", date: "", subject: "" });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Cyan Background Block */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-accent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Grease Trap Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop" 
              alt="Grease trap equipment"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Right - Form */}
          <div className="bg-white p-10 rounded-lg shadow-xl">
            <p className="text-accent text-xs font-bold mb-2 uppercase tracking-widest">
              Make Appointment
            </p>
            <h2 className="text-4xl font-bold text-navy mb-8">
              Make An Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="h-12 bg-gray-100 border-0 rounded-md"
              />
              
              <Input 
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="h-12 bg-gray-100 border-0 rounded-md"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                  className="h-12 bg-gray-100 border-0 rounded-md"
                />
                
                <Input 
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  className="h-12 bg-gray-100 border-0 rounded-md"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-navy font-bold h-12 text-base rounded-md mt-6"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};