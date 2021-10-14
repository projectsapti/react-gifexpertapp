import React, { useState, useEffect } from "react";
import { getGIf } from "../helpers/getGif";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGIf(category).then((cat) => setImages(cat));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}
