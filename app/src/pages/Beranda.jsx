import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import mahasiswa from "../../mahasiswa.json";

export default function Beranda() {
  const { items, loading } = useKoleksi();
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section>
      <h1>TEMUKAN RESEP MAKANAN NUSANTARA!</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff0f5",
        }}
      >
        <thead style={{ backgroundColor: "#ed9ead" }}>
          <tr>
            <th>Informasi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tema</td>
            <td>{mahasiswa.tema}</td>
          </tr>
          <tr>
            <td>Jumlah Tugas</td>
            <td>{loading ? "Memuat..." : items.length}</td>
          </tr>
          <tr>
            <td>Jumlah Kategori</td>
            <td>{loading ? "Memuat..." : jumlahKategori}</td>
          </tr>
        </tbody>
      </table>

      <Link
        to="/koleksi"
        style={{
          backgroundColor: "#c6425d",
          color: "white",
          padding: "10px 20px",
          textDecoration: "none",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "15px",
        }}
      >
        Lihat semua tugas
      </Link>
    </section>
  );
}
