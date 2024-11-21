import React, { useState } from "react";

const StatusKembalikan = () => {
  const [formData, setFormData] = useState({
    waktuPengembalian: "",
    laporanKerusakan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data dikirim", formData);
    alert("form telah dikirim");
    setFormData({
      waktuPengembalian: "",
      laporanKerusakan: "",
    });
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Peminjaman</h2>
      <form className="max-w-lg">
        <p>Nama peminjam</p>
        <br/>
        <div className="mb-4">
          <label htmlFor="waktuPengembalian" className="block text-sm font-medium text-gray-700">
            Waktu Pengembalian
          </label>
          <input
            type="datetime-local"
            id="waktuPengembalian"
            name="waktuPengembalian"
            value={formData.waktuPengembalian}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
            Laporan kerusakan
          </label>
          <input
            type="text"
            id="laporanKerusakan"
            name="laporanKerusakan"
            value={formData.laporanKerusakan}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Masukkan laporan kerusakan"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default StatusKembalikan;
