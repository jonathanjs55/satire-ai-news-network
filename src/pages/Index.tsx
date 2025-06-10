
import Header from "@/components/Header";
import FeaturedArticle from "@/components/FeaturedArticle";
import NewsGrid from "@/components/NewsGrid";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredArticle = {
    headline: "Breaking: Coffee Shop Customer Actually Knows What They Want to Order",
    summary: "In what scientists are calling a 'statistical impossibility,' local customer Jennifer Martinez reportedly approached the counter with a predetermined beverage choice, causing the entire establishment to temporarily shut down for investigation.",
    category: "Breaking Satire",
    timestamp: "Just now",
    originalSource: "CNN Business",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Article */}
            <section>
              <FeaturedArticle {...featuredArticle} />
            </section>
            
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Latest Satirical Takes</h2>
              <span className="text-sm text-muted-foreground">Auto-updated every 2 hours</span>
            </div>
            
            {/* News Grid */}
            <section>
              <NewsGrid />
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
