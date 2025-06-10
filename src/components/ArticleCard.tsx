
import { Clock, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  headline: string;
  summary: string;
  category: string;
  timestamp: string;
  isBreaking?: boolean;
  originalSource?: string;
  image?: string;
}

const ArticleCard = ({ 
  headline, 
  summary, 
  category, 
  timestamp, 
  isBreaking = false,
  originalSource,
  image 
}: ArticleCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        {image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={image} 
              alt={headline}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {isBreaking && (
                <span className="breaking-badge">
                  Breaking Satire
                </span>
              )}
              <span className="satirical-badge">
                AI Generated
              </span>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="category-tag">{category}</span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {timestamp}
            </div>
          </div>
          
          <h3 className="news-headline text-xl mb-3 group-hover:text-primary transition-colors">
            {headline}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {summary}
          </p>
          
          {originalSource && (
            <div className="flex items-center text-xs text-muted-foreground border-t pt-3">
              <ArrowUp className="h-3 w-3 mr-1 rotate-45" />
              Based on real news from {originalSource}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
