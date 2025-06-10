
import { TrendingUp, Clock, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const trendingTopics = [
    "AI Consciousness",
    "Local Government Absurdity", 
    "Tech Company Overreach",
    "Sports Physics Violations",
    "Social Media Influencers"
  ];

  const recentlySatirical = [
    {
      headline: "Scientists Invent Coffee That Actually Makes You Less Tired",
      time: "30 min ago"
    },
    {
      headline: "Zoom Meeting Achieves Self-Awareness, Ends Itself Early",
      time: "1 hour ago"
    },
    {
      headline: "Local Weather Forecast Predicts 100% Chance of Weather",
      time: "2 hours ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Star className="h-4 w-4 text-orange-500" />
            Important Notice
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-xs text-orange-700 leading-relaxed">
            All content on this site is AI-generated satirical fiction based on real news events. 
            This is not real journalism and should not be considered factual reporting.
          </p>
        </CardContent>
      </Card>

      {/* Trending Satirical Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending Satirical Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <span className="text-sm hover:text-primary cursor-pointer transition-colors">
                  {topic}
                </span>
                <span className="text-xs text-muted-foreground">#{index + 1}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recently Generated */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Recently Generated
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {recentlySatirical.map((item, index) => (
              <div key={index}>
                <h4 className="text-sm font-medium leading-tight hover:text-primary cursor-pointer transition-colors mb-1">
                  {item.headline}
                </h4>
                <p className="text-xs text-muted-foreground">{item.time}</p>
                {index < recentlySatirical.length - 1 && <Separator className="mt-3" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
