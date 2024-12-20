import { useEffect } from "react";

const useInfiniteScroll = (callback, isLoading) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 100 &&
        !isLoading
      ) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, isLoading]);
};

export default useInfiniteScroll;
