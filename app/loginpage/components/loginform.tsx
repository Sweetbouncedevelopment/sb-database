"use client";
import React, { use, useState } from 'react';
import Image from 'next/image';
import Style from './loginform.module.css';
interface LoginFormProps {
  // Define any props here if needed
}

const LoginForm: React.FC<LoginFormProps> = ({ /* destructure props here if needed */ }) => {
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      type: formData.get('type'),
      name: formData.get('name'),
      password: formData.get('password')
    };

    try {

    } catch (error) {
      setError('Er is iets fout gegaan bij het inloggen. Probeer het opnieuw.');
    }
  };

  return (
    <section className="login">
      <h1>LOG IN OP UW ACCOUNT</h1>
      <hr />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="type" value="login" />
        <label>
          <i className={Style.asicon}>
            <Image src="/databank/asicon/user.svg" alt="user"/>
          </i>
          <input type="text" name="name" placeholder="Naam..." required />
        </label>
        <label>
          <i className={Style.asicon}>
            <Image src="/databank/asicon/closedlock.svg" alt="closedlock" />
            </i>
          <input type="password" name="password" placeholder="Wachtwoord..." required />
        </label>
        <button className={Style.loginsubmit} type="submit">
          <i className={Style.asicon}><Image src="/databank/asicon/login.svg" alt="login" /></i>
          INLOGGEN
        </button>
      </form>
      <p className={Style.explainer}>
        Hier kunt u inloggen met uw Databank account.
        Heeft u deze niet? Maak dan in-game een nieuw account aan.
      </p>
      <form>
        <label>
          <input type="text" placeholder="/databank wachtwoord" required />
          <button className={Style.registerbutton}type="submit">
            <i className={Style.asicon}><Image src="/databank/asicon/document.svg" alt="document" /></i>
          </button>
        </label>
      </form>
      <p className={Style.explainer}>
        Druk op het icoontje om de command te kopiëren,
        voer dit uit in de server en ontvang een tijdelijk wachtwoord.
      </p>
    </section>
  );
};

export default LoginForm;
