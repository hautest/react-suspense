import { useQuery } from "react-query";
import { getArticleList } from "./api";

export const ArticleList = () => {
  const { data } = useQuery("articleList", getArticleList, {
    suspense: true,
  });

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};
