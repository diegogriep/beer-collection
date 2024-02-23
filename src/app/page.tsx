import BeerCard, { BeerProps } from "@/components/BeerCard";
import { getData } from "@/utils/getData";
import { getStorageItem } from "@/utils/localStorage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [beers, setBeers] = useState<BeerProps[]>([])
  const searchParams = useSearchParams()
  const beer_name = searchParams.get('beer_name')

  useEffect(() => {
    async function fetchData() {
      const result = await getData(beer_name)
      setBeers(result)
    }

    fetchData()
  }, [beer_name])

  const checkThereIsNewBottle: BeerProps = getStorageItem('newBottle')
  const allBeers = checkThereIsNewBottle ?  beers.concat(checkThereIsNewBottle).reverse() : beers

  return allBeers.length > 0 ? allBeers.map(beer => <BeerCard key={beer.id} {...beer} />) : (
    'No beers found'
  )
}
