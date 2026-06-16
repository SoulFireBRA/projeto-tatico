"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-pt-green/40 bg-black px-3 py-2 font-mono text-sm text-pt-green outline-none transition-colors placeholder:text-pt-green/30 focus:border-pt-green";

export default function RecruitForm() {
  const [callsign, setCallsign] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-pt-green bg-black p-6 text-pt-green">
        <p className="text-glow">
          &gt; TRANSMISSÃO RECEBIDA, OPERADOR {callsign.trim() || "DESCONHECIDO"}.
        </p>
        <p className="mt-3 text-sm text-pt-green/70">
          Sua ficha foi encaminhada ao comando. Aguarde contato em até 48
          horas. Mantenha o silêncio de rádio até nova ordem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="callsign" className="mb-1 block text-xs tracking-wider text-pt-green/60">
          CALLSIGN *
        </label>
        <input
          id="callsign"
          name="callsign"
          required
          value={callsign}
          onChange={(e) => setCallsign(e.target.value)}
          placeholder="EX: GHOST-7"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="jogo" className="mb-1 block text-xs tracking-wider text-pt-green/60">
          JOGO PRINCIPAL *
        </label>
        <select id="jogo" name="jogo" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            SELECIONE...
          </option>
          <option value="valorant">VALORANT</option>
          <option value="cs2">COUNTER-STRIKE 2</option>
          <option value="apex">APEX LEGENDS</option>
          <option value="r6">RAINBOW SIX SIEGE</option>
          <option value="outro">OUTRO</option>
        </select>
      </div>

      <div>
        <label htmlFor="patente" className="mb-1 block text-xs tracking-wider text-pt-green/60">
          PATENTE DESEJADA
        </label>
        <select id="patente" name="patente" defaultValue="recruta" className={inputClass}>
          <option value="recruta">RECRUTA</option>
          <option value="operador">OPERADOR</option>
          <option value="operador-senior">OPERADOR SÊNIOR</option>
        </select>
      </div>

      <div>
        <label htmlFor="disponibilidade" className="mb-1 block text-xs tracking-wider text-pt-green/60">
          DISPONIBILIDADE
        </label>
        <input
          id="disponibilidade"
          name="disponibilidade"
          placeholder="EX: NOITES, FINS DE SEMANA"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1 block text-xs tracking-wider text-pt-green/60">
          MENSAGEM AO COMANDO
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="RELATE SUA EXPERIÊNCIA EM COMBATE..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="mt-2 border border-pt-green px-5 py-3 text-sm font-bold tracking-widest text-pt-green text-glow transition-colors hover:bg-pt-green/10"
      >
        [ ENVIAR TRANSMISSÃO ]
      </button>
    </form>
  );
}
