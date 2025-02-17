
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight gradient-text hover:opacity-90 transition-opacity">
          chirrapp
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/#features" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link to="/#how-it-works" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            How it works
          </Link>
          <Link to="/editor">
            <Button variant="default" size="sm" className="hover-lift bg-gradient-to-r from-purple-600 to-pink-600">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
