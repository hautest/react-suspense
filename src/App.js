import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserList } from "./UserList";
import { ArticleList } from "./ArticleList";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<h1>User Loading....</h1>}>
        <UserList></UserList>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
