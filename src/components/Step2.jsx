import { Field, Input, Select, Textarea } from './Field'

export default function Step2({ data, onChange }) {
  return (
    <div className="card">
      <div className="card-title-rosa">🎨 identidade visual da loja</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Field label="Cores da marca" required>
          <Input name="cores" value={data.cores} onChange={onChange} placeholder="Ex: rosa, dourado, branco" required />
        </Field>
        <Field label="Estilo visual" required>
          <Select name="estilo" value={data.estilo} onChange={onChange} required>
            <option value="">Selecione...</option>
            <option>Delicado e feminino</option>
            <option>Minimalista e clean</option>
            <option>Elegante e sofisticado</option>
            <option>Colorido e divertido</option>
            <option>Rústico e artesanal</option>
            <option>Moderno e profissional</option>
          </Select>
        </Field>
        <Field label="Possui logo?" required>
          <Select name="logo" value={data.logo} onChange={onChange} required>
            <option value="">Selecione...</option>
            <option>Sim — vou enviar o arquivo</option>
            <option>Sim — mas precisa de ajuste</option>
            <option>Não — criar junto com o pedido</option>
          </Select>
        </Field>
        <Field label="Fontes preferidas">
          <Input name="fontes" value={data.fontes} onChange={onChange} placeholder="Ex: serifada, cursiva, sem serifa" />
        </Field>
      </div>
      <Field label="Referências visuais (links, Pinterest, perfis)">
        <Textarea name="referencias" value={data.referencias} onChange={onChange}
          placeholder="Cole links ou descreva referências que você gosta..." />
      </Field>
    </div>
  )
}
