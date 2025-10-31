'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <DottedGlowBackground
              className="pointer-events-none mask-radial-to-90% mask-radial-at-center hidden lg:block"
              opacity={.75}
              gap={10}
              radius={1.6}
              colorLightVar="--color-neutral-500"
              glowColorLightVar="--color-neutral-600"
              colorDarkVar="--color-neutral-500"
              glowColorDarkVar="--color-sky-800"
              backgroundOpacity={0}
              speedMin={0.3}
              speedMax={1.6}
              speedScale={1.5}
            />
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Andrew Manigault, PhD
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I apply a scientificly-rooted approach to engineer creative, user-centric software solutions.
        </p>

        <Navigation />
      </div>

      <SocialLinks />
    </header>
  )
}