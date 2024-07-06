import LoginForm from './loginpage/components/loginform';
import Style from './loginpage/components/loginform.module.css'

export default function Home() {
  return (
    <body className={Style.backgroundimg}>
      <LoginForm/>
      <footer className={Style.footer}>
        <p>&copy; Made by test</p>
      </footer>
    </body>
  );
}