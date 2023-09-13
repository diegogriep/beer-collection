'use client'

import BeerCard, { BeerProps } from "@/components/BeerCard";
import { getData } from "@/utils/getData";
import { useSearchParams } from "next/navigation";

export default async function Home() {
  const searchParams = useSearchParams()

  const beer_name = searchParams.get('beer_name')
  const beers: BeerProps[] = await getData(beer_name)
  return beers.map(beer => <BeerCard key={beer.id} {...beer} />)
}
