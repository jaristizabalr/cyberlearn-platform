"use client";
import { useState } from "react";
import AssignmentModal from "./AssignmentModal";

export default function LibraryItem({ item }: { item: { id: string; title: string; level: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-sm text-cyber_muted">Nivel: {item.level}</p>
      <div className="mt-3 flex gap-2">
        <button className="btn">Ver</button>
        <button className="btn secondary" onClick={() => setOpen(true)}>Asignar</button>
      </div>

      {open && <AssignmentModal item={item} onClose={() => setOpen(false)} />}
    </div>
  );
}
