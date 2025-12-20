"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // ← ADICIONADO

export default function Home() {
  return (
    <>
      <Head>
        <title>SaldoUp</title>

        {/* Ícone da aba */}
        <link rel="icon" href="/app-icon-32.png" />

        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5715188931121788"
          crossorigin="anonymous"
        ></script>

      </Head>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0e0f0a",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0px 20px",
        }}
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="SaldoUp Logo"
          width={150}
          height={150}
          style={{ marginBottom: 20 }}
        />

        {/* Título */}
        <h1 style={{ fontSize: "2.2rem", color: "#DBBD52", marginBottom: 10 }}>
          SaldoUp
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#ddd", maxWidth: 400 }}>
          Controle suas finanças com facilidade, acompanhe seus gastos e metas de forma prática e visual.
        </p>

        {/* Botões principais */}
        <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 12 }}>
          <a
            href="https://app.saldoup.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#DBBD52",
              color: "#000",
              padding: "12px 24px",
              borderRadius: 8,
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Acessar a versão web
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.lucagxp.SaldoUp&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#DBBD52",
              color: "#000",
              padding: "12px 24px",
              borderRadius: 8,
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Baixar na Play Store
          </a>

          <a
            href="#"
            style={{
              backgroundColor: "#333",
              color: "#DBBD52",
              padding: "12px 24px",
              borderRadius: 8,
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Em breve para iOS
          </a>
        </div>

        {/* Links secundários */}
        <div style={{ marginTop: 40 }}>
          <Link href="/delete-account" style={{ color: "#DBBD52", margin: "0 10px" }}>
            Excluir Conta
          </Link>
          <Link href="/privacy" style={{ color: "#DBBD52", margin: "0 10px" }}>
            Política de Privacidade
          </Link>
        </div>

        {/* Rodapé */}
        <footer style={{ marginTop: 60, fontSize: 14, color: "#888" }}>
          <p>© {new Date().getFullYear()} SaldoUp — Todos os direitos reservados</p>
          <p>
            Contato:
            <a href="mailto:support@saldoup.com" style={{ color: "#DBBD52" }}>
              support@saldoup.com
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
