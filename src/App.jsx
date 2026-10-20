import KartuProfil from "./components/KartuProfil.jsx";

export default function App() {
  return (
    <main className="container">
      <h1 className="title">Anggota Tim Proyek</h1>
      <KartuProfil nama="Budi" status="Ketua" tahun={2024} aktif={true} />
      <KartuProfil nama="Zaki" status="Wakil" tahun={2024} aktif={true} />
      <KartuProfil nama="Sucipto" status="Anggota" tahun={2024} aktif={true} />
    </main>
  );
}
