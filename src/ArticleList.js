import axios from "axios";
import { useQuery } from "react-query";

const getArticleList = async () => {
  const result = await axios.get(
    "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/article"
  );

  return result.data;
};

export const ArticleList = () => {
  const { data } = useQuery("articleList", getArticleList, {
    suspense: true,
  });

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
