
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(0);
  const [isAnalyst, setIsAnalyst] = useState(false);
  const [form, setForm] = useState({
    clientName: '',
    address: '',
    phone: '',
    email: '',
    technicianEmail: '',
    projectType: '',
    clientNumber: '',
    documents: null,
  });

  const handleInput = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleFileUpload = (e) => {
    setForm({ ...form, documents: e.target.files });
  };

  const handleSubmit = () => {
    setStep(2);
  };

  const handleLogin = (type) => {
    setIsAnalyst(type === 'analyst');
    setStep(1);
  };

  const handleApprove = () => {
    alert('Projeto aprovado. Carta gerada automaticamente.');
  };

  const handleReject = () => {
    alert('Projeto reprovado. Carta gerada automaticamente.');
  };

  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Neoenergia Brasília - Portal de Projetos</title>
      </Head>

      {step === 0 && (
        <div className="text-center space-y-6">
          <img src="/neoenergia-logo.png" alt="Neoenergia Logo" className="mx-auto w-60" />
          <h1 className="text-2xl font-bold">Bem-vindo ao Portal de Projetos de Padrão de Entrada</h1>
          <p className="text-gray-600">Neoenergia Brasília: facilitando sua vida</p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => handleLogin('client')}>Sou Cliente</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleLogin('analyst')}>Sou Analista</button>
          </div>
        </div>
      )}

      {step === 1 && !isAnalyst && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Cadastro de Projeto</h2>
          <input className="input" placeholder="Nome do Cliente" onChange={(e) => handleInput('clientName', e.target.value)} />
          <input className="input" placeholder="Endereço" onChange={(e) => handleInput('address', e.target.value)} />
          <input className="input" placeholder="Telefone" onChange={(e) => handleInput('phone', e.target.value)} />
          <input className="input" placeholder="E-mail do Cliente" onChange={(e) => handleInput('email', e.target.value)} />
          <input className="input" placeholder="E-mail do Responsável Técnico" onChange={(e) => handleInput('technicianEmail', e.target.value)} />
          <input className="input" placeholder="Número do Cliente" onChange={(e) => handleInput('clientNumber', e.target.value)} />
          <input className="input" placeholder="Tipo de Projeto" onChange={(e) => handleInput('projectType', e.target.value)} />
          <input type="file" multiple onChange={handleFileUpload} />
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Enviar Projeto</button>
        </div>
      )}

      {step === 1 && isAnalyst && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Análise de Projeto</h2>
          <p><strong>Projeto:</strong> CONJ TR | Cliente: Indústria Exemplo | CP: 71916C</p>
          <textarea className="input" placeholder="Pendências / Comentários da Análise"></textarea>
          <textarea className="input" placeholder="Dados Técnicos: cargas, demanda, proteção, fornecimento, etc."></textarea>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleApprove}>Aprovar</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleReject}>Reprovar</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Projeto enviado com sucesso!</h2>
          <p>Sua solicitação será analisada em até 30 dias úteis. Acompanhe por e-mail.</p>
        </div>
      )}
    </div>
  );
}
