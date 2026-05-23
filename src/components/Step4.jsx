import { Field, Input, Select, Textarea } from './Field'

export default function Step4({ data, onChange }) {
  return (
    <>
      <div className="card">
        <div className="card-title">📅 prazo e entrega</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Data que precisa receber" required>
            <Input name="data_entrega" type="date" value={data.data_entrega} onChange={onChange} required />
          </Field>
          <Field label="Forma de entrega" required>
            <Select name="forma_entrega" value={data.forma_entrega} onChange={onChange} required>
              <option value="">Selecione...</option>
              <option>Entrega — transportadora / Correios</option>
              <option>Retirada em Franca, SP</option>
            </Select>
          </Field>
        </div>
        <Field label="CEP de entrega" className="mb-4">
          <Input name="cep" value={data.cep} onChange={onChange} placeholder="00000-000" />
        </Field>
        <Field label="Observações adicionais">
          <Textarea name="obs" value={data.obs} onChange={onChange}
            placeholder="Informações extras, restrições, pedidos especiais..." />
        </Field>
      </div>

      <div className="card">
        <div className="card-title-rosa">💳 pagamento</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Forma de pagamento preferida">
            <Select name="pagamento" value={data.pagamento} onChange={onChange}>
              <option>PIX</option>
              <option>Cartão de crédito</option>
              <option>Boleto</option>
              <option>A combinar</option>
            </Select>
          </Field>
          <Field label="Como ficou sabendo da Baza?">
            <Select name="origem" value={data.origem} onChange={onChange}>
              <option value="">Selecione...</option>
              <option>Instagram</option>
              <option>Indicação de amiga</option>
              <option>Google</option>
              <option>WhatsApp</option>
              <option>Outro</option>
            </Select>
          </Field>
        </div>
      </div>
    </>
  )
}
