import HomeSection from '@/components/sections/home'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Beer collection',
  description: 'The best beers in the world'
}

export default function Home() {
  return (
    <Suspense>
      <HomeSection />
    </Suspense>
  )
}
