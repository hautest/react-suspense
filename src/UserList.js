import { useQuery } from "react-query";
import { ArticleList } from "./ArticleList";
import { getUserList } from "./api";
import { Suspense } from "react";

export const UserList = () => {
  const { data } = useQuery("userList", getUserList, {
    suspense: true,
  });

  return (
    <>
      <ul>
        {data?.map((item) => (
          <li key={item.name}>
            <span>이름은 {item.name}</span>
            <span>나이는 {item.age}</span>
          </li>
        ))}
      </ul>
      {/* <Suspense fallback={<h1>Article Loading...</h1>}>
        <ArticleList />
      </Suspense> */}
    </>
  );
};
