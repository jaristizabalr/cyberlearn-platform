export default function CourseCard({ course }: { course: { id: string; title: string; progress?: number; duration?: string } }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{course.title}</h3>
        <span className="text-sm text-cyber_muted">{course.duration}</span>
      </div>

      <div className="w-full bg-white/5 rounded-full h-2">
        <div className="bg-cyber_accent h-2 rounded-full" style={{ width: `${course.progress ?? 0}%` }} />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-cyber_muted">{course.progress ?? 0}%</span>
        <button className="btn">Abrir</button>
      </div>
    </div>
  );
}
