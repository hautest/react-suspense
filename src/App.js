import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserList } from "./UserList";
import { ArticleList } from "./ArticleList";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<h1>User Loading....</h1>}>
        <UserList />
        <Suspense fallback={<h1>Article Loading...</h1>}>
          <ArticleList />
        </Suspense>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
