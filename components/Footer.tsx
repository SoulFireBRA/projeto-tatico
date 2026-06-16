import ZuluClock from "./ZuluClock";

export default function Footer() {
  return (
    <footer className="border-t border-pt-green/40 bg-black px-4 py-6 text-xs text-pt-green/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-1 tracking-wider">
          <span>COORD: 22&deg;54&apos;30&quot;S 43&deg;10&apos;51&quot;W</span>
          <span>SETOR: 07-DELTA</span>
          <span>NÍVEL DE ACESSO: OMEGA</span>
        </div>
        <div className="flex items-center gap-2 tracking-wider">
          <span
            aria-hidden
            className="status-dot inline-block h-2 w-2 rounded-full bg-pt-green"
          />
          <span>
            HORA ZULU: <ZuluClock />
          </span>
        </div>
      </div>
      <p className="mt-4 text-center tracking-wider text-pt-green/40">
        © {new Date().getFullYear()} PROJETO TÁTICO // TRANSMISSÃO CRIPTOGRAFADA // TODOS OS DIREITOS RESERVADOS
      </p>
    </footer>
  );
}
