
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="slide-up text-5xl sm:text-6xl font-bold tracking-tight mb-6 gradient-text">
          Transform your Twitter threads into engaging blog posts
        </h1>
        <p className="slide-up text-xl text-gray-600 mb-8 max-w-2xl mx-auto [animation-delay:200ms]">
          Effortlessly convert your Twitter threads into beautifully formatted blog posts. Share your thoughts with style.
        </p>
        <div className="slide-up flex items-center justify-center gap-4 [animation-delay:400ms]">
          <Button className="hover-lift text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25" size="lg">
            Start Writing <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
