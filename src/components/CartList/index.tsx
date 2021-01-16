import Link from 'next/link'
import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  games?: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ games, total, hasButton = false }: CartListProps) => (
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
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>

      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
