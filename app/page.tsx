"use client";

import Head from 'next/head';
import LoginForm from './loginpage/components/loginform';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inloggen - Databank</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="relative bg-cover bg-center bg-no-repeat">
        <img src="/images/AstiqBlur.png" alt="AstiqLogo" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]" />
        <LoginForm/>
      </main>
      <footer className="fixed bottom-0 right-0 text-[#494949] text-xs m-1">
        <p>&copy; Made by Sweetbounce</p>
      </footer>
    </>
  );
}