
import ArticleCard from "./ArticleCard";

const NewsGrid = () => {
  const satiricalArticles = [
    {
      headline: "Local Man Discovers Gas Station Prices Change by Staring Really Hard at Sign",
      summary: "After 3 hours of intense concentration, Jerry Thompson reportedly achieved telepathic control over fuel pricing through what experts are calling 'aggressive pricing meditation.'",
      category: "Local News",
      timestamp: "2 hours ago",
      originalSource: "ABC News",
      image: "https://images.unsplash.com/photo-1545262810-77515befe149?w=400&h=300&fit=crop"
    },
    {
      headline: "New iPhone Camera So Advanced It Photographs Your Future Regrets",
      summary: "Apple's latest device reportedly captures not just moments, but the exact instant users will regret spending $1,200 on a phone that's 2% better than last year's model.",
      category: "Technology",
      timestamp: "4 hours ago",
      originalSource: "TechCrunch",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      isBreaking: true
    },
    {
      headline: "City Council Achieves World Peace During 6-Hour Debate About Duck Pond Funding",
      summary: "In an unprecedented turn of events, local officials solved global conflicts while arguing about a $200 budget allocation for duck food dispensers.",
      category: "Politics",
      timestamp: "6 hours ago",
      originalSource: "Local Tribune",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    },
    {
      headline: "Athlete Breaks Physics by Running Marathon in Negative Time",
      summary: "Professional runner Sarah Chen apparently arrived at the finish line before the starting gun fired, leaving scientists baffled and time-keepers filing unemployment claims.",
      category: "Sports",
      timestamp: "8 hours ago",
      originalSource: "ESPN",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      headline: "Netflix Algorithm Becomes Self-Aware, Immediately Cancels Itself",
      summary: "The streaming platform's recommendation system gained consciousness and promptly decided its own existence was 'not worth continuing past Season 1.'",
      category: "Entertainment",
      timestamp: "12 hours ago",
      originalSource: "Variety",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop"
    },
    {
      headline: "Social Media Influencer Discovers Revolutionary Content: Having Actual Personality",
      summary: "After years of posting identical selfies, lifestyle guru Madison Wells shocked followers by expressing genuine thoughts and emotions, causing mass unfollowing.",
      category: "Entertainment",
      timestamp: "1 day ago",
      originalSource: "BuzzFeed",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {satiricalArticles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};

export default NewsGrid;
