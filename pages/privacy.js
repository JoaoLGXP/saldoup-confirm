import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>
      <Head>
        <title>Política de Privacidade — SaldoUp</title>
        {/* Ícone da aba */}
        <link rel="icon" href="/icon.png" />
      </Head>
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
            Política de Privacidade — SaldoUp
          </h1>
          <p style={{ textAlign: "center", color: "#aaa", marginBottom: "2rem" }}>
            Última atualização: Outubro de 2025
          </p>

          <section style={{ lineHeight: 1.6 }}>
            <p>
              O aplicativo <strong>SaldoUp</strong>, desenvolvido por <strong>João
                Lucas</strong>, valoriza a privacidade de seus usuários e está
              comprometido em proteger seus dados pessoais conforme a{" "}
              <strong>
                Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD)
              </strong>
              . Esta política descreve como coletamos, utilizamos, armazenamos e
              protegemos suas informações.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🧾 1. Informações coletadas
            </h2>
            <p>
              O SaldoUp coleta apenas as informações necessárias para o
              funcionamento adequado do aplicativo:
            </p>
            <ul>
              <li>
                <strong>a) Dados de autenticação:</strong> nome e e-mail
                fornecidos durante o cadastro ou login (via Supabase).
              </li>
              <li>
                <strong>b) Dados financeiros:</strong> registros de receitas,
                despesas e saldo, armazenados com segurança no Supabase.
              </li>
              <li>
                <strong>c) Dados de uso:</strong> informações técnicas anônimas
                (modelo de dispositivo, sistema operacional, etc.) e dados de
                anúncios do Google AdMob.
              </li>
            </ul>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              📊 2. Finalidade do uso das informações
            </h2>
            <p>Os dados são utilizados para:</p>
            <ul>
              <li>Criar e manter sua conta de usuário;</li>
              <li>Sincronizar suas transações e relatórios financeiros;</li>
              <li>Exibir anúncios personalizados (quando aplicável);</li>
              <li>Melhorar a experiência e desempenho do aplicativo;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🧠 3. Compartilhamento de dados
            </h2>
            <p>
              O SaldoUp não compartilha informações pessoais com terceiros,
              exceto com:
            </p>
            <ul>
              <li>Supabase (autenticação e armazenamento de dados);</li>
              <li>Google AdMob (exibição de anúncios);</li>
              <li>Vercel (hospedagem do site).</li>
            </ul>
            <p>
              Todos esses serviços seguem padrões internacionais de segurança e
              conformidade (como GDPR e LGPD).
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🔒 4. Armazenamento e segurança
            </h2>
            <p>
              Os dados são armazenados em servidores seguros da Supabase e toda
              comunicação é feita via HTTPS. Somente o usuário tem acesso às suas
              informações financeiras.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🗑️ 5. Retenção e exclusão de dados
            </h2>
            <p>
              Você pode solicitar a exclusão completa da sua conta enviando um
              e-mail para:{" "}
              <a
                href="mailto:support@saldoup.com"
                style={{ color: "#00C851", textDecoration: "none" }}
              >
                support@saldoup.com
              </a>
              . Após a exclusão, todos os dados serão permanentemente removidos.
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              ⚙️ 6. Direitos do usuário (LGPD)
            </h2>
            <p>Você tem direito a:</p>
            <ul>
              <li>Confirmar se tratamos seus dados pessoais;</li>
              <li>Solicitar acesso, correção ou exclusão;</li>
              <li>Revogar consentimentos;</li>
              <li>Solicitar portabilidade dos dados.</li>
            </ul>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              📢 7. Anúncios e cookies
            </h2>
            <p>
              O aplicativo pode exibir anúncios via Google AdMob, que usa
              identificadores anônimos para publicidade relevante. Você pode
              gerenciar suas preferências em:{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00C851" }}
              >
                https://adssettings.google.com
              </a>
              .
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              🌍 8. Alterações nesta política
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente. A versão mais
              recente estará sempre disponível em:{" "}
              <a
                href="https://saldoup.vercel.app/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00C851" }}
              >
                https://saldoup.vercel.app/privacy
              </a>
            </p>

            <h2 style={{ color: "#FFD700", marginTop: "1.5rem" }}>
              📬 9. Contato
            </h2>
            <p>
              Dúvidas ou solicitações:{" "}
              <a
                href="mailto:support@saldoup.com"
                style={{ color: "#00C851", textDecoration: "none" }}
              >
                support@saldoup.com
              </a>
            </p>

            <p style={{ marginTop: "2rem", textAlign: "center", color: "#aaa" }}>
              O uso do aplicativo <strong>SaldoUp</strong> implica a concordância
              com esta Política de Privacidade.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
