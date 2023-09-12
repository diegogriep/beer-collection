import { IngredientsBeerProps, IngredientsKindProps } from "@/components/BeerCard"

export function formatIngredient (ingredient: IngredientsKindProps[]) {
  return Object.values(ingredient).map((content) => {
    let step = ''

    return (
      content.map((info: IngredientsBeerProps, index: number) => {
        const contentName = info?.name
        const {value, unit} = info.amount
        return (
          <p key={index}>
            {`${contentName} - ${value} ${unit}`}
          </p>
        )
      })
    )
  }
  )
}
