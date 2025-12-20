// pages/reset-password.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
// Importa o cliente que você já usa na página de confirm
import { supabase } from '../lib/supabaseClient';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // loading | form | success | error
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Ao carregar, verifica se tem o token na URL (Hash)
    const handleSession = async () => {
      const hash = window.location.hash;
      
      // O Supabase envia: #access_token=...&refresh_token=...&type=recovery
      if (hash && hash.includes('access_token')) {
        try {
          // Transforma o hash em parâmetros legíveis
          const params = new URLSearchParams(hash.replace('#', '?'));
          const access_token = params.get('access_token');
          const refresh_token = params.get('refresh_token');

          // Loga o usuário temporariamente com esses tokens
          const { error } = await supabase.auth.setSession({ 
            access_token, 
            refresh_token 
          });

          if (error) throw error;
          
          // Se deu certo, mostra o formulário
          setStatus("form");
        } catch (err) {
          console.error(err);
          setStatus("error");
          setError("O link de recuperação é inválido ou expirou.");
        }
      } else {
        // Se não tem hash, verifica se o usuário já estava logado
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
      // Atualiza a senha do usuário LOGADO (nós o logamos no useEffect)
      const { error } = await supabase.auth.updateUser({ 
        password: password 
      });

      if (error) throw error;

      setStatus("success");
      
      // Opcional: Deslogar após mudar a senha para forçar login no app
      // await supabase.auth.signOut();

    } catch (err) {
      setStatus("form"); // Volta para o form
      setError(err.message || "Erro ao atualizar a senha.");
    }
  }

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
            <Image src="/logo.png" alt="SaldoUp" width={110} height={110} />
          </div>

          {status === "loading" && <p>Verificando link de segurança...</p>}

          {status === "form" || status === "sending" ? (
            <>
              <h1 style={{ fontSize: 20, marginBottom: 6, color: '#DBBD52' }}>Nova Senha</h1>
              <p style={{ color: "#aaa", marginBottom: 16 }}>
                Digite sua nova senha abaixo para recuperar o acesso.
              </p>

              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="password"
                  placeholder="Nova senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ padding: "12px", borderRadius: 8, border: "1px solid #333", background: "#1a1a1a", color: "#fff" }}
                />

                <input
                  type="password"
                  placeholder="Confirmar nova senha"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  style={{ padding: "12px", borderRadius: 8, border: "1px solid #333", background: "#1a1a1a", color: "#fff" }}
                />

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