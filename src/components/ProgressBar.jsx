export default function ProgressBar({ pct }) {
  return (
    <>
      <div className="no-print fixed top-0 left-0 right-0 h-[3px] bg-borda z-50">
        <div className="h-full bg-rosa transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
      <div className="no-print fixed top-2.5 right-4 z-50 text-[11px] text-rosa tracking-wide
                      bg-white px-3 py-1 rounded-full border border-rosa-c">
        {pct}% preenchido
      </div>
    </>
  )
}
