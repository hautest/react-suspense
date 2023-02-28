import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserList } from "./UserList";
import { ArticleList } from "./ArticleList";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <ArticleList />
    </QueryClientProvider>
  );
}

export default App;
