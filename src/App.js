import { LazyPage } from "./page/LazyPage";
import { DataFetchSuspensePage } from "./page/DataFetchPageSuspense";
import { DataFetchEffectPage } from "./page/DataFetchEffect";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Header = () => (
  <header style={{ display: "flex", gap: "10px" }}>
    <Link to="/">Lazy 페이지</Link>
    <Link to="/data-fetch/effect">Data Fetch with useEffect 페이지</Link>
    <Link to="/data-fetch/suspense">Data Fetch with Suspense 페이지</Link>
  </header>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LazyPage />} />
          <Route
            path="/data-fetch/suspense"
            element={<DataFetchSuspensePage />}
          />
          <Route path="/data-fetch/effect" element={<DataFetchEffectPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
