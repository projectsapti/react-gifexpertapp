import React from "react";
//import { getGIf } from "../helpers/getGif";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && "Cargando"}
      <div className="card-grid animate__animated animate__bounce">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}
