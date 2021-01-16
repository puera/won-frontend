import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartDropdownProps = {
  games?: GameItemProps[]
  total?: string
}

const CartDropdown = ({ games, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={games?.length} />}>
      <CartList games={games} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
