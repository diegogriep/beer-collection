'use client'

import BeerCard, { BeerProps } from "@/components/BeerCard";
import { getData } from "@/utils/getData";
import { getStorageItem } from "@/utils/localStorage";
import { useSearchParams } from "next/navigation";

export default async function Home() {
  const searchParams = useSearchParams()

  const beer_name = searchParams.get('beer_name')
  const beers: BeerProps[] = await getData(beer_name)

  const checkThereIsNewBottle: BeerProps = getStorageItem('newBottle')
  const allBeers = checkThereIsNewBottle ?  beers.concat(checkThereIsNewBottle).reverse() : beers

  return allBeers.length > 0 ? allBeers.map(beer => <BeerCard key={beer.id} {...beer} />) : (
    'No beers found'
  )
}
