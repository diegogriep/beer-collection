import { IngredientsKindProps } from "@/components/BeerCard"

export function handleIngredientObj (ingredients: IngredientsKindProps) {
  const ingredientsArr: Array<string> & IngredientsKindProps[] = []

  for (const [ingredient, value] of Object.entries(ingredients)) {
    if (typeof value === 'string') {
      ingredientsArr.push(`${ingredient}: ${value}`)
    } else {
      const ingredientObj = {
        [ingredient]: value
      }
      ingredientsArr.push(ingredientObj)
    }
  }

  return ingredientsArr
}
