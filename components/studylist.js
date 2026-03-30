export default function StudyList({ studies }) {
  if (studies.length === 0) {
    return <p>No study records yet...</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {studies.map((item, index) => (
        <li
          key={index}
          style={{
            background: "white",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <strong>{item.subject}</strong> — {item.hours} hrs
        </li>
      ))}
    </ul>
  );
}
