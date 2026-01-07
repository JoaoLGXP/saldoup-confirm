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
        * {
          box-sizing: border-box; /* Isso impede que o padding aumente a largura */
        }

        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #0e0f0a;
          color: #fff;
          font-family: 'Quicksand', sans-serif;
          overflow-x: hidden;
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

        /* HEADER SOCIAL */
        .social-header {
            display: flex;
            justify-content: flex-end; /* Alinha à direita */
            align-items: center;
            padding: 20px 40px;
            width: 100%;
            position: absolute; /* Fica sobre o conteúdo */
            top: 0;
            left: 0;
            z-index: 10;
        }

        .social-icon {
            color: #fff;
            margin-left: 20px;
            transition: transform 0.2s, color 0.2s;
            display: flex;
            align-items: center;
        }

        .social-icon:hover {
            color: #DBBD52; /* Cor Dourada do SaldoUp */
            transform: translateY(-2px);
        }

        .social-icon svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        /* RESPONSIVO */
        @media (max-width: 600px) {
            .social-header {
                justify-content: center; /* No celular fica no meio */
                position: relative;
                padding: 20px;
            }
            .social-icon { margin: 0 15px; }
        }
      `}</style>

      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* === AQUI ESTÁ A BARRA DE REDES SOCIAIS === */}
        <header className="social-header">
          {/* INSTAGRAM */}
          <a href="https://instagram.com/saldoup.app" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/profile.php?id=61585218628540" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          {/* X (TWITTER) */}
          <a href="https://x.com/SaldoUp" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </header>

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