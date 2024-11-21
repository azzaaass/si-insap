import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBarang, updateBarang } from "../services/barangSlice";
import Barang from "../components/Barang.jsx";

const Stock = () => {
  const userRole = localStorage.getItem("userRole");

  const dispatch = useDispatch();
  const { barang, status, error } = useSelector((state) => state.barang);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBarang());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  } else if (status === "failed") {
    return <p>{error}</p>;
  }

  const handleUpdate = (updatedBarang) => {
    dispatch(updateBarang(updatedBarang));
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Barang</h2>
      <div className="grid grid-cols-4 gap-4">
        {barang.map((item) => (
          <Barang barang={item} userRole={userRole} updatedBarang={handleUpdate} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Stock;
