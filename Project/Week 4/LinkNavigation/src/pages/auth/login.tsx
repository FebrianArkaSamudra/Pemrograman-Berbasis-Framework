import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/produk");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button> <br />
      <Link href="/auth/register">Go to Register Page</Link>
    </div>
  );
};

export default LoginPage;
