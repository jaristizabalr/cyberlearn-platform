"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      alert("Credenciales incorrectas");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block">
        <span className="text-cyber_muted text-sm">Email</span>
        <input className="input mt-1 w-full" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      </label>

      <label className="block">
        <span className="text-cyber_muted text-sm">Contraseña</span>
        <input className="input mt-1 w-full" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      </label>

      <button className="btn w-full" type="submit">
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
