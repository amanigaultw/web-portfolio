'use client'

type StaticGradientProps = {
  position?: string
  color?: string
  radius?: number
  opacity?: number
}

export default function StaticGradient({
  position = '50% 50%',
  color = 'rgba(105, 129, 16)',
  radius = 600,
  opacity = 0.2,
}: StaticGradientProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(${radius}px at ${position}, ${color.replace(
          /rgba?\([^)]*\)/,
          color
        ).includes('rgba')
          ? color
          : `rgba(${hexToRgb(color)}, ${opacity})`
        }, transparent 80%)`,
      }}
    />
  )
}

/**
 * Helper to convert hex colors (e.g. #69A110) into RGB string for rgba() usage.
 */
function hexToRgb(hex: string): string {
  let sanitized = hex.replace('#', '')
  if (sanitized.length === 3) {
    sanitized = sanitized
      .split('')
      .map((c) => c + c)
      .join('')
  }

  const bigint = parseInt(sanitized, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r}, ${g}, ${b}`
}
