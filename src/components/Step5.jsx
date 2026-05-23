const PROD_LABELS = {
  cartao: '🪪 Cartão de visitas',
  sacola: '🛍 Sacolas de papel',
  caixa:  '📦 Caixas pré-kit',
  adesivo:'🎀 Adesivos',
  convite:'💌 Convites',
  tag:    '🏷 Tags',
  outro:  '✨ Outro',
}

export default function Step5({ data }) {
  const selectedProds = Object.keys(data.prods).filter(k => data.prods[k])
  const dataFmt = data.data_entrega
    ? new Date(data.data_entrega + 'T12:00:00').toLocaleDateString('pt-BR')
    : '—'

  return (
    <>
      <div className="card">
        <div className="card-title">📋 resumo do pedido</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-cinza mb-1">Cliente</p>
            <p className="text-sm font-medium">{data.nome || '—'}</p>
            <p className="text-xs text-cinza">{data.loja || ''}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-cinza mb-1">Contato</p>
            <p className="text-sm">{data.whatsapp || '—'}</p>
            <p className="text-xs text-cinza">{data.email || ''}</p>
          </div>
        </div>

        <div className="border-t border-borda/60 pt-4 mb-4">
          <p className="text-[10px] tracking-[2px] uppercase text-cinza mb-3">Produtos solicitados</p>
          {selectedProds.length > 0 ? selectedProds.map(k => (
            <div key={k} className="flex justify-between items-center py-2.5 border-b border-borda/40 last:border-0 text-sm">
              <span>{PROD_LABELS[k]}</span>
              <span className="text-verde-c font-medium">✓</span>
            </div>
          )) : (
            <p className="text-sm text-cinza">Nenhum produto selecionado</p>
          )}
        </div>

        <div className="border-t border-borda/60 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] tracking-[2px] uppercase text-cinza mb-1">Data de entrega</p>
              <p className="text-sm">{dataFmt}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[2px] uppercase text-cinza mb-1">Forma de entrega</p>
              <p className="text-sm">{data.forma_entrega || '—'}</p>
            </div>
          </div>
        </div>

        <div className="bg-verde-p rounded-xl px-4 py-3 mt-4 flex justify-between items-baseline">
          <span className="text-[10px] tracking-[2px] uppercase text-verde-c">Prazo para orçamento</span>
          <span className="text-sm text-verde">até 24h úteis 🎀</span>
        </div>
      </div>

      <div className="card">
        <div className="card-title">✍️ aprovação</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="border-b border-texto h-10 mb-2" />
            <p className="text-[10px] tracking-[1.5px] uppercase text-cinza">Assinatura da cliente · data</p>
          </div>
          <div className="text-center">
            <div className="border-b border-texto h-10 mb-2" />
            <p className="text-[10px] tracking-[1.5px] uppercase text-cinza">Agnyh Batazuos · Baza Personalizados</p>
          </div>
        </div>
      </div>
    </>
  )
}
