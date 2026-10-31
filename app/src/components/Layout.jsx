import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const MENU = [
  { ke: "/", label: "Beranda" },
  { ke: "/koleksi", label: "Koleksi" },
  { ke: "/tambah", label: "Tambah" },
  { ke: "/statistik", label: "Statistik" },
  { ke: "/tentang", label: "Tentang" },
];

export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong
          style={{
            backgroundColor: "#f96da0",
            color: "white",
            padding: "8px 15px",
            borderRadius: "20px",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(255, 105, 180, 0.8)",
          }}
        >
          Selamat Datang!
        </strong>
        <nav className="menu">
          {MENU.map((menu) => (
            <NavLink
              key={menu.ke}
              to={menu.ke}
              style={{
                backgroundColor: "#f96da0",
                color: "white",
                padding: "8px 15px",
                borderRadius: "20px",
                textDecoration: "none",
                boxShadow: "0 0 15px rgba(255, 105, 180, 0.8)",
              }}
            >
              {menu.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <footer className="kaki">
        <p style={{ textAlign: "center" }}>Koleksi Resep Nusantara Kita</p>
      </footer>
    </div>
  );
}
