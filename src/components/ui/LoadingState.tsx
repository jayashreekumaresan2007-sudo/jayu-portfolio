export function LoadingState({ label = 'Loading' }: { label?: string }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-4 py-16 text-silver">
      <span className="h-px w-24 origin-center bg-olive" style={{ animation: 'pulse-line 1.6s ease infinite' }} />
      <p className="eyebrow">{label}</p>
    </div>
  )
}
