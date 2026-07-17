export default function MySidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#111827",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Menu</h2>

      <p style={{ marginBottom: "10px", cursor: "pointer" }}>📊 Dashboard</p>
      <p style={{ marginBottom: "10px", cursor: "pointer" }}>🤖 Ask AI</p>
      <p style={{ marginBottom: "10px", cursor: "pointer" }}>🕒 History</p>
      <p style={{ marginBottom: "10px", cursor: "pointer" }}>📑 Reports</p>
      <p style={{ marginBottom: "10px", cursor: "pointer" }}>⚙️ Settings</p>
    </div>
  );
}