export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const fetchComments = async (): Promise<Comments[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
