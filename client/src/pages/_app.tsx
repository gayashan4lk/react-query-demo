import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { LayoutBase } from "@/components/LayoutBase"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <QueryClientProvider client={queryClient}>
          <LayoutBase>
            <Component {...pageProps} />
          </LayoutBase>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </main>
    </>
  )
}