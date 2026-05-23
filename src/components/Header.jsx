export default function Header() {
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
  return (
    <header className="bg-verde rounded-2xl px-10 py-9 mb-2 flex justify-between items-center gap-6">
      <div>
        <h1 className="font-serif text-5xl tracking-[10px] text-white font-light">BAZA</h1>
        <p className="font-serif italic text-[13px] tracking-[4px] text-[#a8c8a8] mt-1">personalizados</p>
        <p className="text-[10px] tracking-[3px] uppercase text-[#6a9a6a] mt-3">✦ briefing & pedido de produto ✦</p>
      </div>
      <div className="text-right no-print hidden md:block">
        <span className="inline-block bg-white/10 border border-white/20 rounded-full
                         px-4 py-1.5 text-[10px] tracking-[2px] text-[#a8c8a8] uppercase">
          novo pedido
        </span>
        <p className="text-[11px] text-[#6a9a6a] mt-2 tracking-wide">{hoje}</p>
      </div>
    </header>
  )
}
