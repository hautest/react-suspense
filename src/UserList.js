import axios from "axios";
import { Suspense } from "react";
import { useQueries, useQuery } from "react-query";
import { ArticleList } from "./ArticleList";

const getUserList = async () => {
  const result = await axios.get(
    "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/users"
  );

  return result.data;
};

const getArticleList = async () => {
  const result = await axios.get(
    "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/article"
  );

  return result.data;
};

export const UserList = ({ children }) => {
  const { data } = useQuery("userList", getUserList, {
    suspense: true,
  });

  // const { data: articleData } = useQuery("articleList", getArticleList, {
  //   suspense: true,
  // });

  return (
    <>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {children}
      <Suspense fallback={<h1>Article Loading....</h1>}>
        <ArticleList />
      </Suspense>
    </>
  );
};
