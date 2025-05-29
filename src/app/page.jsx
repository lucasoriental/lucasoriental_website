"use client";
//import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";

import { useState } from "react";

import React from "react";

import { ArrowLeft, ArrowRight, Info } from "lucide-react";

const HomePage = () => {
  const [section, setSection] = useState("home");

  const handleSectionChange = (newSection) => setSection(newSection);

  console.log("Current section:", section);

  if (section === "home") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-red-100 to-white py-9">
        <h1 className="text-3xl font-bold text-[#1F1F1F] text-center">
          Bem Vindo ao meu Website 👋
        </h1>
        <div className="mt-6 mb-12">
          <img
            src="/images/profesional-picture.webp"
            alt="Lucas Oriental posando com braços cruzados olhando para frente"
            className="xs:w-[18.75rem] xm:h-[18.75rem] rounded-full mx-auto"
          />
          <p className="mt-12 text-2xl text-[#E23030] font-bold text-center">
            Meu nome é Lucas Oriental
          </p>
          <p className="mt-1 text-[#E23030] text-xl font-semibold text-center">
            Sou desenvolvedor Full-Stack
          </p>
        </div>
        <div>
          <h3 className="text-[#1F1F1F] text-lg font-medium text-center mb-7">
            Escolha a melhor opção para si:
          </h3>
          <div className="flex gap-7">
            <Button
              onClick={() => handleSectionChange("freelance")}
              texto="Clientes"
              icon={ArrowLeft}
              inverted={false}
              className="flex gap-2 bg-gradient-to-l from-[#E2833E] to-[#672B00] text-white w-[8.75rem] py-8 justify-center rounded-2xl"
            />
            <Button
              onClick={() => handleSectionChange("hiring")}
              texto="Empresas"
              icon={ArrowRight}
              inverted
              className="flex gap-2 bg-gradient-to-l from-[#E23030] to-[#460909] text-white w-[8.75rem] py-8 justify-center rounded-2xl"
            />
          </div>
        </div>
      </main>
    );
  }
  if (section === "hiring") {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-9 bg-homeSections bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/80 to-red-500/80 pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-md">
          <div className="bg-slate-100/10 p-3 rounded-full mb-20">
            <ArrowLeft
              onClick={() => handleSectionChange("home")}
              className="cursor-pointer text-white"
            />
          </div>
          <h3 className="text-3xl font-bold text-white mb-24 max-w-96">
            Estou a procura de um profissional a tempo integral!
          </h3>
          <Button
            className="flex align-center gap-3 bg-white text-red-600 py-6 justify-center rounded-2xl w-[19.375rem] text-center text-sm"
            icon={ArrowRight}
            texto="Ir para Secção para Empresas"
            inverted
          />
          <div className="flex flex-col items-center mt-24 text-white max-w-96">
            <Info />
            <p className="text-sm font-medium text-center mt-3">
              Esta secção é destinada à empresas que queiram-me contratar como
              um profissional a tempo inteiro ou parcial!
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (section === "freelance") {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-9 bg-homeSections bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-800/80 to-amber-500/80 pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-md">
          <div className="bg-slate-100/10 p-3 rounded-full mb-20">
            <ArrowRight
              onClick={() => handleSectionChange("home")}
              className="cursor-pointer text-white"
            />
          </div>
          <h3 className="text-3xl font-bold text-white mb-24 max-w-96">
            Estou a procura de um profissional para um serviço!
          </h3>
          <Button
            className="flex align-center gap-3 bg-white text-amber-600 py-6 justify-center rounded-2xl w-[19.375rem] text-center"
            icon={ArrowLeft}
            texto="Ir para secção de Clientes"
            inverted={false}
          />
          <div className="flex flex-col items-center mt-12 text-white max-w-96 sm:mt-24">
            <Info />
            <p className="text-sm font-medium text-center mt-3">
              Esta secção é destinada à clientes ou empresas que queiram
              adquirir algum serviço ou Contratos B2B.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
