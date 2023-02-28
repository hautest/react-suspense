import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleList } from "./ArticleList";
import { getUserList } from "./api";
import { Suspense } from "react";

export const UserList = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const result = await getUserList();
      setData(result);
      setLoading(false);
    };
    init();
  }, []);

  if (loading) return <h1>UserList 로딩중</h1>;

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
    </>
  );
};
