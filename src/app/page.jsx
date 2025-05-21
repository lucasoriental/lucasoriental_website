//import { useTranslations } from "next-intl";
import ThemeSwitch from "@/components/ui/themeSwitcher";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <ThemeSwitch />
        <Link href="/freelance">Freelance</Link>
        <Link href="/hiring">Hiring</Link>
      </div>
      <h1></h1>
    </>
  );
};

export default HomePage;
