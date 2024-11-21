import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

const Barang = ({ barang, userRole, updatedBarang }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stockIn, setStockIn] = useState(barang.stock_in);
  const [stockOut, setStockOut] = useState(barang.stock_out);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleStockIn = (e) => {
    setStockIn(Number(e.target.value));
  };

  const handleStockOut = (e) => {
    setStockOut(Number(e.target.value));
  };

  const handleUpdate = () => {
    const updateData = {
      id: barang.id,
      name: barang.name,
      stock_in: stockIn,
      stock_out: stockOut,
      image_path: barang.image_path,
    };

    updatedBarang(updateData);
  };

  return (
    <div className="border-4 border-primary flex flex-col items-center rounded-xl p-4">
      {isLoading && <CircularProgress />}
      <img src={barang.image_path} onLoad={handleImageLoad} className="object-cover h-16 w-20"></img>
      <h2 className="text-secondary">{barang.name}</h2>

      {userRole === "staff" ? (
        <p className="text-secondary">Stock: {barang.stock_in - barang.stock_out}</p>
      ) : (
        <>
          <p className="text-secondary">Stok: {barang.stock_in - barang.stock_out}</p>
          <div className="flex items-center mt-1">
            <span className="text-secondary mr-2">Stock masuk</span>
            <input
              className="w-16 text-secondary border-2 rounded-lg pl-2 "
              value={stockIn}
              onChange={handleStockIn}
            ></input>
          </div>
          <div className="flex items-center mt-1">
            <span className="text-secondary mr-2">Stock keluar</span>
            <input
              className="w-16 text-secondary border-2 rounded-lg pl-2 "
              value={stockOut}
              onChange={handleStockOut}
            ></input>
          </div>
          <div className="mt-4 flex">
            <button
              type="button"
              onClick={handleUpdate}
              className="w-full text-white bg-primary hover:bg-primary-hover font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2"
            >
              Update
            </button>
            <button
              type="button"
              className="w-full text-white bg-red-800 hover:bg-red-900 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 "
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Barang;
