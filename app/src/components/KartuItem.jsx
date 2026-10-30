import { Link } from "react-router-dom";

export default function KartuItem({ item }) {
  const { id, judul, kategori, tenggat } = item;
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        <b>· {kategori} ·</b>{" "}
      </p>
      <p>Lihat Resep Masakan Nusantara!</p>
    </article>
  );
}
