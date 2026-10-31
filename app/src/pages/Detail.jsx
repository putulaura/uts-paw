import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, loading, hapus } = useKoleksi();
  const item = items.find((i) => String(i.id) === id);

  if (loading) return <p>Memuat data...</p>;
  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    );
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id);
      navigate("/koleksi");
    }
  };

  return (
    <section>
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(255, 105, 180, 0.8)",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            backgroundColor: "#f96da0",
            color: "white",
            padding: "8px 15px",
            borderRadius: "20px",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(255, 105, 180, 0.8)",
          }}
        >
          {item.judul}
        </h1>
        <dl>
          <dt>ID</dt>
          <dd>{item.id}</dd>
          <dt>Kategori</dt>
          <dd>{item.kategori}</dd>
          <dt>Daerah Asal</dt>
          <dd>{item.daerahAsal}</dd>
          <dt>Waktu Masak</dt>
          <dd>{item.waktuMasak}</dd>
          <dt>Tingkat Kesulitan</dt>
          <dd>{item.tingkatKesulitan}</dd>
        </dl>
        <div className="aksi">
          <button
            type="button"
            style={{
              backgroundColor: "#e52323",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "15px",
            }}
            onClick={konfirmasiHapus}
          >
            Hapus
          </button>
          <Link
            to="/koleksi"
            style={{
              backgroundColor: "#524f50",
              color: "white",
              padding: "8px 10px",
              textDecoration: "none",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "15px",
            }}
          >
            Kembali
          </Link>
        </div>
      </div>
    </section>
  );
}
