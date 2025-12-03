import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ServiceRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    preferredDate: undefined as Date | undefined,
    alternativeDate: undefined as Date | undefined,
    preferredTime: "",
    consent: false,
  });

  const [phoneConsent, setPhoneConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.preferredDate || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      streetAddress: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      preferredDate: undefined,
      alternativeDate: undefined,
      preferredTime: "",
      consent: false,
    });
    setPhoneConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-100 text-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Service Request</h1>
          <div className="text-center text-navy/70">
            <span>Home</span> <span className="mx-2">»</span> <span>Service Request</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="E.g. John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="E.g. Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. john@doe.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g. +1 416-273-8471"
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    <p>By providing your phone number, you agree to receive text messages (SMS) from Elitec Group. You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency varies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="streetAddress">Street Address</Label>
                <Input
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  placeholder="Enter street address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apartment">Apartment, suite, etc</Label>
                <Input
                  id="apartment"
                  value={formData.apartment}
                  onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                  placeholder="Apartment, suite, etc"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Enter city"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="Enter state/province"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  placeholder="Enter ZIP/postal code"
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy">Appointment Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>
                    Which Day would be best for an appointment? <span className="text-destructive">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.preferredDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.preferredDate ? (
                          format(formData.preferredDate, "PPP")
                        ) : (
                          <span>Choose Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.preferredDate}
                        onSelect={(date) => setFormData({ ...formData, preferredDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>What is another day that works for you?</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.alternativeDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.alternativeDate ? (
                          format(formData.alternativeDate, "PPP")
                        ) : (
                          <span>Choose Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.alternativeDate}
                        onSelect={(date) => setFormData({ ...formData, alternativeDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="space-y-4">
              <Label>
                Consent <span className="text-destructive">*</span>
              </Label>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                  required
                />
                <Label
                  htmlFor="consent"
                  className="font-normal cursor-pointer text-sm leading-relaxed"
                >
                  Confirm that you agree to our terms of service and cancellation policy by checking this box.
                </Label>
              </div>
            </div>

            {/* Preferred Time */}
            <div className="space-y-4">
              <Label>What are your preferred arrival times?</Label>
              <RadioGroup
                value={formData.preferredTime}
                onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="any" />
                  <Label htmlFor="any" className="font-normal cursor-pointer">Any time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="morning" id="morning" />
                  <Label htmlFor="morning" className="font-normal cursor-pointer">Morning</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="afternoon" id="afternoon" />
                  <Label htmlFor="afternoon" className="font-normal cursor-pointer">Afternoon</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="evening" id="evening" />
                  <Label htmlFor="evening" className="font-normal cursor-pointer">Evening</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              Submit appointment
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceRequest;
