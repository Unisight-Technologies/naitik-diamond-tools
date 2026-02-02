import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactRequest): Promise<{ success: boolean; message: string }> => {
      // Simulate form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Since this is a static site, we'll just show a success message
      // In a real scenario, you could integrate with services like Formspree, Netlify Forms, or send to an external service
      console.log("Contact form submission:", data);
      
      return { 
        success: true, 
        message: "Thank you for your inquiry! Since this is a demo site, your message wasn't actually sent. In a real implementation, this would be integrated with a contact form service." 
      };
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "We have received your message and will contact you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
