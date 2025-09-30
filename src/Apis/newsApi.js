const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopHeadlines = async (page = 1, category = "") => {
  const res = await fetch(
    `${BASE_URL}/top-headlines?country=us&page=${page}&pageSize=10${category ? `&category=${category}` : ""}&apiKey=${API_KEY}`
  );

  const data = await res.json();
  return {
    articles: data.articles || [],
    totalResults: data.totalResults || 0,
  };
};
