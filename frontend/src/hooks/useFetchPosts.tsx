import { useEffect, useState } from "react";
import { PostProps } from "../interfaces";

export const useFetchPosts = (url: string) => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        const arr = Array.isArray(json) ? json : json.posts;
        setPosts(
          arr.map((p: PostProps) => ({
            ...p,
            photos: Array.isArray(p.photos) ? p.photos : [p.photos],
            tags:
              typeof p.tags === "string" ? p.tags.split(", ") : p.tags || [],
          }))
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url]);

  return posts;
};
