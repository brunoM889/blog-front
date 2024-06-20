import { useEffect, useState } from "react";
import { PostsType, PostsData } from "./posts/posts-data";
import Table from "./components/Table";
import "./index.css";
import Header from "./components/Header";
import PostLayout from "./components/PostLayout";
import { useAppState } from "./store/store";
import { lineSpinner } from "ldrs";

function App() {
  const [posts, setPosts] = useState<PostsType>(PostsData);

  const { theme, lang } = useAppState();

  const [openPost, setOpenPost] = useState<number | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  lineSpinner.register();

  const getViews = async () => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL_PRODUCTION
            ? import.meta.env.VITE_API_URL_PRODUCTION
            : import.meta.env.VITE_API_URL
        }/views`
      );
      const data = await res.json();

      setPosts(
        posts.map((post, index) => ({
          ...post,
          views: data.dbPosts[index].views,
        }))
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setPosts(PostsData);
    getViews();
  }, []);

  return (
    <div
      className={`w-full  overflow-auto min-h-[100vh] flex justify-center ${
        theme
          ? "bg-[#090909] text-[#ffffff] selection:bg-[#f0f0f0] selection:text-[#090909]"
          : "bg-[#f0f0f0] text-[#000] selection:bg-[#090909] selection:text-[#f0f0f0]"
      } transition-none overflow-auto`}
    >
      <div className="w-[92%] max-w-[640px] h-[100vh] min-h-[600px] flex flex-col items-center charge">
        <div className={`w-full`}>
          <Header
            backHome={() => {
              setOpenPost(null);
            }}
          />
          {openPost != null ? (
            <PostLayout openPost={openPost} posts={posts} loading={loading} />
          ) : (
            <main className="overflow-auto max-h-[750px] min-h-[400px]">
              {posts && (
                <Table
                  loading={loading}
                  setPosts={setPosts}
                  posts={posts}
                  setOpenPost={setOpenPost}
                />
              )}
            </main>
          )}
        </div>
        <footer className="w-full h-full flex items-end justify-end self-end pb-4 pt-12 max-[600px]:text-xs">
          <p className="grow opacity-100  max-[400px]:text-[10px]">
            {lang ? "Design inspired by " : "Diseño inspirado en "}

            <a
              className=" max-[400px]:text-[10px]"
              target="_blank"
              href="https://rauchg.com/"
            >
              Guillermo's blog
            </a>
          </p>

          <a href="https://github.com/brunoM889" target="_blank">
            @brunoM889
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
