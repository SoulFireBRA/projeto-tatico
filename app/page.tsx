import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";
import OperatorCounter from "@/components/OperatorCounter";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center">
      <p className="mb-6 text-xs tracking-[0.3em] text-pt-green/50">
        &gt; INICIALIZANDO SISTEMA... ACESSO CONCEDIDO
      </p>

      <div className="mb-6 flex h-24 w-24 items-center justify-center border-2 border-pt-green text-3xl font-bold text-pt-green text-glow sm:h-32 sm:w-32 sm:text-4xl">
        [P.T.]
      </div>

      <h1 className="text-4xl font-bold tracking-widest text-pt-green text-glow sm:text-6xl">
        PROJETO TÁTICO
      </h1>

      <TypewriterText
        as="p"
        text="TREINE. COORDENE. DOMINE."
        speed={60}
        startDelay={400}
        className="mt-4 text-lg tracking-[0.2em] text-pt-green/80 sm:text-2xl"
      />

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-pt-green/60 sm:text-base">
        Comunidade tática de jogos FPS competitivos. Operadores treinados em
        movimentação, comunicação, posicionamento e rotações — prontos para
        qualquer engajamento.
      </p>

      <div className="mt-10">
        <OperatorCounter target={1437} />
      </div>

      <Link
        href="/recrutar"
        className="mt-10 border border-pt-green px-8 py-4 text-sm font-bold tracking-widest text-pt-green text-glow transition-colors hover:bg-pt-green/10 sm:text-base"
      >
        [ INICIAR RECRUTAMENTO ]
      </Link>
    </div>
  );
}
