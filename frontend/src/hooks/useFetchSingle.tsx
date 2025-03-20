import { useEffect, useState } from "react";

export const useFetchSingle = <T,>(fetchUrl: string, replaceUrl?: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const linkResponse = await fetch(fetchUrl);
        const linkData = await linkResponse.json();
        const link = linkData.link;

        const apiLink = replaceUrl
          ? link.replace("5173/post", replaceUrl)
          : link.replace("5173/post", "8080/posts");

        const response = await fetch(apiLink);
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [fetchUrl, replaceUrl]);

  return data;
};
