import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  games?: GameItemProps[]
  total: string
}

const CartList = ({ games, total }: CartListProps) => (
  <S.Wrapper>
    {!!games &&
      games.map((game) => (
        <GameItem
          key={game.title}
          title={game.title}
          price={game.price}
          img={game.img}
        />
      ))}

    <S.Footer>
      Total: <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
