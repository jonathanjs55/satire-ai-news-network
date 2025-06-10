
import { Clock, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedArticleProps {
  headline: string;
  summary: string;
  category: string;
  timestamp: string;
  originalSource: string;
  image: string;
}

const FeaturedArticle = ({ 
  headline, 
  summary, 
  category, 
  timestamp, 
  originalSource,
  image 
}: FeaturedArticleProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={headline}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="breaking-badge">
              Featured Satire
            </span>
            <span className="satirical-badge">
              AI Generated
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 backdrop-blur text-white px-2 py-1 rounded text-xs font-medium uppercase tracking-wide">
                {category}
              </span>
              <div className="flex items-center text-sm">
                <Clock className="h-3 w-3 mr-1" />
                {timestamp}
              </div>
            </div>
            <h2 className="news-headline text-2xl md:text-3xl mb-3 group-hover:text-orange-300 transition-colors">
              {headline}
            </h2>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
            {summary}
          </p>
          
          <div className="flex items-center text-sm text-muted-foreground border-t pt-4">
            <ArrowUp className="h-4 w-4 mr-1 rotate-45" />
            Based on real news from {originalSource}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedArticle;
