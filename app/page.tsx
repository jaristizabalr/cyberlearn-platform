import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">CyberLearn</h1>
        <p className="text-cyber_muted mb-4">Plataforma de estudio y validación en ciberseguridad</p>
        <AuthForm />
      </div>
    </div>
  );
}
