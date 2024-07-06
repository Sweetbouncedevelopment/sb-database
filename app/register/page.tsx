import Style from './registerpage.module.css';
import RegisterForm from './components/registerform'

export default function Home() {
  return (
    <body className={Style.backgroundimg}>
      <RegisterForm/>
      <footer className={Style.footer}>
        <p>&copy; Made by Sweetbounce</p>
      </footer>
    </body>
  );
}