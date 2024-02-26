'use client'

import Image from 'next/image'
import { BeerProps, IngredientsKindProps } from '../BeerCard'
import * as S from './styles'
import { handleIngredientObj } from '@/utils/handleIngredientObj'
import { formatIngredient } from '@/utils/formatIngredient'

const BeerDetail = ({
  brewers_tips,
  description,
  image_url,
  ingredients,
  name,
  tagline
}: BeerProps) => {
  const mergedIngredients = handleIngredientObj(ingredients)

  return (
    <S.Wrapper>
      <h1>{name}</h1>
      <h2>{tagline}</h2>

      <article>
        <Image priority alt={name!} src={image_url!} width={180} height={360} />

        <section>
          {description}
          <span>
            <strong>Tips:</strong>
            {brewers_tips}
          </span>

          <h3>Ingredients</h3>
          <ul>
            {mergedIngredients.map(
              (ingredient: string | IngredientsKindProps, i: number) => {
                const topping =
                  typeof ingredient === 'string'
                    ? ingredient
                    : Object.keys(ingredient)

                return (
                  <li key={i}>
                    <h4>{topping}</h4>

                    {typeof ingredient !== 'string' &&
                      formatIngredient(ingredient)}
                  </li>
                )
              }
            )}
          </ul>
        </section>
      </article>
    </S.Wrapper>
  )
}

export default BeerDetail
