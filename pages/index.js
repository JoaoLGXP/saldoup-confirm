"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SaldoUp - Controle Financeiro Pessoal</title>
        <meta name="description" content="O melhor aplicativo para controle de gastos pessoais, metas financeiras e organização de orçamento. Baixe o SaldoUp e transforme sua vida financeira." />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* CÓDIGO DO ADSENSE (Mantenha o seu aqui) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SEU_CODIGO_AQUI"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #0e0f0a;
          color: #fff;
          font-family: 'Quicksand', sans-serif;
        }
        .section {
            padding: 60px 20px;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        .feature-box {
            background: #1a1a1a;
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0;
            border: 1px solid #333;
        }
        .faq-item {
            text-align: left;
            margin-bottom: 20px;
            border-bottom: 1px solid #333;
            padding-bottom: 20px;
        }
        h2 { color: #DBBD52; margin-bottom: 30px; }
        h3 { color: #fff; font-size: 1.2rem; margin-bottom: 10px; }
        p { color: #ccc; line-height: 1.6; }
      `}</style>

      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* === HERO SECTION (O que você já tinha) === */}
        <div style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}>
            <Image
              src="/logo.png"
              alt="SaldoUp Logo"
              width={150}
              height={150}
              style={{ marginBottom: 20 }}
            />

            <h1 style={{ fontSize: "3.0rem", color: "#DBBD52", marginBottom: 25 }}>
              SaldoUp
            </h1>
          </div>

          <p style={{ fontSize: "1.2rem", color: "#ddd", maxWidth: 500, marginBottom: 40 }}>
            Controle suas finanças com facilidade. Acompanhe gastos, crie metas e visualize o futuro do seu dinheiro de forma prática.
          </p>

          {/* Botões */}
          <div style={{ display: "flex", flexDirection: "column", gap: 15, width: "100%", maxWidth: 300 }}>
            <a
              href="https://app.saldoup.com"
              style={{
                backgroundColor: "#DBBD52", color: "#000", padding: "14px", borderRadius: 8, fontWeight: "bold", textDecoration: "none"
              }}
            >
              Acessar Versão Web
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.lucagxp.SaldoUp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #DBBD52", color: "#DBBD52", padding: "14px", borderRadius: 8, fontWeight: "bold", textDecoration: "none"
              }}
            >
              Baixar na Play Store
            </a>
          </div>
        </div>

        {/* === NOVA SEÇÃO: FUNCIONALIDADES (Isso dá "conteúdo" pro Google) === */}
        <div className="section">
          <h2>Por que usar o SaldoUp?</h2>

          <div className="feature-box">
            <h3>📊 Gráficos Inteligentes</h3>
            <p>Visualize para onde seu dinheiro está indo com gráficos de rosca e barras interativos. Entenda seus hábitos de consumo num piscar de olhos.</p>
          </div>

          <div className="feature-box">
            <h3>🎯 Metas Financeiras</h3>
            <p>Quer viajar ou comprar um carro? Crie metas personalizadas e acompanhe seu progresso mês a mês até atingir seus objetivos.</p>
          </div>

          <div className="feature-box">
            <h3>💰 Regra 50-30-20</h3>
            <p>Utilize métodos comprovados de organização financeira para dividir sua renda entre necessidades, desejos e investimentos.</p>
          </div>
        </div>

        {/* === NOVA SEÇÃO: FAQ (Mais texto relevante) === */}
        <div className="section">
          <h2>Perguntas Frequentes</h2>

          <div className="faq-item">
            <h3>O aplicativo é gratuito?</h3>
            <p>Sim! O SaldoUp oferece todas as funcionalidades essenciais gratuitamente para você começar a organizar sua vida financeira hoje mesmo.</p>
          </div>

          <div className="faq-item">
            <h3>Meus dados estão seguros?</h3>
            <p>Com certeza. Utilizamos criptografia de ponta e autenticação segura para garantir que apenas você tenha acesso às suas informações financeiras.</p>
          </div>

          <div className="faq-item">
            <h3>Posso acessar pelo computador?</h3>
            <p>Sim, o SaldoUp é multiplataforma. Você pode usar nosso aplicativo Android ou acessar a versão Web completa diretamente pelo navegador.</p>
          </div>
        </div>

        {/* Rodapé */}
        <footer style={{ padding: 40, borderTop: "1px solid #333", textAlign: "center", fontSize: 14, color: "#888" }}>
          <p>© {new Date().getFullYear()} SaldoUp — Todos os direitos reservados</p>
          <div style={{ marginTop: 10 }}>
            <Link href="/privacy" style={{ color: "#DBBD52", margin: "0 10px" }}>Política de Privacidade</Link>
            <Link href="/delete-account" style={{ color: "#DBBD52", margin: "0 10px" }}>Excluir Conta</Link>
          </div>
        </footer>
      </main >
    </>
  );
}