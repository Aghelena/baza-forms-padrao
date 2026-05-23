import { Field, Input } from './Field'

export default function Step1({ data, onChange }) {
  return (
    <div className="card">
      <div className="card-title">👤 dados do cliente</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Nome completo" required>
          <Input name="nome" value={data.nome} onChange={onChange} placeholder="Nome da cliente" required />
        </Field>
        <Field label="Nome da loja / marca" required>
          <Input name="loja" value={data.loja} onChange={onChange} placeholder="Ex: Studio Bela" required />
        </Field>
        <Field label="WhatsApp" required>
          <Input name="whatsapp" type="tel" value={data.whatsapp} onChange={onChange} placeholder="(16) 9 9999-9999" required />
        </Field>
        <Field label="Instagram">
          <Input name="instagram" value={data.instagram} onChange={onChange} placeholder="@nomedалоja" />
        </Field>
        <Field label="E-mail" required>
          <Input name="email" type="email" value={data.email} onChange={onChange} placeholder="email@exemplo.com" required />
        </Field>
        <Field label="Cidade / Estado" required>
          <Input name="cidade" value={data.cidade} onChange={onChange} placeholder="Ex: Franca, SP" required />
        </Field>
      </div>
    </div>
  )
}
