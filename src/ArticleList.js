import axios from "axios";
import { useEffect, useState } from "react";

export const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticleList = async () => {
      const result = await axios.get(
        "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/article"
      );

      setLoading(false);
      setData(result.data);
    };
    getArticleList();
  }, []);

  if (loading) return <h1>ArticleList 로딩중</h1>;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
