import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'
import Button from '../Button'

export type IngredientsBeerProps = {
  name: string
  amount: IngredientAmountProps
  add?: string
  attribute?: string
}

export type IngredientsKindProps = {
  [name: string]: IngredientsBeerProps[] | string
}

type IngredientAmountProps = {
  value: number
  unit: string
}

export type BeerProps = {
  id: number
  name: string
  description: string
  image_url: string
  tagline: string
  ingredients: IngredientsKindProps
  brewers_tips: string
}

const BeerCard = ({ id, name, image_url, tagline, brewers_tips }: Partial<BeerProps>) => (
  <S.Wrapper>
    <h1>{name}</h1>
    <h2>{tagline}</h2>

    <div>
      <Image alt={name!} src={image_url!} width={75} height={128} />

      <p>{brewers_tips}</p>
    </div>

    <Link href={`/beer/${id}`} passHref>
      <Button as='a'>
        Learn more
      </Button>
    </Link>
  </S.Wrapper>
)

export default BeerCard
