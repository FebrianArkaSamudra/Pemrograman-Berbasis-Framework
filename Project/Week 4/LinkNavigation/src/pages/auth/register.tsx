import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link href="/auth/login">Go to Login Page</Link>
    </div>
  );
};

export default RegisterPage;
