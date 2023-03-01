import { getUserList } from "../api";
import { useEffect, useState } from "react";

// const prefetchTodos = async () => {
//   await queryClient.prefetchQuery(["articleList"], getArticleList);
// };
// prefetchTodos();

export const UserListEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const init = async () => {
      const result = await getUserList();
      setData(result);
      setLoading(false);
    };
    init();
  }, []);

  if (loading) return <h1>User List Loading</h1>;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.name}>
          <span>이름은 {item.name}</span>
          <span>나이는 {item.age}</span>
        </li>
      ))}
    </ul>
  );
};
