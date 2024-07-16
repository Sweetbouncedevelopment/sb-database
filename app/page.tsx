import LoginForm from "./loginpage/components/loginform";
import Style from "./loginpage/components/loginform.module.css";

export default function Home() {
  return (
    <>
      <LoginForm />
      <footer className={Style.footer}>
        <p>&copy; Made by Sweetbounce</p>
      </footer>
    </>
  );
}
