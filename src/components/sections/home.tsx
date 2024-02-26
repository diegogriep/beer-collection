'use client'

import { getData } from '@/utils/getData'
import { getStorageItem } from '@/utils/localStorage'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import BeerCard, { BeerProps } from '../BeerCard'

export default function HomeSection() {
  const [loading, setLoading] = useState(true)
  const [beers, setBeers] = useState<BeerProps[]>([])
  const searchParams = useSearchParams()
  const beer_name = searchParams.get('beer_name')

  useEffect(() => {
    async function fetchData() {
      const result = await getData(beer_name)
      setLoading(false)
      setBeers(result)
    }

    fetchData()
  }, [beer_name])

  const checkThereIsNewBottle: BeerProps = getStorageItem('newBottle')
  const allBeers = checkThereIsNewBottle
    ? beers.concat(checkThereIsNewBottle).reverse()
    : beers

  return loading
    ? 'loading...'
    : allBeers.length > 0
    ? allBeers.map((beer) => <BeerCard key={beer.id} {...beer} />)
    : 'No beers found'
}
