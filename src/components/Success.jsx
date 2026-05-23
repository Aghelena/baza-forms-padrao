export default function Success({ onReset }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#f5f2ef]">
      <div className="bg-white rounded-3xl border border-borda p-16 max-w-md w-full text-center">
        <div className="text-6xl mb-5">🎀</div>
        <h2 className="font-serif text-4xl text-verde mb-3">Pedido recebido!</h2>
        <p className="text-sm text-cinza leading-relaxed mb-10">
          Obrigada pelo seu pedido!<br />
          A Agnyh vai entrar em contato em breve<br />
          pelo WhatsApp com o orçamento.
        </p>
        <button onClick={onReset} className="btn-verde">Fazer novo pedido</button>
      </div>
    </div>
  )
}
