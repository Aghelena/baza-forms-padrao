import { Field, Input, Select, Textarea } from './Field'

const PRODUTOS = [
  { key: 'cartao',  label: '🪪 Cartão de visitas',   tag: 'bg-[#FBEAF0] text-[#993556]' },
  { key: 'sacola',  label: '🛍 Sacolas de papel',     tag: 'bg-verde-p text-verde-m' },
  { key: 'caixa',   label: '📦 Caixas pré-kit',       tag: 'bg-[#E6F1FB] text-[#185FA5]' },
  { key: 'adesivo', label: '🎀 Adesivos',             tag: 'bg-[#FBEAF0] text-[#993556]' },
  { key: 'convite', label: '💌 Convites',             tag: 'bg-verde-p text-verde-m' },
  { key: 'tag',     label: '🏷 Tags',                 tag: 'bg-[#FAF4EE] text-[#7A5030]' },
  { key: 'outro',   label: '✨ Outro',                tag: 'bg-rosa-p text-rosa-e' },
]

export default function Step3({ data, onChange, onCheck }) {
  return (
    <div className="card">
      <div className="card-title">📦 produtos solicitados</div>

      {/* CHECKBOXES */}
      <div className="mb-5">
        <p className="field-label mb-2">Quais produtos você precisa? <span className="text-rosa">*</span></p>
        <div className="flex flex-wrap gap-2">
          {PRODUTOS.map(({ key, label }) => (
            <label key={key}
              className="flex items-center gap-2 bg-rosa-p border border-rosa-c
                         rounded-full px-3 py-1.5 cursor-pointer hover:bg-rosa-c transition-colors">
              <input
                type="checkbox"
                checked={!!data.prods[key]}
                onChange={e => onCheck(key, e.target.checked)}
                className="accent-rosa cursor-pointer"
              />
              <span className="text-[11px] text-rosa-e">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* CARTÃO */}
      {data.prods.cartao && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">
            🪪 Cartão de visitas
            <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-[#FBEAF0] text-[#993556] tracking-wide uppercase">detalhes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <Field label="Quantidade"><Select name="cartao_qtd" value={data.cartao_qtd} onChange={onChange}><option>100 un.</option><option>200 un.</option><option>300 un.</option><option>500 un.</option><option>Outro</option></Select></Field>
            <Field label="Formato"><Select name="cartao_formato" value={data.cartao_formato} onChange={onChange}><option>9x5cm padrão</option><option>9x5cm horizontal</option><option>Quadrado 6x6cm</option><option>Outro</option></Select></Field>
            <Field label="Impressão"><Select name="cartao_impressao" value={data.cartao_impressao} onChange={onChange}><option>Frente e verso</option><option>Só frente</option></Select></Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <Field label="Nome no cartão"><Input name="cartao_nome" value={data.cartao_nome} onChange={onChange} placeholder="Nome que aparece no cartão" /></Field>
            <Field label="Cargo / função"><Input name="cartao_cargo" value={data.cartao_cargo} onChange={onChange} placeholder="Ex: Fundadora" /></Field>
          </div>
          <Field label="Informações de contato" className="mb-3"><Input name="cartao_contato" value={data.cartao_contato} onChange={onChange} placeholder="WhatsApp, e-mail, Instagram, site..." /></Field>
          <Field label="Acabamento"><Select name="cartao_acabamento" value={data.cartao_acabamento} onChange={onChange}><option>Fosco</option><option>Brilhoso</option><option>Soft touch</option><option>Verniz localizado</option><option>Hot stamping</option><option>Sem preferência</option></Select></Field>
        </div>
      )}

      {/* SACOLA */}
      {data.prods.sacola && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">
            🛍 Sacolas de papel
            <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-verde-p text-verde-m tracking-wide uppercase">detalhes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <Field label="Quantidade"><Select name="sacola_qtd" value={data.sacola_qtd} onChange={onChange}><option>50 un.</option><option>100 un.</option><option>200 un.</option><option>Outro</option></Select></Field>
            <Field label="Tamanho"><Select name="sacola_tam" value={data.sacola_tam} onChange={onChange}><option>Pequena 18x8x22</option><option>Média 24x10x28</option><option>Grande 32x12x36</option><option>Misto</option></Select></Field>
            <Field label="Material"><Select name="sacola_mat" value={data.sacola_mat} onChange={onChange}><option>Kraft natural</option><option>Kraft branco</option><option>Couché brilho</option><option>Couché fosco</option></Select></Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <Field label="Alça"><Select name="sacola_alca" value={data.sacola_alca} onChange={onChange}><option>Cordão torcido</option><option>Fita de cetim</option><option>Alça de papel</option></Select></Field>
            <Field label="Impressão"><Select name="sacola_imp" value={data.sacola_imp} onChange={onChange}><option>1 cor</option><option>2 cores</option><option>Full color</option></Select></Field>
          </div>
          <Field label="Elementos"><Input name="sacola_elem" value={data.sacola_elem} onChange={onChange} placeholder="Logo, slogan, Instagram, frase..." /></Field>
        </div>
      )}

      {/* CAIXA */}
      {data.prods.caixa && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">
            📦 Caixas pré-kit
            <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-[#E6F1FB] text-[#185FA5] tracking-wide uppercase">detalhes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <Field label="Quantidade"><Select name="caixa_qtd" value={data.caixa_qtd} onChange={onChange}><option>50 un.</option><option>100 un.</option><option>200 un.</option><option>Outro</option></Select></Field>
            <Field label="Tamanho LxAxP"><Input name="caixa_tam" value={data.caixa_tam} onChange={onChange} placeholder="Ex: 20x10x15cm" /></Field>
            <Field label="Formato"><Select name="caixa_fmt" value={data.caixa_fmt} onChange={onChange}><option>Tampa e base</option><option>Com aba</option><option>Rígida</option><option>Com visor</option></Select></Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <Field label="Material"><Select name="caixa_mat" value={data.caixa_mat} onChange={onChange}><option>Duplex branco</option><option>Kraft</option><option>Couché brilho</option><option>Rígido</option></Select></Field>
            <Field label="Impressão"><Select name="caixa_imp" value={data.caixa_imp} onChange={onChange}><option>Full color</option><option>2 cores</option><option>1 cor</option><option>Sem impressão</option></Select></Field>
          </div>
          <Field label="O que vai dentro?" className="mb-3"><Input name="caixa_conteudo" value={data.caixa_conteudo} onChange={onChange} placeholder="Ex: cremes, acessórios, perfume..." /></Field>
          <Field label="Elementos"><Input name="caixa_elem" value={data.caixa_elem} onChange={onChange} placeholder="Logo, frase, Instagram..." /></Field>
        </div>
      )}

      {/* ADESIVO */}
      {data.prods.adesivo && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">🎀 Adesivos</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Field label="Quantidade"><Select name="adesivo_qtd" value={data.adesivo_qtd} onChange={onChange}><option>50 un.</option><option>100 un.</option><option>200 un.</option><option>500 un.</option><option>Outro</option></Select></Field>
            <Field label="Formato"><Select name="adesivo_fmt" value={data.adesivo_fmt} onChange={onChange}><option>Redondo</option><option>Quadrado</option><option>Retangular</option><option>Oval</option><option>Personalizado</option></Select></Field>
            <Field label="Tamanho"><Input name="adesivo_tam" value={data.adesivo_tam} onChange={onChange} placeholder="Ex: 4x4cm" /></Field>
          </div>
        </div>
      )}

      {/* CONVITE */}
      {data.prods.convite && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">💌 Convites</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Field label="Quantidade"><Select name="convite_qtd" value={data.convite_qtd} onChange={onChange}><option>15 un.</option><option>20 un.</option><option>50 un.</option><option>100 un.</option><option>Outro</option></Select></Field>
            <Field label="Tipo de evento"><Input name="convite_evento" value={data.convite_evento} onChange={onChange} placeholder="Ex: casamento, aniversário..." /></Field>
            <Field label="Data do evento"><Input name="convite_data" type="date" value={data.convite_data} onChange={onChange} /></Field>
          </div>
        </div>
      )}

      {/* TAG */}
      {data.prods.tag && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">🏷 Tags</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Field label="Quantidade"><Select name="tag_qtd" value={data.tag_qtd} onChange={onChange}><option>50 un.</option><option>100 un.</option><option>200 un.</option><option>Outro</option></Select></Field>
            <Field label="Formato"><Select name="tag_fmt" value={data.tag_fmt} onChange={onChange}><option>Retangular</option><option>Oval</option><option>Especial</option></Select></Field>
            <Field label="Acabamento"><Select name="tag_acab" value={data.tag_acab} onChange={onChange}><option>Fosco</option><option>Brilhoso</option><option>Kraft</option></Select></Field>
          </div>
        </div>
      )}

      {/* OUTRO */}
      {data.prods.outro && (
        <div className="prod-card">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-verde">✨ Outro produto</div>
          <Field label="Descreva o produto">
            <Textarea name="outro_desc" value={data.outro_desc} onChange={onChange}
              placeholder="Descreva o produto, quantidade, tamanho e qualquer detalhe importante..." />
          </Field>
        </div>
      )}
    </div>
  )
}
