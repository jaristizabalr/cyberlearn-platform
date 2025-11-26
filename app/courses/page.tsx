import Link from "next/link";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  const inProgress = courses.filter((c) => c.status === "En progreso");
  const completed = courses.filter((c) => c.status === "Completado");
  const notStarted = courses.filter((c) => c.status === "No iniciado");

  return (
    <div className="min-h-screen bg-sky-950">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-10 space-y-6">
        {/* Cabecera */}
        <section className="rounded-2xl bg-white shadow-xl border border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div>
              <h1 className="text-base font-semibold text-slate-900">
                Mis cursos
              </h1>
              <p className="text-sm text-slate-600">
                Historial de tus cursos en la plataforma de ciberseguridad:
                activos, completados y pendientes por iniciar.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="text-[11px] font-medium text-amber-400 hover:text-amber-300"
            >
              Volver al dashboard
            </Link>
          </div>
          <p className="text-[11px] text-slate-500">
            Esta vista está pensada como seguimiento personal. Más contenidos
            adicionales, microcursos y recursos descargables estarán
            disponibles en la Biblioteca.
          </p>
        </section>

        {/* En progreso */}
        {inProgress.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-slate-200 mb-2">
              En progreso
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {inProgress.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="rounded-xl bg-white px-4 py-4 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
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
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {course.shortDescription}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500">
                        Progreso
                      </span>
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
                    {course.lastAccess && (
                      <p className="mt-1 text-[11px] text-slate-500">
                        Último acceso: {course.lastAccess}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Completados */}
        {completed.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-slate-200 mb-2">
              Completados
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {completed.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="rounded-xl bg-white px-4 py-4 border border-emerald-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
                        Completado
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {course.estimatedTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {course.shortDescription}
                    </p>
                  </div>
                  {course.lastAccess && (
                    <p className="mt-3 text-[11px] text-slate-500">
                      Finalizado: {course.lastAccess}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* No iniciados */}
        {notStarted.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-slate-200 mb-2">
              Aún por iniciar
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {notStarted.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="rounded-xl bg-white px-4 py-4 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
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
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {course.shortDescription}
                    </p>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500">
                    Estado: No iniciado
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
