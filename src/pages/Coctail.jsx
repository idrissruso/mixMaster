import Button from '../components/Button'
import { useNavigate, useLoaderData } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

function Coctail() {
  const navigate = useNavigate()
  const data = useLoaderData()
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = data.drinks[0]

  const strIngredients =
    strIngredient1 + ' ' + strIngredient2 + ' ' + strIngredient3

  const [ref, inView] = useInView({
    triggerOnce: true, // Load only once
    rootMargin: '200px',
  })

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-11">{strDrink}</h1>
      <div className="flex lg:flex-nowrap flex-wrap gap-x-10 gap-y-3 items-center">
        <img
          alt={strDrink}
          className="max-w-[26rem] h-[24rem]"
          ref={ref}
          src={inView ? strDrinkThumb : ''}
          loading="lazy"
        />
        <div className="">
          <Item KeyWord={'Name'} value={strDrink} />
          <Item KeyWord={'Category'} value={strCategory} />
          <Item KeyWord={'Info'} value={strAlcoholic} />
          <Item KeyWord={'Glass'} value={strGlass} />
          <Item KeyWord={'Ingredients'} value={strIngredients} />
          <Item KeyWord={'Instructions'} value={strInstructions} />
        </div>
      </div>

      <div onClick={() => navigate(-1)} className="mt-10">
        <Button type={'btn'}>{'<--Return'}</Button>
      </div>
    </div>
  )
}

function Item({ KeyWord, value }) {
  return (
    <div className="my-5">
      <Button type={'word'}>
        {KeyWord}
        {' : '}
      </Button>
      <span className="text-base font-medium ml-2 ">{value}</span>
    </div>
  )
}

export async function loader({ id }) {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
  )
  console.log(data)
  return await data.json()
}

export default Coctail
