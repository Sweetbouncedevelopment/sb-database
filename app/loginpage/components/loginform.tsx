"use client";
import React, { use, useState } from 'react';
import Image from 'next/image';
import Style from './loginform.module.css';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface LoginFormProps {
  // Define any props here if needed
}

const LoginForm: React.FC<LoginFormProps> = ({ /* destructure props here if needed */ }) => {
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      password: formData.get('password')
    };

    try {

    } catch (error) {
      setError('Er is iets fout gegaan bij het inloggen. Probeer het opnieuw.');
    }
  };

  return (
    <section className={Style.login}>
      <h1>LOG IN OP UW ACCOUNT</h1>
      <hr />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="type" value="login" />
        <label>
          <i className={Style.asicon}>
            <Image src="/asicon/user.svg" alt="user" height={100} width={40}/>
          </i>
          <input type="text" name="name" placeholder="Gebruikersnaam..." required />
        </label>
        <label>
          <i className={Style.asicon}>
            <Image src="/asicon/closedlock.svg" alt="closedlock" height={100} width={40} />
          </i>
          <input type="password" name="password" placeholder="Wachtwoord..." required />
        </label>
        <button className={Style.loginsubmit} type="submit">
          <i className={Style.asicon}>
            <Image src="/asicon/login.svg" alt="login" height={100} width={40} />
          </i>
          <span>INLOGGEN</span>
        </button>
      </form>
      <p className={Style.explainer}>
        Hier kunt u inloggen met uw Databank account.
        Heeft u deze niet? Maak dan een nieuw account aan.
      </p>    
      <a href="/register" className={Style.registerbutton}>Register Account</a>
    </section>
  );
};

export default LoginForm;
