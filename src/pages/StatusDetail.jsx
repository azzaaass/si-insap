import React from "react";
import { Link, useParams } from "react-router-dom";

const StatusDetail = () => {
  const { id } = useParams();

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Detail peminjaman</h2>
      <div className="flex justify-between max-w-2xl border-2 border-primary rounded-md px-4 py-2">
        <div className="">
          <p>{id}</p>
          <p>Nama</p>
          <p>Daftar barang</p>
          <p>Waktu peminjaman</p>
        </div>
        <Link to={`/status/${id}/kembalikan`} className="h-fit px-4 py-2 text-sm text-white bg-primary w-fit rounded-lg">Kembalikan</Link>
      </div>
    </section>
  );
};

export default StatusDetail;
