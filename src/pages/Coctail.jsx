import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Coctail() {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-11">A1</h1>
      <div className="flex lg:flex-nowrap flex-wrap gap-x-10 gap-y-3 items-center">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt=""
          className="max-w-[26rem] h-[24rem]"
        />
        <div className="">
          <Item KeyWord={'Name'} value={'name'} />
          <Item KeyWord={'Category'} value={'Cocktail'} />
          <Item KeyWord={'Info'} value={'Alcoholic'} />
          <Item KeyWord={'Glass'} value={'Cocktail Glass'} />
          <Item
            KeyWord={'Ingredients'}
            value={'Gin,Grand Marnier,Lemon Juice,Grenadine'}
          />
          <Item
            KeyWord={'Instructions'}
            value={
              'Pour All Ingredients Into A Cocktail Shaker, Mix And Serve Over Ice Into A Chilled Glass.'
            }
          />
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

export default Coctail
