export default function OperationCard({
  code,
  title,
  description,
}: {
  code: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-pt-green/40 bg-black p-5 transition-colors hover:border-pt-green hover:bg-pt-green/5">
      <div className="mb-3 flex items-center justify-between text-xs tracking-wider text-pt-green/50">
        <span>DOSSIÊ {code}</span>
        <span>[ CLASSIFICADO ]</span>
      </div>
      <h3 className="mb-2 text-lg font-bold tracking-wider text-pt-green text-glow">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-pt-green/70">
        {description}
      </p>
    </div>
  );
}
