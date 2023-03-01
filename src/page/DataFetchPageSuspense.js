import { Suspense } from "react";
import { DataFetchSuspense } from "../Component/DataFetchSuspense";

export const DataFetchSuspensePage = () => (
  <Suspense fallback={<h1>User List Loading...</h1>}>
    <DataFetchSuspense />
  </Suspense>
);
