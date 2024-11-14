import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

const Barang = ({ barang }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <CircularProgress />}
      <img src={barang.image_path} onLoad={handleImageLoad} className="object-cover h-16 w-1h-16"></img>
      <h2>{barang.name}</h2>
      <p>Stock: {barang.stock_in - barang.stock_out}</p>
    </div>
  );
};

export default Barang;
