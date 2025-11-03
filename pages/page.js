"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      {/* Logo */}
      <Image
        src="/icon.png"
        alt="SaldoUp Logo"
        width={100}
        height={100}
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
          href="https://play.google.com/store/apps/details?id=seu.id.do.app"
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
        <Link href="/confirm-email" style={{ color: "#DBBD52", margin: "0 10px" }}>
          Confirmar E-mail
        </Link>
        <Link href="/delete-account" style={{ color: "#DBBD52", margin: "0 10px" }}>
          Excluir Conta
        </Link>
        <Link href="/privacy-policy" style={{ color: "#DBBD52", margin: "0 10px" }}>
          Política de Privacidade
        </Link>
      </div>

      {/* Rodapé */}
      <footer style={{ marginTop: 60, fontSize: 14, color: "#888" }}>
        <p>© {new Date().getFullYear()} SaldoUp — Todos os direitos reservados</p>
        <p>Contato: <a href="mailto:support@saldoup.com" style={{ color: "#DBBD52" }}>support@saldoup.com</a></p>
      </footer>
    </main>
  );
}
