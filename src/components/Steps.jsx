const STEPS = ['Cliente', 'Visual', 'Produtos', 'Entrega', 'Resumo']

export default function Steps({ current }) {
  return (
    <div className="no-print flex rounded-xl border border-borda overflow-hidden mb-5">
      {STEPS.map((label, i) => {
        const n = i + 1
        const isActive = n === current
        const isDone = n < current
        return (
          <div key={n} className={`flex-1 flex items-center gap-2 px-3 py-3 border-r border-borda last:border-r-0 transition-all
            ${isActive ? 'bg-rosa-p border-b-2 border-b-rosa' : isDone ? 'bg-verde-p' : 'bg-white'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 text-white
              ${isActive ? 'bg-rosa' : isDone ? 'bg-verde-c' : 'bg-borda'}`}>
              {isDone ? '✓' : n}
            </div>
            <span className={`text-[10px] tracking-wide uppercase hidden sm:block
              ${isActive ? 'text-rosa-e' : isDone ? 'text-verde-c' : 'text-cinza'}`}>
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
