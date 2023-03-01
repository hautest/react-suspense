import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUserList } from "../api";

export const DataFetchSuspense = () => {
  const { data } = useQuery(["userList"], getUserList, {
    suspense: true,
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          <span>이름은 {item.name}</span>
          <span>나이는 {item.age}</span>
        </li>
      ))}
    </ul>
  );
};
