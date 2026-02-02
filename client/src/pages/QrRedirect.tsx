import { useEffect } from "react";
import { useLocation } from "wouter";

export default function QrRedirect() {
  const [location, navigate] = useLocation();
  
  useEffect(() => {
    // Hardcoded redirect destination
    const redirectTo = "/";
    
    // Perform the redirect after a short delay to ensure smooth UX
    const timer = setTimeout(() => {
      navigate(redirectTo);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}