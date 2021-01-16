import Link from 'next/link'
import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'
import Empty from 'components/Empty'

export type CartListProps = {
  games?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ games = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!games.length}>
    {games.length ? (
      <>
        {games.map((game) => (
          <GameItem key={game.title} {...game} />
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
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers."
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
