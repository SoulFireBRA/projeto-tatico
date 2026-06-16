import type { Metadata } from "next";
import OperationCard from "@/components/OperationCard";

export const metadata: Metadata = {
  title: "Operações // Projeto Tático",
  description: "Táticas e protocolos de treinamento do Projeto Tático.",
};

const OPERACOES = [
  {
    code: "OP-01",
    title: "MOVIMENTOS",
    description:
      "Counter-strafing, peek de ângulos, jiggle-peek e controle de ritmo. Treino de movimentação para reduzir exposição e ganhar duelos antes mesmo do primeiro tiro.",
  },
  {
    code: "OP-02",
    title: "COMUNICAÇÃO",
    description:
      "Callouts padronizados, prioridade de informação e protocolo de rádio. Squad que se comunica certo reage mais rápido que o inimigo consegue pensar.",
  },
  {
    code: "OP-03",
    title: "POSICIONAMENTO",
    description:
      "Crossfires, controle de ângulos e leitura de mapa. Cada operador ocupa a posição certa, na hora certa, para sustentar o time e negar espaço ao inimigo.",
  },
  {
    code: "OP-04",
    title: "ROTAÇÕES",
    description:
      "Timing de rotação, fake-rotates e cobertura de flanco. Reagir rápido a informação sem abrir brechas — a diferença entre vencer o round e perder o site.",
  },
];

export default function OperacoesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="mb-2 text-xs tracking-[0.3em] text-pt-green/50">
        &gt; ARQUIVO DE OPERAÇÕES // ACESSO LIBERADO
      </p>
      <h1 className="text-3xl font-bold tracking-widest text-pt-green text-glow sm:text-4xl">
        OPERAÇÕES
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pt-green/70 sm:text-base">
        Os quatro pilares táticos trabalhados em todo treino do Projeto
        Tático. Domine cada dossiê para evoluir de recruta a operador.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {OPERACOES.map((op) => (
          <OperationCard key={op.code} {...op} />
        ))}
      </div>
    </div>
  );
}
