import React, { useState, useEffect, useRef, useCallback } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/Navbar";
import { fetchTopHeadlines } from "../Apis/newsApi";
import BottomNav from "../components/Bottamnav";

const FeedPage = () => {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef(null);

  // Load news function
  const loadNews = useCallback(async () => {
    if (!hasMore) return;

    const { articles: newArticles, totalResults } = await fetchTopHeadlines(page, category);

    setArticles((prev) => [...prev, ...newArticles]);
    setPage((prev) => prev + 1);

    if (articles.length + newArticles.length >= totalResults) {
      setHasMore(false);
    }
  }, [page, category, hasMore, articles.length]);

  // Reset feed when category changes
  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  // IntersectionObserver to trigger load when last item is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNews();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loadNews]);

  return (
    <div className="relative h-screen">
      <Navbar category={category} setCategory={setCategory} />
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {articles.map((article, idx) => (
          <NewsCard key={idx} article={article} />
        ))}

        <div ref={loader} className="h-24 flex items-center justify-center">
          {hasMore ? <p>Loading more news...</p> : <p>No more news</p>}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default FeedPage;
