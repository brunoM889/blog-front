import { PostType } from "../posts/posts-data";
import PostTailwind from "../posts/tailwind-post/PostTailwind";
import { useAppState } from "../store/store";

interface Params {
  posts: PostType[];
  openPost: number;
}

function Post({ posts, openPost }: Params) {
  const { lang } = useAppState();

  const ListOfPostsComponents = [<PostTailwind />];

  return (
    <main className="w-full z-20">
      <header className="w-full flex flex-col mb-6 z-20">
        <h1 className="text-2xl font-semibold max-[340px]:text-xl mb-1 z-20">
          {lang ? posts[openPost].eng.title : posts[openPost].esp.title}
        </h1>
        <div className="flex opacity-80 ">
          <p className="grow text-xs">
            {lang ? posts[openPost].eng.date : posts[openPost].esp.date}
          </p>
          <p className="text-xs">
            {new Intl.NumberFormat(lang ? "en-US" : "es-ES", {
              maximumSignificantDigits: 3,
            }).format(posts[openPost].views)}
            {"  "}
            {lang ? "views" : "vistas"}
          </p>
        </div>
      </header>
      <div className="w-full h-[1px] bg-current opacity-30" />
      <div className="w-full pt-4">{ListOfPostsComponents[openPost]}</div>
    </main>
  );
}

export default Post;
