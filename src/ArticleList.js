import { useQuery } from "@tanstack/react-query";
import { getArticleList } from "./api";
import { useEffect, useState } from "react";

export const ArticleList = () => {
  const { data } = useQuery(["articleList"], getArticleList, {
    suspense: true,
  });

  useEffect(() => {
    console.log("mount ArticleList1");
  }, []);

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

export const ArticleList2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("mount ArticleList2");
    getArticleList("effect").then((value) => {
      setData(value);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Article2 Loading...</h1>;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};
