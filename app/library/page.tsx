import Link from "next/link";
import { libraryItems } from "@/lib/courses";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-sky-950">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-10 space-y-6">
        {/* Cabecera */}
        <section className="rounded-2xl bg-white shadow-xl border border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div>
              <h1 className="text-base font-semibold text-slate-900">
                Biblioteca de ciberseguridad
              </h1>
              <p className="text-sm text-slate-600">
                Aquí encontrarás cursos cortos, simulaciones, rutas guiadas y
                recursos descargables para complementar tu capacitación.
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
            Los contenidos de esta biblioteca están alineados con la protección
            de datos personales, la reducción de errores humanos y el
            fortalecimiento de instituciones seguras en línea con el ODS 16.
          </p>
        </section>

        {/* Lista de recursos */}
        <section>
          <h2 className="text-xs font-semibold text-slate-200 mb-2">
            Recursos disponibles
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {libraryItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-white px-4 py-4 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-800">
                      {item.type}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {item.estimatedTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
                    {item.level}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
                    {item.category}
                  </span>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
