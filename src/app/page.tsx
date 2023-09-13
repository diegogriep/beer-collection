'use client'

import BeerCard, { BeerProps } from "@/components/BeerCard";
import { getData } from "@/utils/getData";

export default async function Home() {
  const beers: BeerProps[] = await getData()
  return beers.map(beer => <BeerCard key={beer.id} {...beer} />)
}
