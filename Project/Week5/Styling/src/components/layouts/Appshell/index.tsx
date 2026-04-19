import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  return (
    <main>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
