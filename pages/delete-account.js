export default function DeleteAccount() {
  return (
    <>
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
          backgroundColor: "#111",
          color: "#f5f5f5",
          fontFamily: "Inter, sans-serif",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <h1
            style={{
              color: "#FFD700",
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "0.5rem",
            }}
          >
            Exclusão de Conta — SaldoUp
          </h1>
          <p style={{ textAlign: "center", color: "#aaa", marginBottom: "2rem" }}>
            Última atualização: Outubro de 2025
          </p>

          <section style={{ lineHeight: 1.6 }}>
            <p>
              O aplicativo <strong>SaldoUp</strong> respeita o seu direito de
              excluir permanentemente sua conta e todos os dados pessoais
              associados. Nesta página explicamos como fazer isso e o que ocorre
              após a exclusão.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🧾 1. Como solicitar a exclusão da conta
            </h2>
            <p>
              Você pode solicitar a exclusão da sua conta de duas maneiras:
            </p>
            <ul>
              <li>
                <strong>Opção 1:</strong> Acesse o aplicativo{" "}
                <strong>SaldoUp</strong>, vá em <em>Configurações &gt; Conta</em>{" "}
                e selecione <em>Excluir conta</em> (se disponível).
              </li>
              <li>
                <strong>Opção 2:</strong> Envie um e-mail para o nosso suporte com
                o assunto <em>“Excluir minha conta SaldoUp”</em> para:{" "}
                <a
                  href="mailto:support@saldoup.com"
                  style={{ color: "#00C851", textDecoration: "none" }}
                >
                  support@saldoup.com
                </a>
                .
              </li>
            </ul>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🗑️ 2. O que será excluído
            </h2>
            <p>
              Após a solicitação, todos os seguintes dados serão removidos de
              forma permanente:
            </p>
            <ul>
              <li>Seu nome e endereço de e-mail cadastrados;</li>
              <li>Todos os lançamentos financeiros (receitas, despesas e saldo);</li>
              <li>Preferências e configurações salvas no aplicativo.</li>
            </ul>

            <p>
              A exclusão é **irreversível** e os dados não poderão ser
              recuperados.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              ⏳ 3. Prazo para exclusão
            </h2>
            <p>
              O processo de exclusão será concluído em até{" "}
              <strong>5 dias úteis</strong> após o recebimento da solicitação.
              Você receberá um e-mail de confirmação assim que a conta for removida.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              📦 4. Dados que podem ser mantidos
            </h2>
            <p>
              Em alguns casos, o SaldoUp poderá manter informações limitadas por
              motivos legais, como registros de auditoria e obrigações fiscais,
              conforme exigido por lei. Esses dados não permitem identificar o
              usuário.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              📬 5. Contato
            </h2>
            <p>
              Caso tenha dúvidas sobre o processo de exclusão ou queira confirmar
              o andamento do pedido, entre em contato:
            </p>
            <p>
              <a
                href="mailto:support@saldoup.com"
                style={{ color: "#00C851", textDecoration: "none" }}
              >
                support@saldoup.com
              </a>
            </p>

            <p style={{ marginTop: "2rem", textAlign: "center", color: "#aaa" }}>
              O uso do aplicativo <strong>SaldoUp</strong> implica a concordância
              com esta política de exclusão de dados.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
