"use client";

import { useState } from "react";
import AddStudy from "../components/AddStudy";
import StudyList from "../components/StudyList";

export default function Home() {
  const [studies, setStudies] = useState([]);

  function addStudy(item) {
    setStudies([...studies, item]);
  }

  return (
    <div>
      <AddStudy onAdd={addStudy} />
      <StudyList studies={studies} />
    </div>
  );
}
