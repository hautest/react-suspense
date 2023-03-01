import { useEffect, useState } from "react";
import { getArticleList } from "../api";
import { UserListEffect } from "./UserList";

const DataFetchEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("mount");
    const init = async () => {
      const result = await getArticleList();
      setData(result);
      setLoading(false);
    };
    init();
  }, []);

  if (loading) return <h1>Effect Loading...</h1>;

  return (
    <>
      <ul>
        {data?.map((item) => (
          <li key={item.title}>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <UserListEffect />
    </>
  );
};

export default DataFetchEffect;
