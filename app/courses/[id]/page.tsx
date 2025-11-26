import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/lib/courses";

type Props = {
  params: { id: string };
};

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-sky-950">
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-10 space-y-4">
        {/* Cabecera */}
        <section className="rounded-2xl bg-white shadow-xl border border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div>
              <p className="text-[11px] text-slate-500 mb-1">
                Curso de ciberseguridad
              </p>
              <h1 className="text-lg font-semibold text-slate-900">
                {course.title}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-800">
                  {course.level} · {course.category}
                </span>
                <span className="text-[11px] text-slate-500">
                  Tiempo estimado: {course.estimatedTime}
                </span>
                <span className="text-[11px] text-slate-500">
                  Estado: {course.status}
                </span>
              </div>
            </div>
            <Link
              href="/courses"
              className="text-[11px] font-medium text-amber-400 hover:text-amber-300"
            >
              Volver a Mis cursos
            </Link>
          </div>
          <p className="text-sm text-slate-600">{course.shortDescription}</p>
        </section>

        {/* Progreso + CTA */}
        <section className="rounded-2xl bg-sky-900/70 px-5 py-4 border border-sky-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="w-full sm:w-auto flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-slate-200">Progreso</span>
                <span className="text-[11px] font-medium text-amber-300">
                  {course.progress}%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              {course.lastAccess && (
                <p className="mt-1 text-[11px] text-slate-200">
                  Último acceso: {course.lastAccess}
                </p>
              )}
            </div>
            <Link
              href="#contenido"
              className="inline-flex items-center justify-center rounded-md bg-sky-800 px-4 py-2 text-[11px] font-medium text-white hover:bg-sky-900 transition"
            >
              Continuar donde lo dejaste
            </Link>
          </div>
        </section>

        {/* Placeholder de contenido */}
        <section
          id="contenido"
          className="rounded-2xl bg-white px-5 py-4 border border-slate-200 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            Contenido del curso (placeholder)
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Aquí se mostrará el índice real del curso: módulos, lecciones,
            simulaciones de correos sospechosos, actividades de protección de
            datos personales y ejercicios de navegación responsable. Por ahora
            este contenido es estático y está listo para conectarse con la base
            de datos más adelante.
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-semibold text-slate-700">
                Módulo 1 · Introducción
              </p>
              <p className="text-[11px] text-slate-500">
                Conceptos básicos y contexto de ciberseguridad en instituciones
                educativas.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-semibold text-slate-700">
                Módulo 2 · Casos de correos sospechosos
              </p>
              <p className="text-[11px] text-slate-500">
                Ejemplos guiados para identificar intentos de phishing y
                reportarlos correctamente.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-semibold text-slate-700">
                Módulo 3 · Protección de datos personales
              </p>
              <p className="text-[11px] text-slate-500">
                Lineamientos alineados con la Ley 1581 de 2012 y buenas
                prácticas internas.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-semibold text-slate-700">
                Módulo 4 · Navegación responsable
              </p>
              <p className="text-[11px] text-slate-500">
                Recomendaciones sobre uso seguro de redes, dispositivos y
                cuentas institucionales.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
