'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Dr. Andrew Manigault
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build engaging, data-driven digital experiences.
        </p>

        <Navigation />
      </div>

      <SocialLinks />
    </header>
  )
}