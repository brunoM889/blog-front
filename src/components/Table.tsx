import { PostsType } from "../posts/posts-data";
import "../index.css";
import { useAppState } from "../store/store";
import { lineSpinner } from "ldrs";
interface Props {
  posts: PostsType;
  setOpenPost: (id: number) => void;
  setPosts: (posts: PostsType) => void;
  loading: boolean;
}

function Table({ posts, setOpenPost, setPosts, loading }: Props): JSX.Element {
  const { lang, theme } = useAppState();
  lineSpinner.register();
  const openPost = async (postId: number) => {
    try {
      setPosts(
        posts.map((post, index) => ({
          ...post,
          views: postId === index ? post.views + 1 : post.views,
        }))
      );
      setOpenPost(postId);
      await fetch(
        `${
          import.meta.env.VITE_API_URL_PRODUCTION
            ? import.meta.env.VITE_API_URL_PRODUCTION
            : import.meta.env.VITE_API_URL
        }/views`,
        {
          method: "POST",
          body: JSON.stringify({
            postId: postId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Error en el servidor");
    }
  };

  return (
    <div className="w-full flex flex-col h-fit mb-4 overflow-auto overflow-x-hidden">
      <header
        className={`w-full flex min-h-12 opacity-90 border-b ${
          theme ? " border-[#303030]" : " border-[#cfcfcf]"
        } px-1  items-center `}
      >
        <div className="w-[10%] min-w-[54px] max-[550px]:w-[15%] pr-2">
          {lang ? "date" : "fecha"}
        </div>
        <div className="grow py-3">{lang ? "title" : "título"}</div>
        <div className="w-fit text-end">{lang ? "views" : "vistas"}</div>
      </header>
      <ul className="text-sm">
        {posts.map((post, index) => {
          return (
            <li
              key={index}
              className={`w-full flex min-h-12 border-b ${
                theme
                  ? "hover:bg-[#202020] border-[#303030]"
                  : "hover:bg-[#dfdfdf] border-[#cfcfcf]"
              } px-1 items-center cursor-pointer max-[400px]:text-xs`}
              onClick={() => openPost(post.id)}
            >
              <div className="w-[10%] min-w-[54px] max-[550px]:w-[15%] opacity-80">
                {post.year}
              </div>
              <div className="grow max-[550px]:w-[75%] font-bold py-3">
                {lang ? post.eng.title : post.esp.title}
              </div>
              <div className="w-fit text-end opacity-80 pl-2">
                {!loading ? (
                  new Intl.NumberFormat(lang ? "en-US" : "es-ES", {
                    maximumSignificantDigits: 3,
                  }).format(post.views)
                ) : (
                  <l-line-spinner
                    size="16"
                    stroke="2"
                    speed="1"
                    color="currentColor"
                  ></l-line-spinner>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
