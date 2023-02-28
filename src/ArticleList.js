import axios from "axios";
import { useEffect, useState } from "react";
import { getArticleList } from "./api";

export const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const result = await getArticleList();
      setLoading(false);
      setData(result);
    };
    init();
  }, []);

  if (loading) return <h1>ArticleList 로딩중</h1>;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};
