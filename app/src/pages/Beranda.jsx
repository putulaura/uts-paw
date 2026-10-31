import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import mahasiswa from "../../mahasiswa.json";

export default function Beranda() {
  const { items, loading } = useKoleksi();
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section>
      <div
        style={{
          backgroundColor: "#fefbfc",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(255, 105, 180, 0.9)",
        }}
      >
        <h1
          style={{
            boxShadow: "0 0 20px rgba(255, 105, 180, 0.8)",
            textAlign: "center",
          }}
        >
          TEMUKAN RESEP MAKANAN NUSANTARA!
        </h1>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
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
      </div>

      <Link
        to="/koleksi"
        style={{
          backgroundColor: "#f96da0",
          color: "white",
          padding: "10px 20px",
          textDecoration: "none",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "15px",
          boxShadow: "0 0 15px rgba(255, 105, 180, 0.8)",
        }}
      >
        Lihat Resep
      </Link>
    </section>
  );
}
