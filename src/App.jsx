import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PostWall } from "./pages/postWall";
import { PostProvider } from "./context/PostContext";
import { SearchProvider } from "./context/SearchContext";

const UserPosts = () => {
  return <h1>UserPosts</h1>;
};

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>
        <SearchProvider>
          <Navbar />
          <section className="mt-16">
            <Routes>
              <Route path="/" element={<PostWall />} />
              <Route path="/user-posts" element={<UserPosts />} />
            </Routes>
          </section>
        </SearchProvider>
      </PostProvider>
    </QueryClientProvider>
  );
}

export default App;
