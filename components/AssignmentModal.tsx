"use client";

export default function AssignmentModal({ item, onClose }: { item: any; onClose: () => void }) {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Asignado (mock): ${item.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <form onSubmit={submit} className="bg-[#0f2236] p-4 rounded-md w-full max-w-md card">
        <h3 className="font-semibold mb-2">Asignar: {item.title}</h3>

        <label className="block mb-2">
          <span className="text-cyber_muted text-sm">Usuario o grupo</span>
          <input className="input mt-1 w-full" />
        </label>

        <label className="block mb-2">
          <span className="text-cyber_muted text-sm">Fecha límite</span>
          <input type="date" className="input mt-1 w-full" />
        </label>

        <div className="flex gap-2 justify-end mt-4">
          <button type="button" className="btn secondary" onClick={onClose}>Cancelar</button>
          <button className="btn" type="submit">Asignar</button>
        </div>
      </form>
    </div>
  );
}
