"use client";
import React, { use, useState } from 'react';
import Image from 'next/image';
import Style from './loginform.module.css';


interface LoginFormProps {
  // Define any props here if needed
}

const LoginForm: React.FC<LoginFormProps> = ({ /* destructure props here if needed */ }) => {
  const [error, setError] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<string>('');

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

  const handleCopy = () => {
    const textToCopy = '/databankcreate'; // Replace with the text you want to copy
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess('');
      setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
    }, () => {
      setCopySuccess('');
    });
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
          <input type="text" name="name" placeholder="Naam..." required />
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
        Heeft u deze niet? Maak dan in-game een nieuw account aan.
      </p>    
        <label>
          <p className={Style.copytext}>/databankcreate</p>
          <button onClick={handleCopy} className={Style.copybutton}>
            <i className={Style.asicon}>
              <Image src="/asicon/document.svg" alt="document" height={100} width={40} />
            </i>
          </button>
          {copySuccess && <p className={Style.copySucces}>{copySuccess}</p>}
        </label>
      <p className={Style.explainer}>
        Druk op het icoontje om de command te kopiëren,
        voer dit uit in de server en ontvang een tijdelijk wachtwoord.
      </p>
    </section>
  );
};

export default LoginForm;
