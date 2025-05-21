"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Link from "next/link";
import ProjectsSection from "./sections/projects";
import BlogSection from "./sections/blog";

const FreelanceSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>Welcome to the Freelance Page</h1>
      <LanguageSwitcher />
      <p>{t("welcome")}</p>
      <Link href="/hiring">Hiring</Link>
      <Link href="/">Home</Link>
      <ProjectsSection />
      <BlogSection />
    </div>
  );
};

export default FreelanceSection;
