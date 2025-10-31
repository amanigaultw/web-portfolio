export default function StaticGradient() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(600px at 20% 0%, rgba(127, 129, 16, 0.29), transparent 80%)`
      }}
    />
  )
}