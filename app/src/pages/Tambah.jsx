import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import "./Tambah.css";

const AWAL = {
  judul: "",
  kategori: "",
  daerahAsal: "",
  waktuMasak: "",
  tingkatKesulitan: "",
};

export default function Tambah() {
  const { tambah } = useKoleksi();
  const navigate = useNavigate();
  const [form, setForm] = useState(AWAL);
  const [galat, setGalat] = useState("");

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const simpan = (e) => {
    e.preventDefault();
    if (form.judul.trim().length < 3) {
      setGalat("Judul wajib diisi, minimal 3 karakter.");
      return;
    }
    tambah({ ...form, judul: form.judul.trim() });
    navigate("/koleksi");
  };

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1 className="judul">Tambah Resep Nusantara</h1>

      <label htmlFor="judul">Judul </label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option>Pilih Kategori Makanan</option>
        <option>Makanan Utama</option>
        <option>Kudapan</option>
        <option>Minuman</option>
        <option>Soto & SOP</option>
        <option>Kue</option>
        <option>Jajanan Pasar</option>
        <option>Dessert</option>
        <option>Olahan Daging</option>
        <option>Sate dan Bakaran</option>
        <option>Olahan Laut</option>
      </select>

      <label htmlFor="daerahAsal">Daerah Asal </label>
      <input
        id="daerahAsal"
        name="daerahAsal"
        value={form.daerahAsal}
        onChange={ubah}
      />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="waktuMasak">Waktu Masak</label>
      <input
        id="waktuMasak"
        name="waktuMasak"
        value={form.waktuMasak}
        onChange={ubah}
      />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="tingkatKesulitan">Tingkat Kesulitan</label>
      <select
        id="tingkatKesulitan"
        name="tingkatKesulitan"
        value={form.tingkatKesulitan}
        onChange={ubah}
      >
        <option>Pilih Tingkat Kesulitan</option>
        <option value="Mudah">Mudah</option>
        <option value="Sedang">Sedang</option>
        <option value="Sulit">Sulit</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  );
}
