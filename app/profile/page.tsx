"use client";

import { useUser } from "@/hooks/useUser";

export default function ProfilePage() {
  const { user, loading } = useUser();

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No autorizado</p>;

  return (
    <div>
      <h1>Perfil del Usuario</h1>

      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.role}</p>
      <p><strong>ID:</strong> {user.id}</p>
    </div>
  );
}
