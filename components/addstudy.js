"use client";

import { useState } from "react";

export default function AddStudy({ onAdd }) {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!subject || !hours) {
      alert("Please fill all fields");
      return;
    }

    onAdd({ subject, hours });

    setSubject("");
    setHours("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "80px" }}
      />

      <button type="submit" style={{ padding: "8px 12px" }}>
        Add
      </button>
    </form>
  );
}
