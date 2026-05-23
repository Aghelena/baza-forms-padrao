import { useState, useCallback } from 'react'
import ProgressBar from './components/ProgressBar'
import Header from './components/Header'
import Steps from './components/Steps'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'
import Success from './components/Success'

const FORMSPREE = 'https://formspree.io/f/mredlken'

const INIT = {
  // step 1
  nome: '', loja: '', whatsapp: '', instagram: '', email: '', cidade: '',
  // step 2
  cores: '', estilo: '', logo: '', fontes: '', referencias: '',
  // step 3 — products
  prods: { cartao: false, sacola: false, caixa: false, adesivo: false, convite: false, tag: false, outro: false },
  cartao_qtd: '100 un.', cartao_formato: '9x5cm padrão', cartao_impressao: 'Frente e verso',
  cartao_nome: '', cartao_cargo: '', cartao_contato: '', cartao_acabamento: 'Fosco',
  sacola_qtd: '50 un.', sacola_tam: 'Pequena 18x8x22', sacola_mat: 'Kraft natural',
  sacola_alca: 'Cordão torcido', sacola_imp: '1 cor', sacola_elem: '',
  caixa_qtd: '50 un.', caixa_tam: '', caixa_fmt: 'Tampa e base',
  caixa_mat: 'Duplex branco', caixa_imp: 'Full color', caixa_conteudo: '', caixa_elem: '',
  adesivo_qtd: '50 un.', adesivo_fmt: 'Redondo', adesivo_tam: '',
  convite_qtd: '15 un.', convite_evento: '', convite_data: '',
  tag_qtd: '50 un.', tag_fmt: 'Retangular', tag_acab: 'Fosco',
  outro_desc: '',
  // step 4
  data_entrega: '', forma_entrega: '', cep: '', obs: '', pagamento: 'PIX', origem: '',
}

export default function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(INIT)
  const [status, setStatus] = useState('idle') // idle | sending | success
  const [pct, setPct] = useState(0)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setData(d => ({ ...d, [name]: value }))

    // recalc progress for current step fields
    setTimeout(() => {
      const fields = document.querySelectorAll(`input:not([type=checkbox]), select, textarea`)
      let filled = 0
      fields.forEach(el => {
        if (el.tagName === 'SELECT') { if (el.selectedIndex > 0) filled++ }
        else if (el.value?.trim()) filled++
      })
      setPct(fields.length > 0 ? Math.round((filled / fields.length) * 100) : 0)
    }, 50)
  }, [])

  const handleCheck = useCallback((key, checked) => {
    setData(d => ({ ...d, prods: { ...d.prods, [key]: checked } }))
  }, [])

  const goTo = (n) => {
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    setStatus('sending')
    try {
      const payload = new FormData()
      // flatten data for Formspree
      Object.entries(data).forEach(([k, v]) => {
        if (k === 'prods') {
          Object.entries(v).forEach(([pk, pv]) => {
            if (pv) payload.append('produto_' + pk, 'sim')
          })
        } else {
          payload.append(k, v)
        }
      })
      const res = await fetch(FORMSPREE, {
        method: 'POST', body: payload, headers: { Accept: 'application/json' }
      })
      if (res.ok) setStatus('success')
      else { setStatus('idle'); alert('Erro ao enviar. Tente novamente.') }
    } catch {
      setStatus('idle')
      alert('Erro de conexão. Tente novamente.')
    }
  }

  const handleReset = () => {
    setData(INIT)
    setStep(1)
    setStatus('idle')
    setPct(0)
  }

  if (status === 'success') return <Success onReset={handleReset} />

  return (
    <>
      <ProgressBar pct={pct} />
      <div className="max-w-3xl mx-auto px-4 pt-6 pb-16">

        {/* TOOLBAR */}
        <div className="no-print flex justify-end gap-2 mb-4">
          <button onClick={handleReset} className="btn-out">🗑 Limpar</button>
          <button onClick={() => window.print()} className="btn-out">🖨 PDF</button>
        </div>

        <Header />
        <Steps current={step} />

        {step === 1 && <Step1 data={data} onChange={handleChange} />}
        {step === 2 && <Step2 data={data} onChange={handleChange} />}
        {step === 3 && <Step3 data={data} onChange={handleChange} onCheck={handleCheck} />}
        {step === 4 && <Step4 data={data} onChange={handleChange} />}
        {step === 5 && <Step5 data={data} />}

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
          <div className="flex gap-2">
            {step > 1 && (
              <button onClick={() => goTo(step - 1)} className="btn-out">← Voltar</button>
            )}
            {step === 5 && (
              <button onClick={() => window.print()} className="btn-out-rosa no-print">🖨 Salvar PDF</button>
            )}
          </div>
          <div>
            {step < 5 && (
              <button onClick={() => goTo(step + 1)} className="btn-verde">
                Próximo →
              </button>
            )}
            {step === 5 && (
              <button onClick={handleSubmit} disabled={status === 'sending'} className="btn-rosa">
                {status === 'sending' ? 'Enviando...' : '🎀 Enviar pedido'}
              </button>
            )}
          </div>
        </div>

        <footer className="text-center mt-10 font-serif text-xs text-cinza italic">
          🎀 Baza Personalizados · by Agnyh Batazuos · Franca, SP · @baza.personalizados
        </footer>
      </div>
    </>
  )
}
