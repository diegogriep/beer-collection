import { IngredientsKindProps } from "@/components/BeerCard"

export function handleIngredientObj (ingredients: IngredientsKindProps) {
  let ingredientsArr: Array<string> & IngredientsKindProps[] = []

  for (const [ingredient, value] of Object.entries(ingredients)) {
    if (typeof value === 'string') {
      ingredientsArr.push(`${ingredient}: ${value}`)
    } else {
      let ingredientObj = {
        [ingredient]: value
      }
      ingredientsArr.push(ingredientObj)
    }
  }

  return ingredientsArr
}
