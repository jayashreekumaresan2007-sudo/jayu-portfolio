export function SceneFallback() {
  return (
    <div
      className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-surface"
      aria-hidden="true"
    >
      <div className="absolute h-56 w-56 rounded-full border border-olive/70" />
      <div className="absolute h-36 w-36 rotate-12 border border-ivory/40" />
      <div className="absolute h-20 w-20 rounded-full bg-olive/40 blur-md" />
      <p className="relative eyebrow text-silver">Specimen form</p>
    </div>
  )
}
