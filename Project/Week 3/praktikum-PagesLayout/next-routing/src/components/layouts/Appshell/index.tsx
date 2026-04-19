import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <footer>
        Praktikum Next.js Pages Router
      </footer>
    </main>
  );
};

export default AppShell;
