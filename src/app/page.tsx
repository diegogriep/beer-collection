import HomeSection from '@/components/sections/home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beer collection',
  description: 'The best beers in the world'
}

export default function Home() {
  return <HomeSection />
}
