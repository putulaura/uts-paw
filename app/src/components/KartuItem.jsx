import { Link } from "react-router-dom";

export default function KartuItem({ item }) {
  const { id, judul, kategori, tenggat } = item;
  return (
    <div
      className="kartu-item"
      style={{
        backgroundColor: "#f9f7f8",
        boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <h3>
        <Link
          to={`/koleksi/${id}`}
          style={{
            backgroundColor: "#f96da0",
            color: "white",
            padding: "8px 15px",
            borderRadius: "20px",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(255, 105, 180, 0.8)",
          }}
        >
          {judul}
        </Link>
      </h3>
      <p>
        <b style={{ textAlign: "center" }}>· {kategori} ·</b>{" "}
      </p>
      <p>Resep Masakan Nusantara!</p>
    </div>
  );
}
