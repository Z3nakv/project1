import type { Drink } from "../types"

    type CardDrinkProps = {
        drink: Drink
    }

const CardDrink = ({drink} : CardDrinkProps) => {
  return (
    <div>
        {drink.strDrink}
    </div>
  )
}

export default CardDrink