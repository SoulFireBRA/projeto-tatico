import type { Metadata } from "next";
import RecruitForm from "@/components/RecruitForm";

export const metadata: Metadata = {
  title: "Recrutar // Projeto Tático",
  description: "Inicie seu processo de recrutamento no Projeto Tático.",
};

export default function RecrutarPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <p className="mb-2 text-xs tracking-[0.3em] text-pt-green/50">
        &gt; FORMULÁRIO DE ALISTAMENTO // CONFIDENCIAL
      </p>
      <h1 className="text-3xl font-bold tracking-widest text-pt-green text-glow sm:text-4xl">
        RECRUTAMENTO
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-pt-green/70 sm:text-base">
        Preencha a ficha abaixo para iniciar sua avaliação. Toda informação é
        tratada com sigilo. Operadores aprovados recebem convite para o
        servidor de comando.
      </p>

      <div className="mt-10">
        <RecruitForm />
      </div>
    </div>
  );
}
