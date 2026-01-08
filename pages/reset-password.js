// pages/reset-password.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { supabase } from '../lib/supabaseClient';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // loading | form | success | error
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  // ESTADOS PARA MOSTRAR/OCULTAR SENHA
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const handleSession = async () => {
      const hash = window.location.hash;
      
      if (hash && hash.includes('access_token')) {
        try {
          const params = new URLSearchParams(hash.replace('#', '?'));
          const access_token = params.get('access_token');
          const refresh_token = params.get('refresh_token');

          const { error } = await supabase.auth.setSession({ 
            access_token, 
            refresh_token 
          });

          if (error) throw error;
          setStatus("form");
        } catch (err) {
          console.error(err);
          setStatus("error");
          setError("O link de recuperação é inválido ou expirou.");
        }
      } else {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          setStatus("form");
        } else {
          setStatus("error");
          setError("Link inválido. Por favor, solicite uma nova redefinição no aplicativo.");
        }
      }
    };

    handleSession();
  }, []);

  function validate() {
    setError("");
    if (!password || password.length < 6) {
      setError("A senha deve ter ao menos 6 caracteres.");
      return false;
    }
    if (password !== confirm) {
      setError("As senhas não coincidem.");
      return false;
    }
    return true;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("sending");
    
    try {
      const { error } = await supabase.auth.updateUser({ 
        password: password 
      });

      if (error) throw error;

      setStatus("success");

    } catch (err) {
      setStatus("form");
      setError(err.message || "Erro ao atualizar a senha.");
    }
  }

  // Componente interno para o Ícone de Olho (SVG)
  const EyeIcon = ({ visible }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ color: "#888" }}
    >
      {visible ? (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </>
      )}
    </svg>
  );

  return (
    <>
      <Head>
        <title>Redefinir senha — SaldoUp</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <style jsx global>{`
        html, body { margin: 0; padding: 0; height: 100%; }
        input, button { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
      `}</style>

      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e0f0a",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        padding: "20px"
      }}>
        <div style={{ width: "100%", maxWidth: 520, textAlign: "center" }}>
          <div style={{ marginBottom: 18 }}>
            <Image src="/icon.png" alt="SaldoUp" width={120} height={160} />
          </div>

          {status === "loading" && <p>Verificando link de segurança...</p>}

          {status === "form" || status === "sending" ? (
            <>
              <h1 style={{ fontSize: 20, marginBottom: 6, color: '#DBBD52' }}>Nova Senha</h1>
              <p style={{ color: "#aaa", marginBottom: 16 }}>
                Digite sua nova senha abaixo para recuperar o acesso.
              </p>

              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                
                {/* CAMPO SENHA */}
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nova senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ 
                      width: "100%",
                      padding: "12px", 
                      paddingRight: "40px", // Espaço para o ícone não ficar em cima do texto
                      borderRadius: 8, 
                      border: "1px solid #333", 
                      background: "#1a1a1a", 
                      color: "#fff",
                      boxSizing: "border-box"
                    }}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <EyeIcon visible={showPassword} />
                  </button>
                </div>

                {/* CAMPO CONFIRMAR SENHA */}
                <div style={{ position: "relative" }}>
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirmar nova senha"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    style={{ 
                      width: "100%",
                      padding: "12px", 
                      paddingRight: "40px",
                      borderRadius: 8, 
                      border: "1px solid #333", 
                      background: "#1a1a1a", 
                      color: "#fff",
                      boxSizing: "border-box"
                    }}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirm(!showConfirm)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <EyeIcon visible={showConfirm} />
                  </button>
                </div>

                {error && <div style={{ color: "#ff6b6b", fontWeight: 600, fontSize: 14 }}>{error}</div>}

                <button type="submit" disabled={status === "sending"} style={{
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  background: "#DBBD52",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: 10,
                  opacity: status === "sending" ? 0.7 : 1
                }}>
                  {status === "sending" ? "Atualizando..." : "Salvar Nova Senha"}
                </button>
              </form>
            </>
          ) : null}

          {status === "success" && (
            <>
              <h1 style={{ color: "#10B981", marginBottom: 10 }}>Senha alterada com sucesso!</h1>
              <p style={{ color: "#ddd" }}>
                Você já pode voltar para o aplicativo e fazer login com sua nova senha.
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <h1 style={{ color: "#ff6b6b", marginBottom: 10 }}>Link Expirado ou Inválido</h1>
              <p style={{ color: "#ddd" }}>{error}</p>
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 14, color: "#888" }}>Solicite uma nova redefinição pelo aplicativo.</p>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}