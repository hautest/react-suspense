import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("../Component/LazyComponent"));

export const LazyPage = () => (
  <Suspense fallback={<h1>Lazy 컴포넌트 로딩</h1>}>
    <LazyComponent />
  </Suspense>
);
