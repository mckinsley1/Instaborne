import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import type { Database } from '@/types_db';
import { supabase } from '@/supabase.Client';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() =>
  createBrowserSupabaseClient<Database>()
  );
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
      <SessionContextProvider supabaseClient={supabase} >

      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SessionContextProvider>
  )
}