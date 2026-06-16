import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missão // Projeto Tático",
  description: "Conheça a missão e os valores da comunidade Projeto Tático.",
};

const VALORES = [
  {
    code: "ART. 1",
    title: "DISCIPLINA",
    text: "Cada operador chega ao treino preparado. Pontualidade e estudo de mapa não são opcionais.",
  },
  {
    code: "ART. 2",
    title: "COMUNICAÇÃO",
    text: "Callouts claros, objetivos e sem ruído. Informação errada custa rounds — e operações.",
  },
  {
    code: "ART. 3",
    title: "TRABALHO EM EQUIPE",
    text: "Nenhuma squad vence sozinha. Cobrimos flancos, sacrificamos posição e jogamos pelo time.",
  },
  {
    code: "ART. 4",
    title: "EVOLUÇÃO CONSTANTE",
    text: "Revisão de VODs, scrims semanais e autocrítica. O inimigo evolui — nós também.",
  },
];

export default function MissaoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="mb-2 text-xs tracking-[0.3em] text-pt-green/50">
        &gt; DOSSIÊ DE ACESSO RESTRITO // NÍVEL OMEGA
      </p>
      <h1 className="text-3xl font-bold tracking-widest text-pt-green text-glow sm:text-4xl">
        MISSÃO
      </h1>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-pt-green/80 sm:text-base">
        <p>
          O <strong className="text-pt-green">Projeto Tático</strong> nasceu
          de uma constatação simples: talento individual perde para
          coordenação. Somos uma comunidade de jogos FPS competitivos
          dedicada a transformar jogadores soltos em unidades táticas
          coesas.
        </p>
        <p>
          Não somos apenas um servidor de Discord. Somos um centro de
          treinamento. Aqui, cada operador passa por instrução de
          movimentação, protocolos de comunicação, posicionamento de mapa e
          rotações sincronizadas — as mesmas disciplinas usadas por equipes
          de elite no cenário competitivo.
        </p>
        <p>
          Nossa missão é simples e direta:{" "}
          <span className="text-pt-green text-glow">
            preparar operadores para dominar qualquer engajamento
          </span>
          , em qualquer título FPS, através de treino estruturado,
          disciplina de squad e análise constante de performance.
        </p>
      </div>

      <h2 className="mt-12 text-xl font-bold tracking-widest text-pt-green text-glow">
        CÓDIGO DE CONDUTA
      </h2>

      <div className="mt-6 space-y-4">
        {VALORES.map((v) => (
          <div
            key={v.code}
            className="border border-pt-green/40 bg-black p-4"
          >
            <div className="flex items-center justify-between text-xs tracking-wider text-pt-green/50">
              <span>{v.code}</span>
              <span>[ VIGENTE ]</span>
            </div>
            <h3 className="mt-2 text-base font-bold tracking-wider text-pt-green">
              {v.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-pt-green/70">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
