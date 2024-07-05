// components/LoginForm.tsx
"use client";

import React, { useState } from 'react';

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <section className="p-10 bg-[#393939] rounded-lg shadow-md text-[#7A7A7A] opacity-95 mx-auto my-20 w-[357px] relative z-10">
      <h1 className="text-2xl text-white font-bold mx-10 w-4/5">LOG IN OP UW ACCOUNT</h1>
      <hr className="bg-[#4B4B4B] my-2 h-[3px] w-[110%] ml-[-5%] border-0" />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="hidden" name="type" value="login" />
        <label className="w-full h-10 rounded-md my-3 bg-[#2F2F2F] shadow-md flex">
          <i className="inline-flex justify-center items-center w-10 h-full bg-[#282828] rounded-md">
            <img src="/asicon/user.svg" alt="user" className="h-full w-full object-contain" />
          </i>
          <input
            type="text"
            name="name"
            placeholder="Naam..."
            required
            className="bg-[#2F2F2F] border-none h-full w-[calc(100%-50px)] text-[#737373] text-2xl ml-2"
          />
        </label>
        <label className="w-full h-10 rounded-md my-3 bg-[#2F2F2F] shadow-md flex">
          <i className="inline-flex justify-center items-center w-10 h-full bg-[#282828] rounded-md">
            <img src="/asicon/closedlock.svg" alt="closedlock" className="h-full w-full object-contain" />
          </i>
          <input
            type="password"
            name="password"
            placeholder="Wachtwoord..."
            required
            className="bg-[#2F2F2F] border-none h-full w-[calc(100%-50px)] text-[#737373] text-2xl ml-2"
          />
        </label>
        <button
          id="login-submit"
          type="submit"
          className="w-36 mb-10 ml-auto text-[#737373] text-lg bg-[#454545] h-10 rounded-md shadow-md hover:bg-[#4e4e4e] transition duration-300 flex items-center justify-center"
        >
          <img src="/asicon/login.svg" alt="login" className="h-full w-full object-contain " />
          <p className="px-2 text-[#737373] text-lg ">INLOGGEN</p>
        </button>
      </form>
      <p className="text-sm text-[#696969]">Hiet kunt u inloggen met uw Databank account. Heeft u deze niet? Maak zo ingame een nieuw account aan:</p>
      <label className="register w-full flex items-center rounded-md my-3">
        <input
          type="text"
          value="/databank wachtwoord"
          readOnly
          className="bg-[#2F2F2F] border-none text-[#737373] text-2xl ml-2 w-[calc(100%-50px)] rounded-md h-10"
        />
        <button type="button" className="border-none bg-none">
          <i className="inline-flex justify-center items-center w-10 h-full bg-[#282828] rounded-md">
            <img src="/asicon/document.svg" alt="document" className="h-full w-full object-contain" />
          </i>
        </button>
      </label>
      <p id="explainer" className="text-sm text-[#696969] mt-2">Druk op het icoontje om de command te kopieren, Voer dit uit in de server, dan krijgt u een tijdelijk wachtwoord.</p>
    </section>
  );
}
