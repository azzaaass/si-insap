import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBarang } from "../services/barangSlice";
import Barang from "../components/Barang.jsx";

const Stock = () => {
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

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Barang</h2>
      {barang.map((item) => (
        <li className="list-none" key={item.id}>
          <Barang barang={item}/>
        </li>
      ))}
    </section>
  );
};

export default Stock;
