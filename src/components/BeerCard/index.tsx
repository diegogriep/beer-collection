import Image from 'next/image'
import Button from '../Button'
import * as S from './styles'

export type IngredientsBeerProps = {
  name: string
  amount: IngredientAmountProps
  add?: string
  attribute?: string
}

export type IngredientsKindProps = {
  [name: string]: IngredientsBeerProps[]
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

const BeerCard = ({
  id,
  name,
  image_url,
  tagline,
  brewers_tips
}: Partial<BeerProps>) => (
  <S.Wrapper>
    <h1>{name}</h1>
    <h2>{tagline}</h2>

    <div>
      <Image
        priority
        style={{ width: 75, height: 75 }}
        alt={name!}
        src={image_url!}
        width={75}
        height={128}
      />

      <p>{brewers_tips}</p>
    </div>

    <Button as="a" href={`/beer/${id}`} title="Learn more">
      Learn more
    </Button>
  </S.Wrapper>
)

export default BeerCard
