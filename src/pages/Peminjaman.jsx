import React, { useState } from "react";

const Peminjaman = () => {
  const [formData, setFormData] = useState({
    nama: "",
    jenisBarang: "",
    waktuPengambilan: "",
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
      nama: "",
      jenisBarang: "",
      waktuPengambilan: "",
    });
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Peminjaman</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jenisBarang" className="block text-sm font-medium text-gray-700">
            Jenis Barang
          </label>
          <select
            id="jenisBarang"
            name="jenisBarang"
            value={formData.jenisBarang}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            required
          >
            <option value="">Pilih jenis barang</option>
            <option value="Laptop">Laptop</option>
            <option value="Proyektor">Proyektor</option>
            <option value="Kabel HDMI">Kabel HDMI</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="waktuPengambilan" className="block text-sm font-medium text-gray-700">
            Waktu Pengambilan
          </label>
          <input
            type="datetime-local"
            id="waktuPengambilan"
            name="waktuPengambilan"
            value={formData.waktuPengambilan}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
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

export default Peminjaman;
