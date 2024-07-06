"use client";

import { useState } from 'react';
import Style from './registerform.module.css';
import Image from 'next/image';


interface RegisterFormProps {
  // Define any props here if needed
}

const RegisterForm: React.FC<RegisterFormProps> = ({ /* destructure props here if needed */ }) => {
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('username'),
      password: formData.get('password')
    };

    try {

    } catch (error) {
      setError('Er is iets fout gegaan bij het maken van je account. Probeer het opnieuw.');
    }
  };

  return (
    <section className={Style.register}>
      <h1>Registreer je account</h1>
      <hr />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="type" value="register" />
        <label>
          <i className={Style.asicon}>
            <Image src="/asicon/user.svg" alt="user" height={100} width={40}/>
          </i>
          <input type="text" name="username" placeholder="Gebruikersnaam..." required />
        </label>
        <label>
          <i className={Style.asicon}>
            <Image src="/asicon/closedlock.svg" alt="closedlock" height={100} width={40} />
          </i>
          <input type="password" name="password" placeholder="Wachtwoord..." required />
        </label>
        <button className={Style.registersubmit} type="submit">
          <i className={Style.asicon}>
            <Image src="/asicon/login.svg" alt="registreer" height={100} width={40} />
          </i>
          <span>Registreren</span>
        </button>
      </form>  
    </section>
  );
};

export default RegisterForm;
