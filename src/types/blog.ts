export type Comment = {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
};

export type Blog = {
  id: string;
  destination: string;
  price: number;
  description: string;
  detail: string;
  images: string[];
  createdAt: string;
  comments: Comment[];
  activities: string;
  destinations: string[];
};