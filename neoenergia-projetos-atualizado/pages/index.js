import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src="/neoenergia-logo.png" alt="Logo Neoenergia" style={{ width: 200, marginBottom: '20px' }} />

      <h1>Bem-vindo ao Portal de Projetos de Padrão de Entrada</h1>
      <p>Neoenergia Brasília: facilitando sua vida</p>
      <p>Este é um protótipo funcional para simular envio e análise de projetos elétricos.</p>

      <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
        <Link href="/cliente">
          <button style={botaoEstilo}>Entrar como Cliente</button>
        </Link>

        <Link href="/colaborador">
          <button style={botaoEstilo}>Entrar como Colaborador</button>
        </Link>
      </div>
    </div>
  );
}

const botaoEstilo = {
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '6px',
  border: '1px solid #000',
  backgroundColor: '#f5f5f5',
};