"use client";

import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { courses } from "@/lib/courses";

export default function DashboardPage() {
  const { user, loading } = useUser() as { user: any; loading: boolean };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-white">
        <p className="text-slate-500 text-sm">
          Cargando tu panel de aprendizaje...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 via-white to-white px-4">
        <div className="max-w-md w-full rounded-xl bg-white shadow-lg border border-sky-100 p-6">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            No autorizado
          </h1>
          <p className="text-slate-600 mb-4 text-sm">
            Para acceder al panel de cursos, primero inicia sesión.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800 transition"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    );
  }

  const displayName: string =
    user.name ?? (user.email ? String(user.email).split("@")[0] : "Usuario");

  const activeCourses = courses.filter(
    (c) => c.status === "En progreso" || c.status === "No iniciado"
  );
  const completedCount = courses.filter((c) => c.status === "Completado").length;
  const inProgressCount = courses.filter((c) => c.status === "En progreso")
    .length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:py-10 space-y-6">
        {/* Tarjeta principal (sin usuario duplicado) */}
        <section className="rounded-2xl bg-white/90 shadow-md border border-sky-100 px-4 py-4 sm:px-6 sm:py-5">
          <h1 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
            Hola, {displayName} 👋
          </h1>
          <p className="text-sm text-slate-600 mb-2">
            Este es tu panel de CyberLearn. Aquí puedes ver tu estado general en
            los cursos de ciberseguridad, continuar donde lo dejaste y explorar
            módulos recomendados por tu institución.
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500">
            La plataforma integra módulos interactivos, videos cortos y
            ejercicios prácticos de correos sospechosos, protección de datos
            personales y navegación responsable, apoyando el cumplimiento de la
            Ley 1581 de 2012 y el ODS 16.
          </p>
        </section>

        {/* Métricas rápidas */}
        <section>
          <h2 className="text-xs font-semibold text-slate-700 mb-2">
            Resumen de tu actividad
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white px-4 py-3 border border-sky-100 shadow-sm">
              <p className="text-[11px] text-slate-500 mb-1">
                Cursos activos
              </p>
              <p className="text-xl font-semibold text-slate-900">
                {activeCourses.length}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Fundamentos, phishing y protección de datos.
              </p>
            </div>
            <div className="rounded-xl bg-white px-4 py-3 border border-sky-100 shadow-sm">
              <p className="text-[11px] text-slate-500 mb-1">
                Cursos en progreso
              </p>
              <p className="text-xl font-semibold text-slate-900">
                {inProgressCount}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Continúa para completar tu ruta de aprendizaje.
              </p>
            </div>
            <div className="rounded-xl bg-white px-4 py-3 border border-sky-100 shadow-sm">
              <p className="text-[11px] text-slate-500 mb-1">
                Cursos completados
              </p>
              <p className="text-xl font-semibold text-slate-900">
                {completedCount}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Útiles para evidenciar tu avance ante la institución.
              </p>
            </div>
          </div>
        </section>

        {/* Cursos activos */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h2 className="text-xs font-semibold text-slate-700">
              Tus cursos activos
            </h2>
            <Link
              href="/courses"
              className="text-[11px] font-medium text-amber-500 hover:text-amber-400"
            >
              Ver historial completo →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl bg-white px-4 py-4 border border-sky-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-800">
                      {course.level} · {course.category}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {course.estimatedTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-3">
                    {course.shortDescription}
                  </p>
                  {course.nextLessonTitle && (
                    <p className="text-[11px] text-slate-500 mt-1">
                      Próxima lección:{" "}
                      <span className="font-medium text-slate-800">
                        {course.nextLessonTitle}
                      </span>
                    </p>
                  )}
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-slate-500">Progreso</span>
                    <span className="text-[11px] font-medium text-slate-700">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="mt-3 inline-flex items-center justify-center rounded-md bg-sky-700 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-sky-800 transition w-full"
                  >
                    Continuar curso
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
