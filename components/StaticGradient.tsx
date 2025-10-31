export default function StaticGradient() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(600px at 50% 0%, rgba(105, 129, 16, 0.2), transparent 80%)`
      }}
    />
  )
}