import { useEffect, useState } from "react";
import { getGIf } from "../helpers/getGif";

export function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGIf(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
}
