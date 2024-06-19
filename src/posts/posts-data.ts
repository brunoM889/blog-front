type PostTextComponent = {
  title: string;
  date: string;
};

export type PostType = {
  id: number;
  year: number;
  views: number;
  eng: PostTextComponent;
  esp: PostTextComponent;
};

export type PostsType = PostType[];

const Post1: PostType = {
  id: 0,
  year: 2024,
  views: 0,
  eng: {
    title: "Tailwind for beginners",
    date: "June 19, 2024",
  },
  esp: {
    title: "Tailwind para principiantes",
    date: "19 de Junio de 2024",
  },
};

export const PostsData = [Post1];
