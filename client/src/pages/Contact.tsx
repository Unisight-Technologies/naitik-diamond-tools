import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact, type ContactRequest } from "@/hooks/use-contact";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const submitContact = useSubmitContact();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const form = useForm<ContactRequest>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactRequest) => {
    if (!captchaVerified) {
      form.setError("root", { message: "Please verify you are not a robot" });
      return;
    }
    submitContact.mutate(data, {
      onSuccess: () => {
        form.reset();
        setCaptchaVerified(false);
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80">
              Get in touch for quotes, technical support, or distribution inquiries.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 -mt-8 mb-20">
          <div className="grid lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Info Panel */}
            <div className="bg-slate-900 text-white p-10 lg:p-12 space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
                <p className="text-slate-400">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-slate-300">+91 9414174580</p>
                    {/* <p className="text-slate-400 text-sm mt-1">All Week 8am-8pm IST</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-slate-300">naitikdiamondtools@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Office</h4>
                    <p className="text-slate-300">
                      NH-8, Bhagwanda Village, near Morchana <br />
                      Kankroli, Rajsamand 313324 (Rajasthan)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>Response time: ~12 hours</span>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-2 p-10 lg:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 bg-slate-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" className="h-12 bg-slate-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" className="h-12 bg-slate-50" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" className="h-12 bg-slate-50" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or tool needs..." 
                            className="min-h-[150px] bg-slate-50 resize-none p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mock Captcha */}
                  <div className="bg-slate-50 border rounded-lg p-4 w-fit flex items-center gap-3">
                    <Checkbox 
                      id="captcha" 
                      checked={captchaVerified}
                      onCheckedChange={(c) => setCaptchaVerified(!!c)}
                    />
                    <label htmlFor="captcha" className="text-sm font-medium cursor-pointer select-none">
                      I am not a robot
                    </label>
                  </div>
                  {form.formState.errors.root && (
                    <p className="text-destructive text-sm font-medium">
                      {form.formState.errors.root.message}
                    </p>
                  )}

                  <Button 
                    type="submit" 
                    disabled={submitContact.isPending}
                    className="w-full md:w-auto px-8 h-12 text-lg font-bold"
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
