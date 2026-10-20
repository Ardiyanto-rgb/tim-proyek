export default function KartuProfil({ nama, status, tahun, aktif }) {
  return (
    <div className="card">
      <h3 className="card-nama">{nama}</h3>
      <p className="card-info">
        {status} - angkatan {tahun}
      </p>
      <span className={`badge ${aktif ? "aktif" : "tidak-aktif"}`}>
        {aktif ? "Aktif" : "Tidak aktif"}
      </span>
    </div>
  );
}
