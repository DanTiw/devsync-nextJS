'use client'
import { Button } from "./_components/ui/Button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Code snippets decoration */}
        <div className="absolute top-40 right-10 transform rotate-12 opacity-10">
          <pre className="text-primary font-mono">
            {`const DevSync = () => {
  return <Connection />;
}`}
          </pre>
        </div>
        
        {/* Connecting dots animation */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl w-full space-y-12 z-10">
        {/* Hero section */}
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent animate-fade-in">
            DevSync
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect with developers who share your interests and build amazing projects together
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Your Coding Partner</h3>
            <p className="text-sm text-muted-foreground">Match with developers who complement your skills and share your vision</p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Collaborate on Projects</h3>
            <p className="text-sm text-muted-foreground">Build your portfolio through meaningful collaborations and shared success</p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Grow Together</h3>
            <p className="text-sm text-muted-foreground">Learn from peers, expand your network, and accelerate your growth</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
            onClick={() => router.push("/signup")}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10 group"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;