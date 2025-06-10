
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-medium">
          🤖 AI-GENERATED SATIRICAL CONTENT - NOT REAL NEWS 🤖
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                SatireBot News
              </h1>
              <p className="text-sm text-muted-foreground">AI-Powered Satirical Takes on Real News</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 py-3 border-t">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Breaking Satire</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Politics</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Technology</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sports</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Local</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Entertainment</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
