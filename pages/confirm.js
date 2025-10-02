// pages/confirm.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Image from 'next/image';
import Head from 'next/head';

export default function Confirm() {
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error' | 'already'
  const deeplink = process.env.NEXT_PUBLIC_DEEPLINK_SCHEME || 'saldoup://';
  const playStore = process.env.NEXT_PUBLIC_ANDROID_STORE || '#';
  const iosStore = process.env.NEXT_PUBLIC_IOS_STORE || '#';

  useEffect(() => {
    // parse query params
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message') || urlParams.get('status');
    if (message && /confirm/i.test(message)) {
      setStatus('success');
    }

    // parse hash (ex: #access_token=...&refresh_token=...)
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.replace('#', '?'));
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      if (access_token) {
        // cria sessão localmente (supabase-js). Se der certo, considera confirmado + logado.
        (async () => {
          try {
            await supabase.auth.setSession({ access_token, refresh_token });
            setStatus('success');
          } catch (err) {
            console.error('setSession error', err);
            setStatus('success'); // mesmo se setSession falhar, o email já foi confirmado no verify endpoint
          }
        })();
      }
    }

    // se nenhum dos dois, tenta verificar via API (pode não ser necessário)
    // fallback: se nada, exibe success mesmo assim (supondo que verify endpoint já confirmou)
    setTimeout(() => {
      if (status === 'loading') setStatus('success');
    }, 1200);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>E-mail confirmado — SaldoUp</title>
      </Head>
      <main style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: 24,
        background: '#f7fafc'
      }}>
        <div style={{ textAlign: 'center', maxWidth: 680, width: '100%' }}>
          {/* substitua /logo.png pelo seu logo em public/ */}
          <div style={{ marginBottom: 16 }}>
            <Image src="/logo.png" alt="SaldoUp" width={120} height={120} />
          </div>

          {status === 'loading' && <p>Confirmando...</p>}

          {status === 'success' && (
            <>
              <h1 style={{ fontSize: 22, marginBottom: 8 }}>✅ E-mail confirmado!</h1>
              <p style={{ color: '#4a5568', marginBottom: 20 }}>
                Obrigado por confirmar seu e-mail. Agora você pode abrir o app SaldoUp e começar.
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <a href={deeplink} style={{
                  padding: '12px 18px', background: '#10b981', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 700
                }}>
                  Abrir no app
                </a>

                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={playStore} target="_blank" rel="noreferrer"
                     style={{ padding: '10px 14px', background: '#111827', color:'#fff', borderRadius:8, textDecoration:'none' }}>
                    Play Store
                  </a>
                  <a href={iosStore} target="_blank" rel="noreferrer"
                     style={{ padding: '10px 14px', background: '#111827', color:'#fff', borderRadius:8, textDecoration:'none' }}>
                    App Store
                  </a>
                </div>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <h1>Ops — algo deu errado</h1>
              <p>Se você recebeu esse link por engano, ignore. Se o problema persistir, entre em contato com suporte.</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
